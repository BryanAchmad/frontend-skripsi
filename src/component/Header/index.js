import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
            <Menu style={{ float: 'right' }} mode="horizontal">
                <Menu.Item key="1"><Link to="/login">Logout</Link></Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar;
