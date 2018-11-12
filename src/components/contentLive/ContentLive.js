import React from 'react';
import style from  './ContentLive.css';
import time1 from '../../common/imgs/time1.png'
class ContentLive extends React.Component{
    render(){
        return (
        <div className={style.wrapper}>
           <div className={style.liveLeft}>
              <div className={style.liveWrapper}>
                <div className={style.liveTabbar}></div>
                <div className={style.liveFlex}>
                   <div className={`${style.liveItem} ${style.liveitemOne}`}>
                      <div className={`${style.liveList} ${style.liveTop}`}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                      <div className={style.liveList}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                   </div>
                   <div className={style.liveItem}>
                     <div className={`${style.liveList} ${style.liveTop}`}>
                        <img src={time1} className={style.liveImage}/>
                        <span>这段时光能一直持续就好了❤</span>
                     </div>
                     <div className={style.liveList}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                       </div>
                   </div>
                   <div className={style.liveItem}>
                        <div className={`${style.liveList} ${style.liveTop}`}>
                            <img src={time1} className={style.liveImage}/>
                                <span>这段时光能一直持续就好了❤</span>
                            </div>
                        <div className={style.liveList}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                        </div>
                   </div>
                   <div className={style.liveItem}>
                      <div className={`${style.liveList} ${style.liveTop}`}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                      <div className={style.liveList}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                   </div>
                   <div className={style.liveItem}>
                      <div className={`${style.liveList} ${style.liveTop}`}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                      <div className={style.liveList}>
                            <img src={time1} className={style.liveImage}/>
                            <p className={`${style.font} ${style.center}`}>这段时光能</p>
                            <span className={`${style.fontDesc} ${style.center}`}>这段时光能</span>
                      </div>
                   </div>
                </div>
              </div>
           </div>
           <div className={style.liveRight}></div>
        </div>
        )
    }
}


export default ContentLive;
