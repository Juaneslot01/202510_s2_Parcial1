import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



function Home(){

    return(

        <div backgroundImage="https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg">
            <Col>
                <Card>
                    <Link to={'/Detail'}>
                        <img src="https://images-platform.99static.com//aufFOWBrXYOOZAzgQhR-buEv0KQ=/236x63:895x722/fit-in/590x590/99designs-contests-attachments/53/53255/attachment_53255918" alt="logo" />
                    </Link>
                    <Card.Title>MENU</Card.Title>
                </Card>
                <Card>
                    <Link to={'/Detail'}>
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Store-shop-logo-by-DEEMKA-STUDIO.jpg" alt="logo" />
                    </Link>
                    <Card.Title>STORES</Card.Title>
                </Card>
                <Card>
                    <Link to={'/Detail'}>
                        <img src="https://i.pinimg.com/736x/7f/24/92/7f249252404646c08d90976505cb6937.jpg" alt="logo" />
                    </Link>
                    <Card.Title>CART</Card.Title>
                </Card>
            
            </Col>  
        </div>
    );

}


export default Home;