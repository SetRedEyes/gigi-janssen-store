import React, { useState } from "react"
import PropTypes from "prop-types"

import { Image } from "react-bootstrap"
import FullImageModal from "../modal/fullImageModal"

const ProductPageImage = ({ photo }) => {
    const [fullImgModal, setFullImgModal] = useState(false)

    const handleClose = () => setFullImgModal(false)

    const handleShow = () => setFullImgModal(true)

    return (
        <>
            <div className="product-page__img-container">
                <Image
                    className="m-4 product-page__img"
                    src={photo}
                    fluid
                    onClick={handleShow}
                    role="button"
                />
            </div>

            <FullImageModal
                fullImgModal={fullImgModal}
                handleClose={handleClose}
                onClose={handleClose}
                photo={photo}
            />
        </>
    )
}

ProductPageImage.propTypes = {
    photo: PropTypes.string
}

export default ProductPageImage
