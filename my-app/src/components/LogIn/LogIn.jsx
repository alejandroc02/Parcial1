import { useState } from 'react';
import { Button, Input, Form, Alert, Card} from '@heroui/react';
import './LogIn.css';

export function SignIn({ onLoginSuccess }) {
    const [submitted, setSubmitted] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const validarContrasena = (password) => password.length <= 8 && password.length >= 5;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validarContrasena(value) ? null : "La contraseña debe tener al menos 8 y minimo 5 caracteres.");
    };

    const validarCorreo = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validarCorreo(value) ? null : "Por favor, ingresa un correo válido.");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || emailError || !password || passwordError) {
            alert("Corrige los errores antes de enviar el formulario.");
            return;
        }
        setSubmitted({ email, password });
        setShowAlert(true);

        setTimeout(() => {
            onLoginSuccess(); // Cambia la vista en App.js
        }, 1500);
    };

    return (
        <div className='bg-container'>
            <Card className="card2">
                <h1 className='title'> Log In </h1>
                <div className="flex flex-col justify-center items-center">
                    <Form className="w-full mt-4" onSubmit={onSubmit}>
                        <Input
                            className="w-full mb-7"
                            isRequired
                            isInvalid={!!emailError}
                            errorMessage={emailError}
                            label="Correo"
                            labelPlacement="outside"
                            name="correo"
                            placeholder="Ingresa tu correo"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <Input
                            className="w-full mb-7"
                            isRequired
                            isInvalid={!!passwordError}
                            errorMessage={passwordError}
                            label="Contraseña"
                            labelPlacement="outside"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button className="button-primary w-full mb-7" type="submit">
                            Log In
                        </Button>
                    </Form>
                    {showAlert && (
                        <Alert color="success" description="Log in exitoso!" onClose={() => setShowAlert(false)} />
                    )}
                </div>
            </Card>
        </div>
    );
}

export default SignIn;
