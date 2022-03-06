import React, { useState } from "react"
import { useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getCompanies, getCompaniesLoadingStatus } from "../../../store/companies"

import { Col, Container, Row } from "react-bootstrap"
import CompanyCard from "../../ui/companyCard"
import GroupList from "../../../components/common/groupList"
import LoadingSpinner from "../../common/loadingSpinner"
import CompaniesDescription from "../../ui/companiesDescription"

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
                    <Row className="mt-3 flex-between">
                        {!companiesLoading ? (
                            companies.map((c) => (
                                <CompanyCard
                                    key={c._id}
                                    fullName={c.fullName}
                                    photo={c.photo}
                                    companyName={c.name}
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
            <Row className="mt-5 justify-content-md-center">
                <div className="text-center mb-4">
                    В нашем интернет-магазине косметики Вы можете купить
                    профессиональную косметику Gigi (ДжиДжи, Гиги), Janssen Cosmetics
                    (Янссен) в том числе кремы для лица, сыворотки, маски, пилинги,
                    тоники, молочко для умывания, линия для тела, линия химических
                    пилингов, линия для макияжа, альгинатные маски, обертывания для
                    тела, коллагеновые листы и многое другое
                </div>
                <Col md={6}>
                    <CompaniesDescription />
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyPage
