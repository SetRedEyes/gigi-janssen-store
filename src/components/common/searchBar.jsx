import React, { useState } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const SearchBar = () => {
  const history = useHistory()
  const [search, setSearch] = useState()

  const handleSearch = ({ target }) => {
    setSearch(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?search=${search}`)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          placeholder="Поиск"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
        <Button
          variant="outline-light"
          id="button-addon2"
          onClick={handleSubmit}
          className="searchBtn"
        >
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
