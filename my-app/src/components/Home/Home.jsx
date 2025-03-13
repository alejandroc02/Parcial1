import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@heroui/card';
import './Home.css';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Card className="home-card">
                <div className="grid-container">
                    <div className="grid-item" onClick={() => navigate('/menu')}>
                        <img src="/icons/menu-icon.png" alt="Menu" />
                        <p>MENU</p>
                    </div>
                    <div className="grid-item" onClick={() => navigate('/stores')}>
                        <img src="/icons/stores-icon.png" alt="Stores" />
                        <p>STORES</p>
                    </div>
                    <div className="grid-item" onClick={() => navigate('/cart')}>
                        <img src="/icons/cart-icon.png" alt="Cart" />
                        <p>CART</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Home;
