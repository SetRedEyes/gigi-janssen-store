import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router"
import { Button } from "react-bootstrap"

const BackHistoryButton = ({ margin }) => {
    const history = useHistory()

    return (
        <Button className={`action-btn ${margin}`} onClick={() => history.goBack()}>
            <i className="bi bi-caret-left"></i>
            Назад
        </Button>
    )
}

BackHistoryButton.propTypes = {
    margin: PropTypes.string
}

export default BackHistoryButton
