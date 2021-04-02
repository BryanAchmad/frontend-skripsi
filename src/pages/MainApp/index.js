import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Home from '../Home';
import Kelompok from '../Kelompok';
import { Navbar, Sidebar, FooterPage } from '../../component'
import './mainApp.css'

const { Content } = Layout;

const MainApp = () => {
    const history = useHistory();
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <Navbar />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, height: '100vh' }}>
                        <Router>
                            <Switch>
                                <Route path='/kelompok-kkn' component={Kelompok}>
                                    <Kelompok />
                                </Route>
                                <Route path='/' component={Home}>
                                    <Home />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout>
    )
}

export default MainApp
