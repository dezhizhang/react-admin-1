import React from 'react';
import { Menu, Icon,Avatar } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class NavigationRight extends React.Component{
    render(){
        return(
        <div classnName="">
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
            >
            <Menu.Item key="user">
                 <Avatar icon="user" />
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">大会员</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">消息</span>}>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">动态</span>}>
                <MenuItemGroup title="Item 3">
                    <Menu.Item key="setting:2">Option 3</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">稍动再看</span>}>
                <MenuItemGroup title="Item 4">
                    <Menu.Item key="setting:2">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">收藏夹</span>}>
                <MenuItemGroup title="Item 5">
                    <Menu.Item key="setting:2">Option 5</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">历史</span>}>
                <MenuItemGroup title="Item 5">
                    <Menu.Item key="setting:2">Option 5</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">投稿</span>}>
                <MenuItemGroup title="Item 6">
                    <Menu.Item key="setting:2">Option 5</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
      </Menu>
        </div>)
    }
}

export default NavigationRight;
