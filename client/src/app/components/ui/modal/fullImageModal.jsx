import React from "react"
import PropTypes from "prop-types"

import { Image, Modal } from "react-bootstrap"

const FullImageModal = ({ fullImgModal, onClose, photo }) => {
    return (
        <Modal show={fullImgModal} onHide={onClose} className="product-modal">
            <Modal.Header closeButton />
            <Modal.Body>
                <Image src={photo} className="product-modal__img" />
            </Modal.Body>
        </Modal>
    )
}

FullImageModal.propTypes = {
    fullImgModal: PropTypes.bool,
    onClose: PropTypes.func,
    photo: PropTypes.string
}

export default FullImageModal
