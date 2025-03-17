import { useState } from "react";
import { Button, Input, Form, Alert, Card } from "@heroui/react";
import "./LogIn.css";

export function SignIn({ onLoginSuccess }) {
  const [submitted, setSubmitted] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const validarContrasena = (password) =>
    password.length >= 5 && password.length <= 8;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      validarContrasena(value)
        ? null
        : "La contraseña debe tener al menos 5 y máximo 8 caracteres."
    );
  };

  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(
      validarCorreo(value) ? null : "Por favor, ingresa un correo válido."
    );
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
    <div className="bg-container">
      <Card className="main-card">
        {/* Sección izquierda con imagen y texto */}
        <Card className="left-card">

          
          <p className="app-subtitle">FOOD WASTING SOLUTION</p>
          <img
            src="/mnt/data/Screenshot 2025-03-13 at 9.38.19 AM.png"
            alt="Too Good To Go"
            className="food-image"
          />
        </Card>

        {/* Sección derecha con formulario de Log In */}
        <Card className="right-card">
          <h1 className="title">Log In</h1>
          <Form className="w-full mt-4" onSubmit={onSubmit}>
            <Input
              className="w-full mb-4"
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
              className="w-full mb-4"
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
            <Button className="button-primary w-full mb-4" type="submit">
              Log In
            </Button>
          </Form>
          {showAlert && (
            <Alert
              color="success"
              description="Log in exitoso!"
              onClose={() => setShowAlert(false)}
            />
          )}
        </Card>
      </Card>
    </div>
  );
}

export default SignIn;