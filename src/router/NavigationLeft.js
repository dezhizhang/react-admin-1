import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import style from './NavigationLeft.css';
import { Menu, Icon, } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class NavigationLeft extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            current: 'mail',

        }
       
    }
    render(){
         return (
        <div className="navigation-left-wrapper">
           <Menu
            onClick={this.handleClick}
            mode="horizontal"
            >
            <Menu.Item key="mail" className={style.navigationItem}>
                <Icon type="mail" />主站
            </Menu.Item>
            <Menu.Item key="draw" className={style.navigationItem}>
                画友
            </Menu.Item>
            <Menu.Item key="music" className={style.navigationItem}>
                音频
            </Menu.Item>
            <SubMenu title={<span className={style.navigationItem}>游戏中心</span>} >
                <MenuItemGroup title="Item 1">
                   
                </MenuItemGroup>
            </SubMenu>
            <SubMenu  title={<span className={style.navigationItem}>直播</span>}>
                <MenuItemGroup  title="Item 1">
                    <Menu.Item   key="setting:1">Option 1</Menu.Item>
    
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    
                    <Menu.Item   key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="download">
                 <Icon type="mail" className={style.navigationItem}/>下载APP
            </Menu.Item>
            </Menu>
        </div>
         )
    }
}

export default NavigationLeft;
