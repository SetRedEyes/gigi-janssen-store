import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
    pathProperty,
    companyName
}) => {
    if (!Array.isArray(items)) {
        return (
            <ListGroup>
                <h1 className="text-center ">{companyName}</h1>
                {Object.keys(items).map((item) => (
                    <Link
                        className="text-decoration-none"
                        key={items[item][valueProperty]}
                        to={{
                            pathname: `/${items[item][pathProperty]}/${items[item][valueProperty]}`,
                            state: {
                                selectedCatProp: items[item]
                            }
                        }}
                    >
                        <ListGroup.Item
                            active={
                                JSON.stringify(items[item]) ===
                                JSON.stringify(selectedItem)
                            }
                            onClick={() => onItemSelect(items[item])}
                            role="button"
                        >
                            {items[item][contentProperty]}
                        </ListGroup.Item>
                    </Link>
                ))}
            </ListGroup>
        )
    }

    return (
        <ListGroup>
            <h1 className="text-center mt-0 mb-1">{companyName.toUpperCase()}</h1>

            {items.map((item) => (
                <Link
                    className="text-decoration-none"
                    key={item[valueProperty]}
                    to={`/${item[pathProperty]}/${item[valueProperty]}`}
                >
                    <ListGroup.Item
                        key={item[valueProperty]}
                        active={
                            JSON.stringify(item) === JSON.stringify(selectedItem)
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item[contentProperty]}
                    </ListGroup.Item>
                </Link>
            ))}
        </ListGroup>
    )
}

GroupList.defaultProps = {
    valueProperty: "name",
    contentProperty: "fullName",
    pathProperty: "companyName"
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    pathProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    companyName: PropTypes.string
}
export default GroupList
