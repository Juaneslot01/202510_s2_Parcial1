import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Home(){
    const { t } = useTranslation();

    return(

        <div 
            className="position-relative d-flex align-items-center justify-content-center vh-100"
            style={{
                backgroundImage: "url(https://static.vecteezy.com/system/resources/thumbnails/043/533/863/small_2x/assorted-fast-food-feast-on-wooden-background-photo.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="p-5 rounded shadow-lg text-center text-white"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "20px",
                }}
            >
                <Container className="d-flex justify-content-around">
                    <div className="text-center">
                        <Link to="/Detail">
                            <img 
                                src="https://images-platform.99static.com//aufFOWBrXYOOZAzgQhR-buEv0KQ=/236x63:895x722/fit-in/590x590/99designs-contests-attachments/53/53255/attachment_53255918" 
                                alt="menu-logo"
                                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                            />
                        </Link>
                        <p className="mt-2">{t("home.menu")}</p>
                    </div>
                    <div className="text-center">
                        <Link to="/Detail">
                            <img 
                                src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Store-shop-logo-by-DEEMKA-STUDIO.jpg" 
                                alt="logo" 
                                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                            />
                        </Link>
                        <p className="mt-2">{t("home.stores")}</p>
                    </div>
                    <div className="text-center">
                        <Link to="/Detail">
                            <img 
                                src="https://i.pinimg.com/736x/7f/24/92/7f249252404646c08d90976505cb6937.jpg" 
                                alt="logo" 
                                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                            />
                        </Link>
                        <p className="mt-2">{t("home.cart")}</p>
                    </div>
                </Container>
            </div> 
        </div>
    );

}


export default Home;