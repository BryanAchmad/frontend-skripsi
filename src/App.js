import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, BrowserRouter } from 'react-router-dom'
import { Col, Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { FooterPage, Sidebar, Navbar } from './component';

const Home = lazy(() => import('./pages/Home'));
const Pembimbing = lazy(() => import('./pages/Pembimbing'));
const Kelompok = lazy(() => import('./pages/Kelompok'));
const Login = lazy(() => import('./pages/Login'));
const ProgramKerja = lazy(() => import('./pages/ProgramKerja'));
const ProfilDesa = lazy(() => import('./pages/ProfilDesa'));

const { Content, Sider, Header, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <React.Fragment>
            <Route path='/login' component={Login} />
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar />
              <Layout>
                <Navbar />
                <Content style={{ margin: '24px 16px 0' }}>
                  <div className="site-layout-background" style={{ padding: 24 }}>
                    {/* <Route path='/login' component={Login} /> */}
                    <Route path='/pembimbing' component={Pembimbing} />
                    <Route path='/kelompok-kkn' component={Kelompok} />
                    <Route path='/program-kerja' component={ProgramKerja} />
                    <Route path='/profil-desa' component={ProfilDesa} />
                    
                    <Route path='/' component={Home} exact />
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center', float: 'inline-end' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </Layout>
          </React.Fragment>
        </Switch>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
