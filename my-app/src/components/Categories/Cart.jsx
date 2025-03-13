import React, { useState } from 'react';
import { Card } from '@heroui/card';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
export function Cart() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const items = [
        "Iterms",
        "Items "
    ];

    const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
    const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="cart-container">
            <Card className="cart-card">
                <h2>CART</h2>
                <div className="carousel">
                    <button onClick={prevItem}>{'<'}</button>
                    <p>{items[index]}</p>
                    <button onClick={nextItem}>{'>'}</button>
                </div>
                <button onClick={() => navigate('/')}>Back</button>
            </Card>
        </div>
    );
}

export default Cart;