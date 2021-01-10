import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { Breadcrumb, Icon } from "antd";
import * as Style from "./style";

const PathBar = ({ value }) => {
  const pathList = value.map((i) => (
    <Breadcrumb.Item key={i}>{i}</Breadcrumb.Item>
  ));
    
  return (
    <Style.Container>
      <Style.BreadcrumbStyle separator=">">
        <Breadcrumb.Item>
          <Icon type="home" />
        </Breadcrumb.Item>
        {pathList}
      </Style.BreadcrumbStyle>
    </Style.Container>
  )
};

PathBar.propTypes = {
  value: PropTypes.array,
};

PathBar.defaultProps = {
  value: [],
};

export default withRouter(PathBar);
