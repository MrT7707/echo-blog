import {Avatar,Divider} from 'antd'
import styles from '../styles/Author.module.scss'
import classNames from 'classnames';

const Author =()=>{

    return (
        <div className={classNames(styles.author,'comm-right')}>
            <div> <Avatar size={100} src='https://grosiraja-production-private.oss-accelerate.aliyuncs.com/user/avatar/786656211415048.jpeg'  /></div>
            <div className="author-introduction">
                这家伙有点懒，什么都没说……
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author