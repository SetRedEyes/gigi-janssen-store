import React, { useState } from "react"
import { useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getCompanies, getCompaniesLoadingStatus } from "../../../store/companies"

import { Accordion, Col, Container, Row } from "react-bootstrap"
import CompanyCard from "../../ui/companyCard"
import GroupList from "../../../components/common/groupList"
import LoadingSpinner from "../../common/loadingSpinner"

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
                                <>
                                    <CompanyCard
                                        key={c._id}
                                        fullName={c.fullName}
                                        photo={c.photo}
                                        companyName={c.name}
                                    />
                                </>
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
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>О GiGi</Accordion.Header>
                            <Accordion.Body>
                                Лаборатории <strong>GIGI</strong> были основаны в
                                1957 году Элиэзером Ландау, которого, к сожалению,
                                сегодня уже нет с нами.
                                <br />
                                <br />
                                Господин Ландау поставил перед собой цель: сделать{" "}
                                <strong>GIGI</strong>&nbsp; ведущей профессиональной
                                косметической компанией Израиля, которая сможет
                                удовлетворить любые запросы своих клиентов в этой
                                сфере. Именно так и родился девиз: &laquo;
                                <strong>GIG</strong>I &ndash; значит, Вы в надежных
                                руках&raquo;. Этим девизом Косметические Лаборатории
                                &nbsp;GIGI руководствуются и поныне. Надежность,
                                профессионализм, новаторство и неизменная верность
                                своим клиентам &ndash; вот составляющие успеха
                                ДжиДжи.&nbsp;
                                <br />
                                <br />
                                Начав свою деятельность с выпуска всего нескольких
                                линий, сегодня GIGI по праву гордится ассортиментом
                                своей продукции. Это свыше 400 высококачественных
                                препаратов, которые подразделяются на две основные
                                категории: препараты для салонов красоты и препараты
                                для индивидуального потребителя. Сегодня
                                Косметические Лаборатории <strong>GIGI</strong>{" "}
                                контролируют свыше 60% профессионального
                                косметического рынка в Израиле и экспортируют свою
                                продукцию по всему миру.&nbsp;
                                <br />
                                <br />
                                Применение активных инновационных ингредиентов стало,
                                бесспорно, визитной карточкой &nbsp;GIGI; тесное
                                сотрудничество ДжиДжи с изготовителями
                                фармацевтической продукции позволило им стать первой
                                компанией, получившей разрешение на применение
                                фармацевтических ингредиентов в косметических
                                препаратах.&nbsp; &nbsp;
                                <br />
                                <br />
                                Косметические Лаборатории <strong>GIGI </strong>
                                выпускают в среднем одну серию ежегодно. &nbsp;
                                <br />
                                При разработке препаратов, GIGI &nbsp;применяет
                                достижения высоких технологий, продвигая идею
                                активной косметологии, основанной на сочетании
                                фармакологических &nbsp;и косметических ингредиентов,
                                что позволяет добиться великолепного и очевидного
                                результата.
                                <br />
                                <br />
                                Все препараты ДжиДжи являются биосовместимыми и
                                проходят клиническое тестирование в ведущих
                                &nbsp;дерматологических клиниках Израиля.&nbsp;&nbsp;
                                <br />
                                <br />
                                Превосходные производственные условия, тщательный
                                контроль качества и проверка эффективности
                                гарантируют получение превосходной продукции.
                                <br />
                                С 1990 года производство и контроль качества
                                продукции компании осуществляются в соответствии со
                                стандартами Евро Союза, США и, конечно, Израиля.
                                Применяется только экологически чистая и пригодная
                                для вторичного использования упаковка. Продукция GIGI
                                не тестируется на животных.
                                <br />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="text-center">
                                о Janssen
                            </Accordion.Header>
                            <Accordion.Body>
                                <strong>JANSSEN Cosmetics</strong> &ndash; признанный
                                лидирующий бренд на рынке профессиональной косметики,
                                отличающийся высокой эффективностью средств, истинно
                                немецким качеством, широчайшим ассортиментом
                                продукции для кожи лица и тела, SPA- и
                                wellness-терапии.
                                <br />
                                <br />
                                История марки <strong>JANSSEN Cosmetics</strong>{" "}
                                начинается в старинном курортном городе Аахен на
                                западе Германии. Именно в этом месте, где
                                пересекаются границы Германии, Бельгии и Голландии и
                                которое еще 2000 лет назад полюбили римляне за тепло
                                термальных источников, Вальтер Янссен совместно с
                                известным биохимиком-фармацевтом, доктором Роландом
                                Захером заложили основы концепции JANSSEN Cosmetics.
                                В 1997 году, объединив ряд своих наиболее удачных
                                разработок, компания выпустила первую линию `Секреты
                                красоты`, которая с ошеломляющим успехом ворвалась на
                                рынок профессиональной и помогла марке за короткий
                                период получить известность в США, Канаде, Японии,
                                Китае, Австралии, Новой Зеландии, Арабских Эмиратах.
                                Сегодня <strong>Янссен</strong> пользуется доверием у
                                косметологов и их клиентов в 70 странах мира.
                                <br />
                                <br />
                                Продукты <strong>JANSSEN</strong> относятся к разряду
                                `космецевтики`. Это понятие объединяет термины
                                `косметика` и `фармацевтика`. Тем самым марка
                                подчеркивает научно обоснованный, рецептурный состав
                                каждого препарата, в котором природные свойства
                                травяных и морских экстрактов усилены новейшими
                                биотехнологическими разработками. Активные компоненты
                                продуктов работают в синергии и оказывают мягкое, но
                                вместе с этим эффективное воздействие на кожу.
                                Препараты способны решать самые сложные эстетические
                                проблемы, такие как преждевременное старение, угревая
                                сыпь, купероз, повышенная чувствительность. Каждый
                                раз космецевтика <strong>JANSSEN</strong> приводит к
                                тому результату, который обещает.
                                <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyPage
