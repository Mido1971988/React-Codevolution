import React from 'react'
// import { useFormik } from 'formik'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: 'Vishwas',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    }
}

const onSubmit = values => {
    console.log(values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    address : Yup.string().required('Required')
})

function YoutubeForm() {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'> 
                    <label htmlFor='name'>channel</label>
                    <Field type='text' name='channel' id='channel'/>
                    <ErrorMessage name='channel'/>
                </div>

                <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field
                    as='textarea'
                    id='comments'
                    name='comments'
                />
                <ErrorMessage name='comments' />
                </div>

                <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <Field name='address'>
                    {(props) => {
                        const { field, form, meta } = props
                    return (
                        <div>
                        <input type='text' {...field} />
                        {meta.touched && meta.error ? (
                            <div>{meta.error}</div>
                        ) : null}
                        </div>
                    )
                    }}
                </Field>
            </div>
            
            <div className='form-control'>
                <label htmlFor='facebook'>Facebook profile</label>
                <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
                <label htmlFor='twitter'>Twitter profile</label>
                <Field type='text' id='twitter' name='social.twitter' />
            </div>

            <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm