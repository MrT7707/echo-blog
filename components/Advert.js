import styles from '../styles/Advert.module.scss'
import classNames from 'classnames';

 const Advert = ()=>{
    return (
        <div className={classNames(styles.advert,'comm-right')}>
          <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        </div>
    )
 }

 export default Advert