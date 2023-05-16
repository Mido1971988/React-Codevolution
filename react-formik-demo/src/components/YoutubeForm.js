import React from 'react'
// import { useFormik } from 'formik'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: 'Vishwas',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required')
})

function YoutubeForm() {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>  
                    <label htmlFor='name'>Name</label>
                    <Field type='text' name='name' id='name'/>
                    <ErrorMessage name='name'/>
                </div>

                <div className='form-control'> 
                    <label htmlFor='name'>Email</label>
                    <Field type='email' name='email' id='email' />
                    <ErrorMessage  name='email'/>
                </div>

                <div className='form-control'> 
                    <label htmlFor='name'>channel</label>
                    <Field type='text' name='channel' id='channel'/>
                    <ErrorMessage name='channel'/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm