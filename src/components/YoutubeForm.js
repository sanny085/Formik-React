import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';

import TextError from './TextError';

const initialValues = {
    //Form State
    //Property must match of name feilds (name="email,name,channel")
    name : "",
    email : "",
    channel : "",
    comments : "",
    address : "",
    social : {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],

    phNumbers: ['']
};
const onSubmit = values => {
    console.log("Final Value",values)
};
const validationSchema = yup.object({
    name: yup.string().required("Required Name"), 
    email: yup.string().email("Envalid Email Format").required("Required"),
    channel: yup.string().required("Required Channel Name"),
    comments : yup.string().min(2, 'Too Short!').max(300, 'Too Long!').required("Required Channel Name"),
     
});

const YoutubeForm = () => { 
     //console.log("InitialValues", formik.errors);
     //console.log("Visited fields", formik.touched);
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" placeholder="Enter Your Name"/>
                    <ErrorMessage name="name" component={TextError}/>
                </div>
                
                <div className="form-control">
                    <label htmlFor="email">Email-ID</label>
                    <Field type="email" name="email" id="email" placeholder="Email"/>
                     <ErrorMessage name="email"/>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" name="channel" id="channel" placeholder="Enter Your Channel Name"/> 
                    <ErrorMessage name="channel"/>
                </div>  

                <div className="form-control">
                    <label htmlFor="facebook">Facebook</label>
                    <Field type="text" name="social.facebook" id="social.facebook" placeholder="Facebook User Name"/> 
                </div> 
                <div className="form-control">
                    <label htmlFor="twitter">Twitter</label>
                    <Field type="text" name="social.twitter" id="social.twitter" placeholder="Twitter User Name"/>
                </div> 

                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" name="comments" id="comments" placeholder="Comments..."/>
                    <ErrorMessage name="comments"/>
                </div> 

                <div className="form-control">
                   <label htmlFor="address">Address</label>
                   <Field name="address">
                    {
                      (props) => {
                          const {field, form, meta} = props
                         console.log('Render Props', props);
                         return (
                             <div>
                                 <input type="text" id='address' {...field}/>
                                 {meta.touched && meta.error ? <div>{meta.error}</div> : null }
                             </div>    
                         )
                      }
                    }
                   </Field>
                </div>
                
                <div className="form-control">
                    <label htmlFor="phoneNumber[0]">Primary Phone Number</label>
                    <Field type="text" name="phoneNumber[0]"  placeholder="Primary Phone"/>
                </div>
                <div className="form-control">
                    <label htmlFor="phoneNumber[1]">Secondary Phone Number</label>
                    <Field type="text" name="phoneNumber[1]"  placeholder="Secondary Phone"/>
                </div>

                 
                  <div className="form-control">
                    <label htmlFor="phNumbers">List of Phone Number</label>
                     <FieldArray type="text" name="phNumbers">
                        {
                            (props) => {
                                console.log('FieldArray Number',props)
                                return(
                                    <div>Field Array</div>
                                )
                            }
                        }
                     </FieldArray>
                  </div> 
              

                <br/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;
