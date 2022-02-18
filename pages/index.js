
import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header';
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col, List, Icon} from 'antd'
import axios from 'axios';
import { withRouter} from 'next/router'
import  servicePath  from '../config/apiUrl'
import { createFromIconfontCN } from '@ant-design/icons';
import {marked} from 'marked'
import hljs from "highlight.js";

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3190740_sxidaxur6n.js',
});


const Home = ({data = {}}) => {

  const renderer = new marked.Renderer();
  marked.options({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }
  }); 

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
      <div className={styles.my_list}>    
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                 <div className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                </div>
                <div className="list-icon">
                  <span><Icon type="calendar" />{item.addTime}</span>
                  <span><Icon type="folder" />{item.typeName}</span>
                  <span><IconFont type="icon-shouji" /> {item.view_count}人</span>
                </div>
                <div className="list-context" 
                  dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                ></div>  
              </List.Item>
            )}
          />    
    </div>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
      </Col>
    </Row>
    <Footer/>
    </div>
  )
}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}


export default Home
