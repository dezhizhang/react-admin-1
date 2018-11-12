import React from 'react';
import style from './ContentMove.css';
import { Carousel } from 'antd';
import time1 from '../../common/imgs/time1.png'
import time2 from '../../common/imgs/time2.png';
import time3 from '../../common/imgs/time3.png';
import time4 from '../../common/imgs/time4.png';
class ContentMove extends React.Component{
    render(){
        return(
            <div className={style.wrapper}>
               <div className={style.left}>
               <Carousel autoplay>
                    <div className={style.imageWrapper}>
                       <img className={style.image} src={time1}/>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={time2} className={style.image}/>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={time3} className={style.image}/>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={time4} className={style.image}/>
                    </div>
                </Carousel>
               </div>
               <div className={style.right}>
                  <div className={style.rightWrapper}>
                    <div className={style.item}>
                       <div className={`${style.listTop} ${style.list}`}>
                          <img src={time1} className={style.listImage}/>
                       </div>
                       <div className={`${style.list}`}>
                          <img src={time2} className={style.listImage}/>
                       </div>
                    </div>
                    <div className={style.item}>
                       <div className={`${style.listTop} ${style.list}`}>
                          <img src={time3} className={style.listImage}/>
                       </div>
                       <div className={`${style.list}`}>
                          <img src={time4} className={style.listImage}/>
                       </div>
                    </div>
                    <div className={style.item}>
                       <div className={`${style.listTop} ${style.list}`}>
                          <img src={time1} className={style.listImage}/>
                       </div>
                       <div className={`${style.list}`}>
                          <img src={time4} className={style.listImage}/>
                       </div>
                    </div>
                    <div className={style.item}>
                       <div className={`${style.list} ${style.listTop}`}>
                          <img src={time4} className={style.listImage}/>
                       </div>
                       <div className={`${style.list}`}>
                         <img src={time2} className={style.listImage}/>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default ContentMove