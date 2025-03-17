import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@heroui/card';
import './Home.css';
// import menuIcon from '../assets/Menu.png';
// import cartIcon from '../assets/Cart.png';
// import storesIcon from '../assets/Stores.png';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Imagen de fondo */}
            <div className="background-image"></div>

            {/* Card con opciones */}
            <Card className="home-card">
                <div className="grid-container">
                    <div className="grid-item" onClick={() => navigate('/menu')}>
                        <img src={"../assets/Menu.png"} alt="Menu" />
                        <p>MENU</p>
                    </div>
                    <div className="grid-item" onClick={() => navigate('/stores')}>
                        <img src={"/assets/Cart.png"} alt="Stores" />
                        <p>STORES</p>
                    </div>
                    <div className="grid-item" onClick={() => navigate('/cart')}>
                        <img src="/assets/Stores.png" alt="Cart" />
                        <p>CART</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Home;