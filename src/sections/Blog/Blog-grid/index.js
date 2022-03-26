import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import Card from "../../../components/Card";
import Pager from "../../../components/pager";
import { Container, Row, Col } from "../../../reusecore/Layout";

import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import { BlogPageWrapper } from "./blogGrid.style";
import Search from "./js-search";

const BlogGrid = ({data, isListView, setListView, setGridView, pageContext}) => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog" path="Blog"/>
      <div className="blog-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <Search data1={data.allMdx.nodes} setGridView={setGridView} setListView={setListView} pageContext={pageContext} isListView={isListView} />
            </Col>
            <Col xs={12} lg={4}>
              <Sidebar/>
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogGrid;
