import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../components/ui/loginForm"
import RegisterForm from "../components/ui/registerForm"

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(type === "register" ? type : "login")

    const toggleFormType = () => {
        setFormType((prevState) => (prevState === "register" ? "login" : "register"))
    }

    return (
        <Container className="mt-5 login-layout">
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Регистрация</h3>
                            <RegisterForm />
                            <p>
                                Уже есть аккант?{" "}
                                <a role="button" onClick={toggleFormType}>
                                    {" "}
                                    <span className="link-title">Войти</span>
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Войти</h3>

                            <LoginForm />
                            <p>
                                Еще нет аккаунта?{" "}
                                <a role="button" onClick={toggleFormType}>
                                    <span className="link-title">
                                        Зарегистрироваться
                                    </span>
                                </a>
                            </p>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Login
