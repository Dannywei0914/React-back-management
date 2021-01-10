import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Row } from 'antd';
import styled from 'styled-components';
import PathBar from '../../components/PathBar';
import { MainTitle } from '../../components/common/common';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Portal() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={onCollapse}
      >
        <Logo />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Row type='flex' justify='space-between' align='middle' style={{width: '100%'}}>
            <IconStyle type="home" /> 
            <IconStyle type="user" />
          </Row>
        </Header>
        <PathBar value={['portal']}></PathBar>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <MainTitle>商品清單</MainTitle>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

const IconStyle = styled(Icon)`
  font-size: 20px;
  cursor: pointer;
  color: #fff;

  :hover {
    color: blue;
  }

  :active {
    color: red;
  }
`;
