import React,{useState,useEffect} from 'react'
import './style.css';
import { Formik } from 'formik';
import { Form,Button,Spinner,Col } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {businessTypeList,registerSubmit} from '../../Redux/Actions/Auth';
import {history} from '../../../src/history';

const Register = () => {
    const [is_loader, setLoaderStatus]    = useState(false);
    const [is_page_loader, setPageLoader] = useState(true);
    const  dispatch     = useDispatch();
    useEffect(() => {
        dispatch(businessTypeList()).then(res=>{
            setPageLoader(false);
        });
    },[]);
                                  //params are - Reducer Name,stateName 
    const businessList = useSelector(state => state.businessList.businessListing)
    const setLoaderTrue = ()=>{
        setLoaderStatus(true);
    }
    return (
        
        <Formik
        initialValues={{ email: '', password: '', password_confirmation:'',mobile_number:'',business_type:'',latitude:'34444',longitude:'4qw44q2q4'}}
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
            if (!values.password_confirmation) {
                errors.password_confirmation = 'Please enter confirm password';
            }
            if (!values.business_type) {
                errors.business_type = 'Please select business type';
            }
            if (!values.mobile_number) {
                errors.mobile_number = 'Please enter mobile number';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setLoaderStatus(true);
            setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setLoaderStatus(false);
            }, 400);
            dispatch(registerSubmit(values)).then(res=>{
                history.push('/login');
            });
          
            
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
        {is_page_loader ? <Spinner animation="grow" className="px-2" variant="danger"  /> :
           <div className="form-div p-4 px-5 shadow bg-grey">
                  
                    <div className="form-text">
                        <h3>Register</h3>
                        <p>Welcome! Please register your account.</p>
                    </div>
                    <Form className="main-form" onSubmit={handleSubmit} autoComplete="off">
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" className="form-group-class w-100" as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}/>
                            <p className="text-danger">{errors.name && touched.name && errors.name}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress"  className="form-group-class w-100" as={Col}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" name="address" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}/>
                            <p className="text-danger">{errors.address && touched.address && errors.address}</p>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group controlId="formBasicEmail" className="form-group-class w-100" as={Col}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                            <p className="text-danger">{errors.email && touched.email && errors.email}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicMobileNumber"  className="form-group-class w-100" as={Col}>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number" name="mobile_number" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mobile_number}/>
                            <p className="text-danger">{errors.mobile_number && touched.mobile_number && errors.mobile_number}</p>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                       
                        <Form.Group controlId="formBasicPassword"  className="form-group-class w-100" as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                            <p className="text-danger">{errors.password && touched.password && errors.password}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword"  className="form-group-class w-100" as={Col}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password_confirmation}/>
                            <p className="text-danger">{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</p>
                        </Form.Group>
                           
                        </Form.Row>
                       
                       <Form.Row className="w-100">
                        
                        <Form.Group controlId="exampleForm.ControlSelect1" className="form-group-class w-100" >
                            <Form.Label>Choose Business Type</Form.Label>
                                <Form.Control as="select" name="business_type" onChange={handleChange}
                                    onBlur={handleBlur}
                                    >
                                    <option value="" >Please select business type</option> 
                                    {businessList.map((list) => (
                                    <option key={list.slug} value={list.slug}>{list.name}</option> 
                                    ))}
                                </Form.Control>
                            <p className="text-danger">{errors.business_type && touched.business_type && errors.business_type}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox"  className="form-group-class" as={Col}>
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                             {is_loader ?  <Spinner animation="grow" size="sm" className="px-2"/> : "Submit"}
                        </Button>
                    </Form>
                </div>
              }
            </div>
            )}
            </Formik>
          
        
         
      );
    
}

export default Register
