import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getProductById } from "../../../store/products"

import { Col, Container, Row, Image } from "react-bootstrap"
import VolumePriceMenu from "../../common/VolumePriceMenu"
import GroupList from "../../../components/common/groupList"
import LoadingSpinner from "../../common/loadingSpinner"

const ProductPage = ({ productId, companyName }) => {
    const [selectedCat, setSelectedCat] = useState()
    const categories = useSelector(getCategoriesByCompany(companyName))
    const product = useSelector(getProductById(productId))

    useEffect(() => {
        setSelectedCat(JSON.parse(localStorage.getItem("selectedCat")))
    }, [])

    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
        setSelectedCat(item)
    }

    if (product) {
        return (
            <Container fluid>
                {categories && (
                    <Row className="me-5">
                        <Col md={3} className="mt-4">
                            <GroupList
                                selectedItem={selectedCat}
                                items={categories}
                                onItemSelect={handleCategorySelect}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}>
                                    <Image
                                        className="m-4"
                                        src={product.photo}
                                        fluid
                                        style={{ width: "20rem", height: "20rem" }}
                                    />
                                </Col>
                                <Col md={7} className="mt-4 ms-5">
                                    <h5>
                                        <strong>
                                            {" "}
                                            {product.name} - {product.rusName}
                                        </strong>
                                    </h5>
                                    <Row className="mt-3">
                                        <span>
                                            <b>Тип кожи:</b> Проблемная кожа,
                                            Жирная/комбинированная кожа
                                        </span>
                                        <span>
                                            <b>Область применения:</b> Для лица
                                        </span>
                                        <span>
                                            <b>Возраст:</b> 18+, 25+, 30+
                                        </span>
                                        <span>
                                            <b>Классификация:</b> Профессиональная
                                        </span>
                                        <span>
                                            <b>Назначение:</b> Увлажнение,
                                            Матирование/Сужение пор{" "}
                                        </span>
                                        <span>
                                            <b>Страна производитель:</b> Израиль
                                        </span>
                                        <span>
                                            <b>Активные компоненты:</b> Витамин А
                                            (Ретинол), Увлажняющий фактор
                                        </span>
                                        <span>
                                            <b>Способ применения:</b> Наружно
                                        </span>
                                        <span>
                                            <b>Артикул:</b> {product.vendorCode}
                                        </span>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={6} className="mt-5 mb-5">
                                            <VolumePriceMenu product={product} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <hr />
                                <Col className="mt-3">
                                    <h3 className="ms-5 ">Описание товара</h3>
                                    <p
                                        className="text-left"
                                        style={{ textIndent: "2rem" }}
                                    >
                                        Мыло содержит активный комплекс ингредиентов,
                                        действующих на все симптомы и проявления
                                        акне. Экстракт канадского кипрея обладает
                                        антибактериальным и противовоспалительным
                                        действиями, успокаивает и смягчает кожу.
                                        Новая улучшенная форма витамина А снижает
                                        активность сальных желез и обновляет кожу, не
                                        вызывая при этом излишнего раздражения.
                                        Колларен-биомиметический пептид быстро
                                        справляется с обновлением тканей,
                                        предотвращает рубцевание и появление
                                        пигментных пятен. Формула содержит компоненты
                                        NMF, поддерживающие необходимый уровень
                                        влаги. Мыло мягко очищает кожу, не
                                        пересушивая ее, придает свежесть и избавляет
                                        от жирного блеска на долгое время. Способ
                                        применения: ежедневно, утром и вечером.
                                        Нанесите на мокрую кожу небольшое количество
                                        мыла. Помассируйте круговыми движениями 1
                                        минуту, избегая области вокруг глаз.
                                        Тщательно промойте теплой водой. Начните
                                        применение с одного раза в день и постепенно
                                        увеличьте до двух раз в день. В случаях
                                        повышенной сухости использование следует
                                        уменьшить до одного раза в день. Активные
                                        ингредиенты: RET complex, NMF(sodium PCA),
                                        sorbitol.{" "}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Container>
        )
    } else {
        return <LoadingSpinner />
    }
}

ProductPage.propTypes = {
    productId: PropTypes.string,
    companyName: PropTypes.string
}

export default ProductPage
