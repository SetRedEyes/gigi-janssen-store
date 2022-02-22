import React from "react"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import PropTypes from "prop-types"

const BackHistoryButton = ({ mb }) => {
    const history = useHistory()

    return (
        <Button
            className={`action-btn btn btn-primary ${mb}`}
            onClick={() => history.goBack()}
        >
            <i className="bi bi-caret-left"></i>
            Назад
        </Button>
    )
}

BackHistoryButton.propTypes = {
    mb: PropTypes.string
}

export default BackHistoryButton
