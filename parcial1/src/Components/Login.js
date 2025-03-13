import {Row,Col,Card, Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import { Link } from 'react-router-dom';


function Login(){

    const [formValues, setFormValues] =useState({email:"", password:"",favClass:"1"});
    const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

 
    const handleEmailChange = ((e) => {

        setFormValues({...formValues, email: e.target.value})
    });

    const handlePasswordChange = ((e) =>{
        const password = e.target.value;
        setFormValues((prevState) => ({...prevState, password}));

        const isValidPassword = password.length >= 9 && /\d/.test(password) && /[a-zA-Z]/.test(password); 
        setValidationStates((prev) => ({ ...prev, passwordState: isValidPassword })); 
    });

    const clickSubmit = (() =>{
    
        if(!validationStates.passwordState){
          alert("Por favor, corrige los errores del formulario.");
          return;
        }
    });
    
    return(
        <div>
            <Row style={{alignContent:'left'}}>
                <Card className='text-center' >
                    <h2>TOO GOOD TO GO</h2>
                    <h4>FOOD WASTING SOLUTION</h4>
                </Card>
            </Row>
        
            
            <Row style={{alignContent:'right'}}>
                <Form>
                    <Form.Group className='mb-6' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="Email"
                                placeholder='Email' 
                                onChange={handleEmailChange} 
                                value={formValues.email}
                            />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Password' 
                            onChange={handlePasswordChange} 
                            value={formValues.password}
                            isInvalid={!validationStates.passwordState}
                        />
                        <Form.Text className='text-mutd'>Forgot password?</Form.Text>
                        <Form.Control.Feedback type='invalid'>
                            Your password should have numbers and letters and should be at least 9 characters long
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant='primary' onClick={clickSubmit}>
                        <Link to={'/Home'+ formValues.email} state={{email: formValues.email}}>
                            Login
                        </Link>
                    </Button>

                </Form>
                

            </Row>
        
        </div>
        
        
    );
    

}

export default Login;