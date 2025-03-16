import {Row,Col, Form, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login(){
    const { t } = useTranslation();

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
        <Container fluid className='vh-100'>
            <Row className='h-100'>
                <Col md={6} className='d-flex flex-column align-items-center justify-content-center bg-light p-4'>
                    <h1 className='text-dark'>{t("login.title")}</h1>
                    <p className='text-muted'>{t("login.subtitle")}</p>
                </Col>

                <Col md={6} className='d-flex flex-column align-items-center justify-content-center bg-dark text-white p-4'>
                    <Form className='w-75'>
                        <Form.Group controlId='formUsername' className='mb-3'>
                            <Form.Control type='text' placeholder={t("login.username")} className='bg-transparent text-white border-white' style={{color:"white"}} onChange={handleEmailChange}/>
                        </Form.Group>
                        <Form.Group controlId='formPassword' className='mb-3'>
                            <Form.Control type='password' placeholder={t("login.password")} className='bg-transparent text-white border-white' style={{color:"white"}} onChange={handlePasswordChange}/>
                        </Form.Group>
                        <p className='text-center text-white-50 cursor-pointer'>{t("login.forgotPassword")}</p>
                        <Button variant='light' className='w-100 text-dark fw-bold mt-3' onClick={clickSubmit}>
                            <Link to='/Home'>{t("login.button")}</Link>
                        </Button>
                    </Form>
                </Col>
            </Row>
        
        </Container>
        
        
    );
    

}

export default Login;