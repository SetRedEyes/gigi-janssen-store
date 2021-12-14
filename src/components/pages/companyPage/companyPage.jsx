import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import GroupList from "../../../components/common/groupList"
import { useCategory } from "../../../hooks/useCategory"
import { useCompany } from "../../../hooks/useCompany"
import CompanyCard from "../../ui/companyCard"

const CompanyPage = () => {
  const { companies } = useCompany()
  const { categories } = useCategory()
  const [selectedCat, setSelectedCat] = useState()

  const handleCategorySelect = (item) => {
    localStorage.setItem("selectedCat", JSON.stringify(item))
    setSelectedCat(item)
  }
  return (
    <Container fluid>
      <Row>
        {categories && (
          <Col md={3} className="mt-1">
            <h1 className="text-center">GIGI</h1>
            <GroupList
              selectedItem={selectedCat}
              items={categories.gigi}
              onItemSelect={handleCategorySelect}
            />
          </Col>
        )}

        <Col md={6}>
          <Row className="mt-3 justify-content-between">
            {companies &&
              companies.map((c) => (
                <CompanyCard
                  key={c._id}
                  name={c.name}
                  photo={c.photo}
                  companyId={c._id}
                />
              ))}
          </Row>
        </Col>

        {categories && (
          <Col md={3} className="mt-1">
            <h1 className="text-center">Janssen</h1>
            <GroupList
              items={categories.janssen}
              onItemSelect={handleCategorySelect}
              selectedItem={selectedCat}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default CompanyPage
