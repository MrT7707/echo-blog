
import React,{useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header';
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col, List, Icon, Breadcrumb} from 'antd'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import Link from 'next/link'
import { withRouter} from 'next/router'
import {marked} from 'marked'
import hljs from "highlight.js";


const ListComponent = ({data}) => {

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
        <title>List</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
      <div className={styles.my_list}> 
        <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>   
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>
                <div className="list-context" 
                dangerouslySetInnerHTML={{__html:marked(item.introduce)}}>
                </div>  
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

ListComponent.getInitialProps = async (context)=>{

  console.log(context)
  let id =context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById+id).then(
      (res)=>resolve(res.data)
    )
  })
  return await promise
}

export default ListComponent