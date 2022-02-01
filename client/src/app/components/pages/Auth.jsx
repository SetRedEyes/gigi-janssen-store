import React from "react"
import { Button, Card, Container, Form, NavLink, Row } from "react-bootstrap"

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeHolder="Введите ваш e-mail..."
                        className="mt-3"
                    />

                    <Form.Control
                        placeHolder="Введите ваш пароль..."
                        className="mt-3"
                    />
                    <Row style={{ width: "86%" }} className=" flex-nowrap mt-3 ">
                        <div>
                            Нет аккаунта?
                            <NavLink
                                className="d-inline ps-1 "
                                to={"/gigi-janssen-store/registration"}
                            >
                                Зарегистрируйся!
                            </NavLink>
                        </div>
                        <Button style={{ width: 80 }} variant="outline-success">
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
