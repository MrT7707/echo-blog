import React ,{useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import {Row,Col, Menu, Icon} from 'antd'
import styles from '../styles/Header.module.scss'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3190740_sxidaxur6n.js',
});

const Header = () => {

    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    console.log(res)
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])
    //跳转到列表页
    const handleClick = (e)=>{
        console.log(e)
        if(e.key== 'home'){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }


    }

return(
  <div className={styles.header}>
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">
            <Link href={{pathname:'/'}}>
                   <a>Echo</a>
              </Link>
            </span>
            <span className="header-txt">专注前端开发</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal" onClick={handleClick}>
                <Menu.Item key="home">
                    <IconFont type="icon-diannao" />
                    博客首页
                </Menu.Item>
                {
                    navArray.map((item)=>{
                     return(
                         <Menu.Item key={item.id}>
                             <IconFont type={item.icon} />
                             {item.typeName}
                         </Menu.Item>
                     )
                    }) 
                }
            </Menu>
        </Col>
    </Row>
 </div>
)
    }

export default Header