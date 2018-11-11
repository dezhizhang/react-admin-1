import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveData } from './redux/action';
import NavigationLeft from  './router/NavigationLeft';
import NavigationRight from './router/NavigationRight';
import RouterUrl from './router/RouterUrl';
import logo from './common/imgs/logo.png';
import banner from './common/imgs/banner.png';
import style from './App.css';
import './iconfont.css';


import { Layout,Icon, Col,Row,Button,Input } from 'antd'

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;



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
         
            <Header className="App-header">
               <div className={style.NavWrapper}>
                  <Row>
                     <Col span={12}>
                        <div className={style.NavLeftWrapper}>
                            <NavigationLeft/>
                         </div>
                     </Col>
                     <Col span={12}>
                        <div className={style.NavRightWrapper}>
                            <NavigationRight/>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Header>
            <Content className={style.content}>
               <div className={style.banner}>
                  <img className={style.image} src={banner}/>
                  <div className={style.search}>
                      <Button className={`${style.searchButton}`} type="default" icon="pause">排行榜</Button>
                      <Search
                        placeholder="请输入搜索内容"
                        onSearch={value => console.log(value)}
                        className={style.searchInput}
                    />
                  </div>
               </div>
               <div className={style.contentWrapper}>
                   <div className={style.contentTabbar}>
                        
                   </div>
                   <div className={style.contentMove}></div>
               </div>
            </Content>

            <RouterUrl/>
            <Footer style={{ textAlign:'center' }}>
                  主办单位：好利来信息技术有限公司<br/>
                  Operated by 1541609448@qq.com
            </Footer>
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