import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


import { getChats, getMessages } from '../../store/chatSelector.js';
import { fetchChannels, addChannels } from '../../store/channelsSlice.js';
import { fetchMessages, addMessage } from '../../store/messagesSlice.js';
import { getAuthConfig, getIsAuthorized, getUserData } from '../../utils/storageUtils.js';

import Header from './Header.jsx';
import ChannelModal from './ChannelModal2.jsx';
import { ChannelDefault, ChannelUser } from './ChannelItem.jsx';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { chats } = useSelector(getChats);
  const { messages } = useSelector(getMessages)
  const [selectedChannel, setSelectedChannel] = useState(null)

  const [body, setBody] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");

  useEffect(() => {
    const channelId = chats[0]?.id;
    if (channelId && !selectedChannel) {
      setSelectedChannel(channelId)
      dispatch(fetchMessages(channelId))
    }
  }, [chats])

  useEffect(() => {
    if (!getIsAuthorized()) {
      return navigate('/login')
    } else {
      dispatch(fetchChannels())
      if (selectedChannel) {
        dispatch(fetchMessages(selectedChannel));
      }
    }
  }, [dispatch, navigate])

  const handleModal = (action) => {
    if (action === 'open') {
      setShowModal(true); // Встановлюємо showModal в true при виклику з параметром 'open'
    } else if (action === 'close') {
      setShowModal(false); // Встановлюємо showModal в false при виклику з параметром 'close'
    }
  };

  // const handleSubmitChanel = async (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(addChannels({ name: newChannelName }, getAuthConfig()));
  //     setShowModal(false);
  //     setNewChannelName("");
  //   } catch (error) {
  //     console.error(error);

  //   }
  // };

  // const handleChange = (e) => {
  //   setNewChannelName(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { body: body, channelId: selectedChannel, username: getUserData() };
    dispatch(addMessage(newMessage, getAuthConfig()));
    setBody("");
  }

  const handleSelect = (id) => {
    dispatch(fetchMessages(id))
    setSelectedChannel(id)
  }
  
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
          <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
            <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
              <b>Каналы</b>
              <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={() => handleModal('open')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
                <span className="visually-hidden">+</span>
              </button>
            </div>
            <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
              {chats.map((item, index) => (
                !item.removable ? (
                  <ChannelDefault key={index} item={item} selectedChannel={selectedChannel} handleSelect={handleSelect} />
                ) : (
                  <ChannelUser key={index} item={item} selectedChannel={selectedChannel} handleSelect={handleSelect} />
                )
              ))}
            </ul>
          </div>
          <div className="col p-0 h-100">
            <div className="d-flex flex-column h-100">
              <div className="bg-light mb-4 p-3 shadow-sm small">
                <p className="m-0">
                  <b># {selectedChannel ? chats.find(channel => channel.id === selectedChannel)?.name : ''}</b>
                </p>
                <span className="text-muted">{`${messages.length} сообщений`}</span>
              </div>
              <div id="messages-box" className="chat-messages overflow-auto px-5 ">
                {messages.map((message, index) => (
                  <div key={index} className="text-break mb-2">
                    <b>{message.username}</b>: {message.body}
                  </div>
                ))}
              </div>
              <div className="mt-auto px-5 py-3">
                <form className="py-1 border rounded-2" onSubmit={handleSubmit} noValidate>
                  <div className="input-group has-validation">
                    <input
                      name="body"
                      aria-label="Новое сообщение"
                      placeholder="Введите сообщение..."
                      className="border-0 p-0 ps-2 form-control"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <button type="submit" disabled="" className="btn btn-group-vertical">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                      </svg>
                      <span className="visually-hidden">Отправить</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <ChannelModal closeHandler={() => handleModal('close')} />}
    </div >
  )
};

export default Home;
