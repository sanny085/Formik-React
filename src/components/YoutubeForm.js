import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    //Property must match of name feilds (name="email,name,channel")
    name : "",
    email : "",
    channel : "",
};
const onSubmit = values => {
    console.log("Final Value",values)
};
 
const validationSchema = yup.object({
    name: yup.string().required("Required Name"), 
    email: yup.string().email("Envalid Email Format").required("Required"),
    channel: yup.string().required("Required Channel Name")
  });

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });
     //console.log("InitialValues", formik.errors);
     console.log("Visited fields", formik.touched);
    return (
        <div>
          <strong>New YoutubeForm</strong><br/><br/>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" 
                     {...formik.getFieldProps("name")}
                     id="name" placeholder="Enter Your Name"/>
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
                </div>
                
                <div className="form-control">
                    <label htmlFor="email">Email-ID</label>
                    <input type="email" name="email" 
                     {...formik.getFieldProps("email")}
                     id="email" placeholder="Email"/>
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" name="channel" 
                    {...formik.getFieldProps("channel")}
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
