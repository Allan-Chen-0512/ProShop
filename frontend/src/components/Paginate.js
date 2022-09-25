import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && ( // if pages ( > 1 then show pagination )
      <Pagination>
        {[...Array(pages).keys()].map(
          // if pages = 6 , convert 6 into an Array , extract the .keys(), then spread the keys into an Array
          (x) => (
            <LinkContainer
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}` 
              }
            >
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          )
        )}
      </Pagination>
    )
  );
};
export default Paginate;
