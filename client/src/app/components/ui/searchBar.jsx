import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"
import { SEARCH_ROUTE, SHOP_ROUTE } from "../../consts"

const SearchBar = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")

    const searchRef = useRef()

    const handleSearch = ({ target }) => {
        setSearch(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(SHOP_ROUTE + SEARCH_ROUTE + `?search=${search}`)
        searchRef.current.reset()
    }

    return (
        <Form onSubmit={handleSubmit} ref={searchRef} className="ms-5">
            <InputGroup>
                <FormControl
                    placeholder="Поиск"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                    required
                />
                <Button
                    variant="outline-light"
                    id="button-addon2"
                    onClick={handleSubmit}
                    className="search-btn"
                >
                    <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar
