import React from "react"
import PropTypes from "prop-types"

import { Button, Modal } from "react-bootstrap"

const ConfirmedOrderModal = ({ isConfirmed, onConfirm }) => {
    return (
        <Modal show={isConfirmed} onHide={onConfirm} className="mt-5">
            <Modal.Header closeButton>
                <Modal.Title>Спасибо за покупку!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Номер вашего заказа: {new Date().getTime()}
                <br /> В ближайшее время с вами свяжется наш менеджер.
            </Modal.Body>
            <Modal.Footer>
                <Button className="w-100 submit-btn" onClick={onConfirm}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConfirmedOrderModal.propTypes = {
    isConfirmed: PropTypes.bool,
    onConfirm: PropTypes.func
}

export default ConfirmedOrderModal
