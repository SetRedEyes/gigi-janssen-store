import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import GroupList from "../../../components/common/groupList"
import { getCategoriesByCompany } from "../../../store/categories"
import { getCompanies, getCompaniesLoadingStatus } from "../../../store/companies"
import LoadingSpinner from "../../common/loadingSpinner"
import CompanyCard from "../../ui/companyCard"

const CompanyPage = () => {
    const companies = useSelector(getCompanies())
    const companiesLoading = useSelector(getCompaniesLoadingStatus())
    const gigiCats = useSelector(getCategoriesByCompany("gigi"))
    const janssenCats = useSelector(getCategoriesByCompany("janssen"))
    const [selectedCat, setSelectedCat] = useState()
    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
        setSelectedCat(item)
    }

    console.log({ gigiCats })

    return (
        <Container fluid>
            <Row>
                <Col md={3} className="mt-1">
                    <h1 className="text-center">GIGI</h1>
                    <GroupList
                        selectedItem={selectedCat}
                        items={{ ...gigiCats }}
                        onItemSelect={handleCategorySelect}
                    />
                </Col>

                <Col xl={6}>
                    <Row className="mt-3 justify-content-between">
                        {!companiesLoading ? (
                            companies.map((c) => (
                                <CompanyCard
                                    key={c._id}
                                    name={c.name}
                                    photo={c.photo}
                                    companyId={c._id}
                                />
                            ))
                        ) : (
                            <LoadingSpinner />
                        )}
                    </Row>
                </Col>

                <Col md={3} className="mt-1">
                    <h1 className="text-center">Janssen</h1>
                    <GroupList
                        items={{ ...janssenCats }}
                        onItemSelect={handleCategorySelect}
                        selectedItem={selectedCat}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyPage
