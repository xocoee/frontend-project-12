import React from 'react';

export const ChannelDefault = ({ item, selectedChannel, handleSelect }) => {
    return (
        <li className="nav-item w-100">
            <button
                type="button"
                className={`w-100 rounded-0 text-start text-truncate btn ${selectedChannel === item.id ? 'btn-secondary' : ''}`}
                onClick={() => handleSelect(item.id)}
            >
                <span className="me-1">#</span>
                {item.name}
            </button>
        </li>
    )
};

export const ChannelUser = ({ item, selectedChannel, handleSelect }) => {
    return (
        <li className="nav-item w-100">
            <div role="group" className="d-flex dropdown btn-group">
                <button
                    type="button"
                    className={`w-100 rounded-0 text-start text truncate btn ${selectedChannel === item.id ? 'btn-secondary' : ''}`}
                    onClick={() => handleSelect(item.id)}
                >
                    <span className="me-1">#</span>
                    {item.name}
                </button>
                <button type="button" id="react-aria4841991603-:r0:" aria-expanded="false"
                    className={`flex-grow-0 dropdown-toggle dropdown-toggle-split btn ${selectedChannel === item.id ? 'btn-secondary' : ''}`}>
                    <span className="visually-hidden">Управление каналом</span>
                </button>
            </div>
        </li>
    )
};
