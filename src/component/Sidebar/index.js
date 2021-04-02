import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { 
    UserOutlined, 
    DashboardOutlined, 
    UploadOutlined, 
    TeamOutlined,
    CopyOutlined,
    CheckSquareOutlined,
    FileImageOutlined
} from '@ant-design/icons'

const {SubMenu} = Menu;
const { Sider } = Layout;

const Sidebar = () => {
    const history = useHistory();
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            width="250px"
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to="/">
                        Dashboard
                        </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>
                    <Link to="/kelompok-kkn">
                        Anggota Kelompok
                        </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    <Link to="/pembimbing">
                        DPL/TPL Kelompok
                        </Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UploadOutlined />} title="Upload Laporan">
                    <Menu.Item key="4" icon={<CopyOutlined />} >
                        <Link to="/program-kerja">
                        Program Kerja
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={ <CheckSquareOutlined /> }>Laporan Akhir</Menu.Item>
                    <Menu.Item key="6" icon={ <FileImageOutlined />}>
                        <Link to="/profil-desa">
                            Profil Desa
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default Sidebar
