import React,{useState,useEffect} from 'react'
import './style.css';
import { Formik } from 'formik';
import { Form,Button,Spinner } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {businessTypeList} from '../../Redux/Actions/Auth';

const Register = () => {
    const [is_loader, setLoaderStatus] = useState(false);
    const dispatch     = useDispatch();
    useEffect(() => {
        dispatch(businessTypeList());
    },[]);
                                  //params are - Reducer Name,stateName 
    const businessList = useSelector(state => state.businessList.businessListing)
   
   
    const setLoaderTrue = ()=>{
        setLoaderStatus(true);
    }
    return (
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Please enter email';
            } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Please enter password';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setLoaderStatus(true);
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setLoaderStatus(false);
            }, 400);
        }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <div className="form-parent "> 
           <div className="form-div p-4 px-5 shadow bg-grey">
                    <div className="form-text">
                        <h3>Register</h3>
                        <p>Welcome! Please register your account.</p>
                    </div>
                    <Form className="main-form" onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group controlId="formBasicEmail" className="form-group-class w-100">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                            <p className="text-danger">{errors.email && touched.email && errors.email}</p>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword"  className="form-group-class w-100">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                            <p className="text-danger">{errors.password && touched.password && errors.password}</p>
                        </Form.Group>

                        <Form.Group controlId="formBasicMobileNumber"  className="form-group-class w-100">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number" name="mobile_number" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mobile_number}/>
                            <p className="text-danger">{errors.mobile_number && touched.mobile_number && errors.mobile_number}</p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1" className="form-group-class w-100">
                        <Form.Label>Choose Business Type</Form.Label>
                        <Form.Control as="select">
                        {businessList.map((list) => (
                           <option key={list.slug}>{list.name}</option> 
                        ))}
                                   
                        </Form.Control>
                        </Form.Group>


                        
                        
                        <Form.Group controlId="formBasicCheckbox"  className="form-group-class">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                             {is_loader ?  <Spinner animation="grow" size="sm" className="px-2"/> : "Submit"}
                        </Button>
                     </Form>
                </div>
            </div>
            )}
         </Formik>
      );
    
}

export default Register
