// import React from 'react';
// import axios from 'axios';
// // import * as yup from 'yup';
// import { Formik, Form, Field } from 'formik';
// import storage from '../../services/localStorage';

// // const validParam = Yup.object().shape({
// //     name: Yup.string()
// //       .min(3, 'From 3 to 20 characters')
// //       .max(20, 'From 3 to 20 characters')
// //       .required('Required field'),
// //     password: Yup.string()
// //       .min(2, 'Minimum 6 characters')
// //       .required('Required field'),
// //     confirmPassword: Yup.string()
// //       .oneOf([Yup.ref('password'), null], 'Passwords must match')
// //       .required('Required field'),
// //   });

// const Login = () => {
//     const handleLogin = async ({ name, password }) => {
//       try {
//         const { data } = await axios.post('/api/v1/login', {username: name, password});
//         if (data) {
//           storage.setToken(data)
//         }
//       } catch (error) {
//     console.log(error)
//       }
//      }
    
//     return (
//     <div>
//       <h1>Sign up</h1>
//       <Formik
//         initialValues={{ name: '', password: '' }}
//         // validationSchema={validParam}
//         onSubmit={(values, { setSubmitting }) => {
//           handleLogin(values);
//           setSubmitting(false);
//         }}
//       >
//         {({ errors, touched, isValid, dirty }) => (
//           <Form>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <Field
//             name="name"
//             className="form-control"
//           />
//           {errors.name && touched.name ? (
//               <div>{errors.name}</div>
//             ) : null}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <Field
//             name="password"
//             className="form-control"
//           />
//           {errors.password && touched.password ? (
//               <div>{errors.password}</div>
//             ) : null}
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <Field
//             name="confirmPassword"
//             type="password"
//             className="form-control"
//           />
//           {errors.confirmPassword && touched.confirmPassword ? (
//                <div>{errors.confirmPassword}</div>
//             ) : null}
//         </div>
//         <button 
//         type="submit" 
//         disabled={!isValid || !dirty}
//         >Submit</button>
//       </Form>
//         )}
//       </Formik>
//     </div>
//     );
//   };

//   export default Login;


// return (
//     <>
//     {chats ? (
//     <div className="container h-100 my-4 overflow-hidden rounded shadow" bis_skin_checked="1">
//       <div className="row h-100 bg-white flex-md-row" bis_skin_checked="1">
//         <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex" bis_skin_checked="1">
//           <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4" bis_skin_checked="1">
//             <b>Каналы</b>
//             <button type="button" className="p-0 text-primary btn btn-group-vertical">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
//                 <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
//                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
//                 </svg>
//                 <span className="visually-hidden">+</span>
//                 </button>
//                 </div>
//                 <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
//                   <li className="nav-item w-100">
//                     <button type="button" className="w-100 rounded-0 text-start btn">
//                       <span className="me-1">#</span>
//                       general
//                       </button>
//                   </li>
//                   <li className="nav-item w-100">
//                     <button type="button" className="w-100 rounded-0 text-start btn">
//                       <span className="me-1">#</span>
//                       random
//                       </button>
//                   </li>
//                 </ul>
//               </div>
//             <div className="col p-0 h-100" bis_skin_checked="1">
//               <div className="d-flex flex-column h-100" bis_skin_checked="1">
//                 <div className="bg-light mb-4 p-3 shadow-sm small" bis_skin_checked="1">
//                   <p className="m-0">
//                     <b># undefined</b>
//                   </p>
//                   <span class="text-muted">0 сообщений</span>
//                 </div>
//                 <div id="messages-box" className="chat-messages overflow-auto px-5 " bis_skin_checked="1"></div>
//                   <div className="mt-auto px-5 py-3" bis_skin_checked="1">
//                     <form novalidate="" className="py-1 border rounded-2">
//                       <div className="input-group has-validation" bis_skin_checked="1">
//                         <input name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2 form-control" value=""></input>
//                           <button type="submit" disabled="" className="btn btn-group-vertical">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
//                               <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
//                               </svg>
//                               <span className="visually-hidden">Отправить</span>
//                           </button>
//                         </div>
//                         </form>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         ): (
//                           <div>Loading...</div> // або будь-який інший відповідний вміст під час завантаження
//                         )}
//     </>
//   )