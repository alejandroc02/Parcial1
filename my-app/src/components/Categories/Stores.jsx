
import React, { useState } from 'react';
import { Card } from '@heroui/card';
import { useNavigate } from 'react-router-dom';

export function Stores() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const items = [
        "store",
        "Store"
    ];

    const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
    const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="stores-container">
            <Card className="stores-card">
                <h2>STORES</h2>
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

export default Stores;