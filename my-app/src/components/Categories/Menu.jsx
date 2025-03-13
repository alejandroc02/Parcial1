import React, { useState } from 'react';
import { Card } from '@heroui/card';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

export function Menu() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const items = [
        { src: "", name: "CHEESE" },
        { src: "", name: "BREAD" },
        { src: "", name: "HAM" },
        { src: "", name: "LETTUCE" }
    ];

    const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
    const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="menu-container">
            <Card className="menu-card">
                <h2>MENU</h2>
                <div className="carousel">
                    <button onClick={prevItem}>{'<'}</button>
                    <div className="carousel-item">
                        <img src={items[index].src} alt={items[index].name} />
                        <p>{items[index].name}</p>
                    </div>
                    <button onClick={nextItem}>{'>'}</button>
                </div>
                <button onClick={() => navigate('/')}>Back</button>
            </Card>
        </div>
    );
}

export default Menu;