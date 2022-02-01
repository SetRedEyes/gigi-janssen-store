import React from "react"
import { Form } from "react-bootstrap"
import PropTypes from "prop-types"

const SortSelect = ({ onSort }) => {
    const handleChange = ({ target }) => {
        onSort({
            name: target.name,
            value: target.value
        })
    }

    return (
        <div className="d-flex justify-content-end align-items-center">
            <span className="me-3">Сортировать по:</span>
            <Form.Select
                aria-label="Default select example"
                style={{ width: "15rem" }}
                onChange={handleChange}
                name="price[0]"
                className="sortSelect"
            >
                <option value="">алфафиту</option>
                <option value="asc">возрастанию цены</option>
                <option value="desc">убыванию цены</option>
            </Form.Select>
        </div>
    )
}
SortSelect.propTypes = {
    onSort: PropTypes.func
}
export default SortSelect
