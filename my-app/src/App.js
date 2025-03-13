import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Categories/Menu';
import Stores from './components/Categories/Stores';
import Cart from './components/Categories/Cart';
import LogIn from './components/LogIn/LogIn';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={isAuthenticated ? <Home /> : <LogIn onLoginSuccess={() => setIsAuthenticated(true)} />} 
                />
                <Route path="/menu" element={<Menu />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LogIn onLoginSuccess={() => setIsAuthenticated(true)} />} />
            </Routes>
        </Router>
    );
}

export default App;