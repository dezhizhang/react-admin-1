import React from 'react';
import style from './ContentTabbar.css';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ContentTabbar extends React.Component{
    render(){
        return (
            <div className={style.tabbarWrapper}>
                <Menu
                onClick={this.handleClick}
                mode="horizontal"
                className={style.tabbarMenu}
                >
                <Menu.Item key="index" className={style.tabbarMenuItem}>
                     <i className={style.tabbarIndex}>首页</i>
                     <span>首页</span>
                </Menu.Item>
               
                <SubMenu title={<span className={style.tabbarMenuItem}  ><i className={style.tabbarIcon}>77</i>动画</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="animation:1">Option 1</Menu.Item>
                    <Menu.Item key="animation:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>番剧</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="hisplay:1">Option 1</Menu.Item>
                    <Menu.Item key="hisplay:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>国创</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="thegen:1">Option 1</Menu.Item>
                    <Menu.Item key="thegen:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>音乐</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="music:1">Option 1</Menu.Item>
                    <Menu.Item key="music:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>蹈</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="music:1">Option 1</Menu.Item>
                    <Menu.Item key="music:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>游戏</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="game:1">Option 1</Menu.Item>
                    <Menu.Item key="game:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>科技</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>生活</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>鬼畜</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>时尚</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>广告</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem} ><i className={style.tabbarIcon}>77</i>娱乐</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span className={style.tabbarMenuItem} ><i className={style.tabbarIcon}>77</i>影视</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem} ><i className={style.tabbarIcon}>77</i>放映厅</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu  title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>专栏</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>广场</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>直播</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>小墨层</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span className={style.tabbarMenuItem}><i className={style.tabbarIcon}>77</i>小墨层</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="technology:1">Option 1</Menu.Item>
                    <Menu.Item key="technology:2">Option 2</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                
                
                
             </Menu>
            </div>
        )
    }
}

export default ContentTabbar;
