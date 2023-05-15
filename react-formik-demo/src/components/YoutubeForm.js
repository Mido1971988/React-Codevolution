import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: 'Vishwas',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(values)
}

const validate = values => {
    let errors = {}

    if(!values.name) errors.name = "Required"
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email format'
    if(!values.email) errors.email = "Required"
    if(!values.channel) errors.channel = "Required"

    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required')
})

console.log(Yup)

function YoutubeForm() {
    const formik = useFormik({
        initialValues ,
        onSubmit ,
        // validate,
        validationSchema
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>  
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.errors.name && formik.touched.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                </div>

                <div className='form-control'> 
                    <label htmlFor='name'>Email</label>
                    <input type='email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email? (<div className='error'>{formik.errors.email}</div>) : null}
                </div>

                <div className='form-control'> 
                    <label htmlFor='name'>channel</label>
                    <input type='text' name='channel' id='channel' value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.errors.channel && formik.touched.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm