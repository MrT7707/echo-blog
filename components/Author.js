import {Avatar,Divider} from 'antd'
import styles from '../styles/Author.module.scss'
import classNames from 'classnames';

const Author =()=>{

    return (
        <div className={classNames(styles.author,'comm-right')}>
            <div> <Avatar size={100} src='https://grosiraja-production-private.oss-accelerate.aliyuncs.com/user/avatar/786656211415048.jpeg'  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author