import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../bll/Store';
import { addUser } from '../../../bll/Reducer';
import { UserAdressType } from '../../../api/Api';

export const AddUserForm = React.memo(() => {
  const dispatch = useDispatch();
  const countUsers = useSelector<AppStateType, number>(
    state => state.app.countUsers
  );

  const formik = useFormik({
    initialValues: {
      id: 66,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      adress: {
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
      },
      description: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.firstName) {
        errors.firstName = 'Required';
      }
      if (!values.lastName) {
        errors.lastName = 'Required';
      }
      if (!values.phone) {
        errors.phone = 'Required';
      }
      return errors;
    },
    onSubmit: values => {
      formik.resetForm();
      dispatch(addUser(values, countUsers));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Id</Form.Label>
          <Form.Control
            name='id'
            placeholder='Enter id'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          <Form.Text className='text-muted'></Form.Text>

          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='firstName'
            placeholder='Enter first name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <Form.Text className='text-muted'>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div style={{ color: 'red' }}> {formik.errors.firstName} </div>
            ) : null}
          </Form.Text>

          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='lastName'
            placeholder='Enter last name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <Form.Text className='text-muted'>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{ color: 'red' }}> {formik.errors.lastName} </div>
            ) : null}
          </Form.Text>

          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            placeholder='Enter email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Form.Text className='text-muted'>
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}> {formik.errors.email} </div>
            ) : null}
          </Form.Text>

          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            placeholder='Enter phone'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Form.Text className='text-muted'>
            {formik.touched.phone && formik.errors.phone ? (
              <div style={{ color: 'red' }}> {formik.errors.phone} </div>
            ) : null}
          </Form.Text>

          {/* <Form.Label>Adress</Form.Label>
                    <Form.Control name="adress" placeholder="Enter adress" onBlur={formik.handleBlur} onChange={formik.handleChange}
                        value={formik.values.adress} /> */}

          <Form.Label>Description</Form.Label>
          <Form.Control
            name='description'
            placeholder='Enter description'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Group>
        <Button type='submit'>ADD</Button>
      </Form>
    </div>
  );
});

//types
type FormikErrorType = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  adress?: UserAdressType;
  description?: string;
};
