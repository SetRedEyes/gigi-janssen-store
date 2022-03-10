import React from "react"
import PropTypes from "prop-types"

import { Col, Row } from "react-bootstrap"
import VolumePriceMenu from "../../common/VolumePriceMenu"
import ProductPageImage from "./productPageImage"

const ProductInfoBlock = ({ product }) => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <ProductPageImage photo={product.photo} />
                </Col>
                <Col md={7} className="mt-5 ms-5">
                    <h5>
                        <strong>
                            {" "}
                            {product.name} - {product.rusName}
                        </strong>
                    </h5>
                    <Row className="mt-3">
                        <span>
                            <b>Тип кожи:</b> Проблемная кожа, Жирная/комбинированная
                            кожа
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
                            <b>Назначение:</b> Увлажнение, Матирование/Сужение пор{" "}
                        </span>
                        <span>
                            <b>Страна производитель:</b> Израиль
                        </span>
                        <span>
                            <b>Активные компоненты:</b> Витамин А (Ретинол),
                            Увлажняющий фактор
                        </span>
                        <span>
                            <b>Способ применения:</b> Наружно
                        </span>
                        <span>
                            <b>Артикул:</b> {product.vendorCode}
                        </span>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="mt-3 mb-5">
                            <VolumePriceMenu product={product} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <hr />
                <Col>
                    <h3 className="ms-5 mt-2 ">Описание товара</h3>
                    <p className="text-left" style={{ textIndent: "2rem" }}>
                        Мыло содержит активный комплекс ингредиентов, действующих на
                        все симптомы и проявления акне. Экстракт канадского кипрея
                        обладает антибактериальным и противовоспалительным
                        действиями, успокаивает и смягчает кожу. Новая улучшенная
                        форма витамина А снижает активность сальных желез и обновляет
                        кожу, не вызывая при этом излишнего раздражения.
                        Колларен-биомиметический пептид быстро справляется с
                        обновлением тканей, предотвращает рубцевание и появление
                        пигментных пятен. Формула содержит компоненты NMF,
                        поддерживающие необходимый уровень влаги. Мыло мягко очищает
                        кожу, не пересушивая ее, придает свежесть и избавляет от
                        жирного блеска на долгое время. Способ применения: ежедневно,
                        утром и вечером. Нанесите на мокрую кожу небольшое количество
                        мыла. Помассируйте круговыми движениями 1 минуту, избегая
                        области вокруг глаз. Тщательно промойте теплой водой. Начните
                        применение с одного раза в день и постепенно увеличьте до
                        двух раз в день. В случаях повышенной сухости использование
                        следует уменьшить до одного раза в день. Активные
                        ингредиенты: RET complex, NMF(sodium PCA), sorbitol.{" "}
                    </p>
                </Col>
            </Row>
        </>
    )
}

ProductInfoBlock.propTypes = {
    product: PropTypes.object
}

export default ProductInfoBlock
