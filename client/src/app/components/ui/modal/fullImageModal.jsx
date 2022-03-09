import React from "react"
import { Modal } from "react-bootstrap"

const FullImageModal = () => {
    return (
        <Modal>
            <Modal.Header closeButton />

            <Modal.Body>Woohoo, e reading this text in a modal!</Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    )
}

export default FullImageModal
