import React from "react"
import { Form } from "react-bootstrap"

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-end align-items-center  me-5">
      <Form.Floating className="" style={{ width: "30rem" }}>
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Поиск</label>
      </Form.Floating>
    </div>
  )
}

export default SearchBar
