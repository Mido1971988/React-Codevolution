import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {
    const formik = useFormik({
        initialValues : {
            name: 'Vishwas',
            email: '',
            channel: ''
        },
        onSubmit : values => {
            console.log(values)
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={formik.values.name} onChange={formik.handleChange}/>
                
                <label htmlFor='name'>Email</label>
                <input type='email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange}/>
                
                <label htmlFor='name'>channel</label>
                <input type='text' name='channel' id='channel' value={formik.values.channel} onChange={formik.handleChange}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm