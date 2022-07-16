import React from 'react'
import { Button,Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined } from '@ant-design/icons';


import icon from '../images/cryptocurrency.png';
import MenuItem from 'antd/lib/menu/MenuItem';
const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryotoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
        <Menu theme='dark'>
          <MenuItem key={0} icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem key={1} icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </MenuItem>
          <MenuItem  key={2} icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </MenuItem>
          <MenuItem key={3} icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </MenuItem>
        </Menu>
    </div>
  )
}

export default NavBar