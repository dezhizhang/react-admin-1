import React from 'react';
import style from  './ContentLive.css';

class ContentLive extends React.Component{
    render(){
        return (
        <div className={style.wrapper}>
           <div className={style.liveLeft}>
              <div className={style.liveWrapper}>
                <div className={style.liveTabbar}></div>
                <div className={style.liveFlex}>
                   <div className={`${style.liveItem} ${style.liveitemOne}`}></div>
                   <div className={style.liveItem}></div>
                   <div className={style.liveItem}></div>
                   <div className={style.liveItem}></div>
                   <div className={style.liveItem}></div>
                </div>
              </div>
           </div>
           <div className={style.liveRight}></div>
        </div>
        )
    }
}


export default ContentLive;
