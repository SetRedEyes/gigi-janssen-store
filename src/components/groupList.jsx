import React from "react"
import { ListGroup } from "react-bootstrap"
import PropTypes from "prop-types"

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  if (!Array.isArray(items)) {
    return (
      <ListGroup>
        {Object.keys(items).map((item) => (
          <ListGroup.Item
            active={items[item] === selectedItem}
            key={items[item][valueProperty]}
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item
          active={item === selectedItem}
          key={item[valueProperty]}
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
  contentProperty: "name"
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}
export default GroupList
