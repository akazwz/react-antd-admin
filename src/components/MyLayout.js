import React, { useEffect, useState } from 'react';
import { Grid, Col, Layout, Menu, Row } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardOutlined,

} from '@ant-design/icons';

const {Header, Sider, Content, Footer} = Layout;

const {useBreakpoint} = Grid;

const MyLayout = () => {
    const screens = useBreakpoint();

    const [collapsed, setCollapsed] = useState(false);

    const handleCollToggle = () => {
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        if ( screens.xs || screens.sm ) {
            setCollapsed(true);
        }
        if ( screens.md || screens.lg || screens.xl || screens.xxl ) {
            setCollapsed(false);
        }
    }, [screens]);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                <div style={{textAlign: 'center', align: "middle",}}>
                    <DashboardOutlined style={{fontSize: 30}}/>
                </div>
                <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1' icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key='2' icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key='3' icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{backgroundColor: '#ffffff', padding: 0}} align='left'>
                    <Row>
                        <Col span={6}>
                            {collapsed ? <MenuUnfoldOutlined onClick={handleCollToggle} style={{fontSize: 27}}/> :
                                <MenuFoldOutlined onClick={handleCollToggle} style={{fontSize: 27}}/>}
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        minHeight: 500,
                    }}
                >
                    Content
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default MyLayout;
