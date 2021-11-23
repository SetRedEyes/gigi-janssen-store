import React from "react"
import { ListGroup } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  pathProperty
}) => {
  if (!Array.isArray(items[0])) {
    return (
      <ListGroup>
        {Object.keys(items).map((item) => (
          <Link
            className="text-decoration-none"
            key={items[item][valueProperty]}
            to={`/${items[item][pathProperty]}/category/${items[item][valueProperty]}`}
          >
            <ListGroup.Item
              active={items[item] === selectedItem}
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
      {items.map((item) => (
        <ListGroup.Item
          key={item[valueProperty]}
          active={item === selectedItem}
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item[contentProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
  pathProperty: "companyId"
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  pathProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}
export default GroupList
