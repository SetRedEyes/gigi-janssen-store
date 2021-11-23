import React from "react"
import { Pagination } from "react-bootstrap"
import PropTypes from "prop-types"
import _ from "lodash"

const PagesPagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)

  if (pageCount === 1) return null

  const pages = _.range(1, pageCount + 1)
  const items = pages.map((page) => (
    <Pagination.Item
      key={page}
      active={page === currentPage}
      activeLabel={false}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Pagination.Item>
  ))

  return <Pagination className="d-flex justify-content-center">{items}</Pagination>
}
PagesPagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
export default PagesPagination
