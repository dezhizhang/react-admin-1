import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveData } from './redux/action';
import NavigationLeft from  './router/NavigationLeft';
import NavigationRight from './router/NavigationRight';
import RouterUrl from './router/RouterUrl';
import logo from './common/imgs/logo.png';
import './App.css';

import { Layout,Icon, Col,Row } from 'antd'


const { Header, Sider,Footer } = Layout


@connect(mapStateToProps,mapDispatchToProps) 
class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  // componentDidMount = async () => {
  //   await this.props.receiveData(); 
  //   console.log('初始化redux-state:');
  //   console.log(this.props.data)
  // }

  
  render() {
   
    return (
      <BrowserRouter>
      <div className="App">
        <Layout >
          <Layout>
            <Header className="App-header">
               <div className="Nav-wrapper">
                  <Row>
                     <Col span={12}>
                        <div className="Nav-left-wrapper">
                            <NavigationLeft/>
                         </div>
                     </Col>
                     <Col span={12}>
                        <div className="Nav-right-wrapper">
                            <NavigationRight/>
                        </div>
                     </Col>
                  </Row>
                  
                 
               </div>
            </Header>
                  <RouterUrl/>
                  <Footer style={{ textAlign:'center' }}>
                  主办单位：好利来信息技术有限公司<br/>
                  Operated by 1541609448@qq.com
                  </Footer>
              </Layout>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  const  data = state.defaultData;
  return {data};
};

const mapDispatchToProps = dispatch => ({
  receiveData:bindActionCreators(receiveData, dispatch)
});

export default App;