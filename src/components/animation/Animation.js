import React from 'react'
import style from './Animation.css';
import { Tabs,Button,Icon } from 'antd';
import animationIcon from '../../common/imgs/aninationIcon.png'

const TabPane = Tabs.TabPane;

class Animation extends React.Component{
    render(){
        return (
            <div className={style.wrapper}>
               <div className={style.left}>
                  <div className={style.imagWrpper}>
                     <img src={animationIcon}/>
                     <a className={style.imgDesc}>动画</a>
                  </div>
                  <div className={style.tabs}>
                         <Tabs defaultActiveKey="1" size="small" tabBarGutter={ 1 }>
                            <TabPane tab="有新动态" key="1">
                              <div className={style.tabsWrapper}>
                                 <div className={`${style.tabsItem} ${style.tabsItemOne}`}>
                                   <div className={`${style.imgWrapper} ${style.imgWrapperBoom}`}></div>
                                   <div className={style.imgWrapper}></div>
                                 </div>
                                 <div className={style.tabsItem}>
                                    <div className={`${style.imgWrapper} ${style.imgWrapperBoom}`}></div>
                                    <div className={style.imgWrapper}></div>
                                 </div>
                                 <div className={style.tabsItem}>
                                    <div className={`${style.imgWrapper} ${style.imgWrapperBoom}`}></div>
                                    <div className={style.imgWrapper}></div>
                                 </div>
                                 <div className={style.tabsItem}>
                                    <div className={`${style.imgWrapper} ${style.imgWrapperBoom}`}></div>
                                    <div className={style.imgWrapper}></div>
                                 </div>
                                 <div className={style.tabsItem}>
                                    <div className={`${style.imgWrapper} ${style.imgWrapperBoom}`}></div>
                                    <div className={style.imgWrapper}></div>
                                 </div>
                              </div>
                            </TabPane>
                            <TabPane tab="最新投稿" key="2">
                                
                            </TabPane>
                            
                        </Tabs>
                  </div>
                  <div className={style.button}>
                    <Button type="default" size="small" className={style.buttonLeft}>
                        <Icon type='sync'/>1336条新动态
                    </Button>
                    <Button type="default" size='small'>
                        更多<Icon type="right" />
                    </Button>
                  </div>
               </div>
               <div className={style.right}></div>
            </div>
        )
    }
}

export default Animation

