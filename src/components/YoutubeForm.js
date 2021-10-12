import React from 'react'
import { useFormik } from 'formik';


const initialValues = {
    //Property must match of name feilds (name="email,name,channel")
    name : "",
    email : "",
    channel : "",
};
const onSubmit = values => {
    console.log("Final Value",values)
};
const validate = values => {
     let errors = {}
    
     if(!values.name){
        errors.name = "Required"
     }

     if(!values.email){
        errors.email = "Required"
     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
     

     if(!values.channel){
        errors.channel = "Required"
     }


     return errors; 
}

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate, 
    });
     //console.log("InitialValues", formik.errors);
     console.log("Visited fields", formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" 
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     onBlur={formik.handleBlur}
                     id="name" placeholder="Enter Your Name"/>
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
                </div>
                
                <div className="form-control">
                    <label htmlFor="email">Email-ID</label>
                    <input type="email" name="email" 
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     onBlur={formik.handleBlur} 
                     id="email" placeholder="Email"/>
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" name="channel" 
                    onChange={formik.handleChange} 
                    value={formik.values.channel} 
                    onBlur={formik.handleBlur}
                    id="channel" placeholder="Channel"/>
                    <span>{formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}</span>
                </div>  

                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
