import React from 'react';

const ChannelModal = ({ showModal, setShowModal, handleSubmitChanel, handleChange,  newChannelName }) => {

  return (
    showModal && (
      <div>
        <div className="fade modal-backdrop show"></div>
        <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title h4">Добавить канал</div>
                <button type="button" onClick={() => setShowModal(false)} aria-label="Close" data-bs-dismiss="modal" className="btn btn-close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitChanel}>
                  <div>
                    <input 
                    name="name" 
                    id="name" 
                    className="mb-2 form-control"
                    value={newChannelName}
                    onChange={handleChange}
                    />
                    <label className="visually-hidden" htmlFor="name">Имя канала</label>
                    <div className="invalid-feedback"></div>
                    <div className="d-flex justify-content-end">
                      <button type="button" onClick={() => setShowModal(false)} className="me-2 btn btn-secondary">Отменить</button>
                      <button type="submit" className="btn btn-primary">Отправить</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChannelModal;


// import React from 'react';

// const ChannelModal = ({ showModal, setShowModal, handleSubmitChanel, handleChange,  newChannelName }) => {

//   return (
//     showModal && (
//       <div>
//         <div className="fade modal-backdrop show"></div>
//         <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1" style={{ display: 'block' }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <div className="modal-title h4">Добавить канал</div>
//                 <button type="button" onClick={() => setShowModal(false)} aria-label="Close" data-bs-dismiss="modal" className="btn btn-close"></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSubmitChanel}>
//                   <div>
//                     <input 
//                     name="name" 
//                     id="name" 
//                     className="mb-2 form-control"
//                     value={newChannelName}
//                     onChange={handleChange}
//                     />
//                     <label className="visually-hidden" htmlFor="name">Имя канала</label>
//                     <div className="invalid-feedback"></div>
//                     <div className="d-flex justify-content-end">
//                       <button type="button" onClick={() => setShowModal(false)} className="me-2 btn btn-secondary">Отменить</button>
//                       <button type="submit" className="btn btn-primary">Отправить</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default ChannelModal;
