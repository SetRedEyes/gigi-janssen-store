import React, { useState, useRef } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const SearchBar = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")

    const searchRef = useRef()

    const handleSearch = ({ target }) => {
        setSearch(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/online-store-v2/search?search=${search}`)
        searchRef.current.reset()
    }

    return (
        <div className="me-4">
            <Form onSubmit={handleSubmit} ref={searchRef} className="me-5">
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
        </div>
    )
}

export default SearchBar
