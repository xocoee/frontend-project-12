import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import {
  Modal, FormGroup, FormControl, FormLabel, Button, Form,
} from 'react-bootstrap';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import { addChannels, fetchChannels } from '../../store/channelsSlice.js';
import { getAuthConfig } from '../../utils/storageUtils.js';

const ChannelsSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .min(3, 'min')
    .max(20, 'max')
  // .notOneOf(channels, text('duplicate')),
});

const ChannelModal = ({ closeHandler }) => {
  // const { t } = useTranslation();
  const refContainer = useRef('');
  // const { setActualChannel } = fetchChannels;
  const dispatch = useDispatch();

  //const [newChannelName, setNewChannelName] = useState("");

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: ChannelsSchema,
    onSubmit: async (values) => {
      const { name } = values;
      try {
        dispatch(addChannels({ name: name }, getAuthConfig()))
        // dispatch(setActualChannel(data.id))
        closeHandler()
        // toast.success(t('toast.createChannel'));
      } catch (error) {
        // toast.error(t('toast.dataLoadingError'));
      }
    }
  });

  // const handleSubmitChannel = async (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(addChannels({ name: newChannelName }, getAuthConfig()));
  //     setShowModal(false);
  //     setNewChannelName("");
  //   } catch (error) {
  //     console.error(error);

  //   }
  // };

  return (
    <>
      <div className="fade modal-backdrop show"></div>
      <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title h4">Добавить канал</div>
              <button type="button" onClick={closeHandler} aria-label="Close" data-bs-dismiss="modal" className="btn btn-close"></button>
            </div>
            <Modal.Body>
              <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <FormControl
                    className="mb-2"
                    ref={refContainer}
                    id="name"
                    name="name"
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    isInvalid={!!formik.errors.name}
                  />
                  <FormLabel htmlFor="name" className="visually-hidden">nameChannel</FormLabel>
                  <FormControl.Feedback type="invalid">
                    {formik.errors.name}
                  </FormControl.Feedback>
                  <div className="d-flex justify-content-end">
                    <Button variant="secondary" type="button" className="me-2 btn btn-secondary" onClick={closeHandler}>Отменить</Button>
                    <Button variant="primary" type="submit" className="btn btn-primary" onClick={formik.handleSubmit}>Отправить</Button>
                  </div>
                </FormGroup>
              </Form>
            </Modal.Body>
          </div>
        </div>
      </div>
    </>
  );

};

export default ChannelModal;