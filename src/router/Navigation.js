import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Menu, Icon, } from 'antd';


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,

        }
       
    }
    render(){
         return (
            <div className="navigation-wrapper">
            <Menu
                
                defaultSelectedKeys={['1']}
                theme="light"
                mode='inline'
                defaultOpenKeys={['1']}
                inlineCollapsed={this.state.collapsed}

            >
                <Menu.Item key="1" className="Navigation-menu">
                    <Icon type="mail" />
                    <Link to={`/ui/buttons`}>企业邮箱</Link>
                </Menu.Item>
                <Menu.Item key="2" className="Navigation-menu">
                    <Icon type="desktop" />
                    <span>监测预警</span>
                </Menu.Item>
                <Menu.Item key="3" className="Navigation-menu">
                    <Icon type="inbox" />
                    <span>日常监管</span>
                </Menu.Item>
                <Menu.Item className="Navigation-menu">
                    <Icon type="bank" />
                    <span>应急救援</span>
                </Menu.Item>
                <Menu.Item className="Navigation-menu">
                    <Icon type="trademark" />
                    <span>安全知识库</span>
                </Menu.Item>
                <Menu.Item className="Navigation-menu">
                    <Icon type="border" />
                    <span>实景监控</span>
                </Menu.Item>
                <Menu.Item className="Navigation-menu">
                    <Icon type="poweroff" />
                    <span>办公辅助</span>
                </Menu.Item>
            </Menu>
            </div>
         )
    }
}

export default Navigation;
