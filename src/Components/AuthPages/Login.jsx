import React,{useState} from 'react'
import './style.css';
import { Formik } from 'formik';
import { Form,Button,Spinner, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [is_loader, setLoaderStatus] = useState(false);

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
                        <h3>Login</h3>
                        <p>Welcome Back! Please login to your account.</p>
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
                        
                        <Form.Group controlId="formBasicCheckbox"  className="form-group-class">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                             {is_loader ?  <Spinner animation="grow" size="sm" className="px-2"/> : "Submit"}
                        </Button>
                        <div  className="form-text">
                          Don't have account ?<Link to="/register" className="link-class"><strong> Register </strong></Link>
                        </div>
                         
                     </Form>
                </div>
            </div>
            )}
         </Formik>
      );
    
}

export default Login
