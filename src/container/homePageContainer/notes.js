import React, { useState,useEffect } from 'react';
import { Col,Row } from 'antd';
import {PlayCircleOutlined,HeartOutlined } from '@ant-design/icons';

const Gallery = (eventData) => {
  const event=eventData.event
console.log('event',event)


  return (
    <>
<Row style={{paddingLeft:'28px'}}>
        <Col style={{borderRadius:'50%',border:'1px'}} xs={4}>
          
         <h1 >{event.eventType==='business'?<PlayCircleOutlined style={{ fontSize: '150%',marginTop:'8px'}}/>:<HeartOutlined style={{ fontSize: '150%',marginTop:'8px'}}/>}</h1>
        
        </Col>
        
        <Col xs={15}>
          
         <h2 style={{fontWeight:'normal',fontSize:'20px'}}>{event.title}</h2>
         <h3 style={{fontWeight:'normal',color:'#C0C0C0',marginTop:'-13px'}}>{event.location}</h3>
        
        </Col>
        
        <Col xs={5} style={{paddingRight:'10px'}}>
          
         <h4 style={{color:'#C0C0C0',marginTop:'4px'}}>{event.dateAndTime}</h4>
        
        </Col>
        </Row>
        <hr style={{width:'86%'}}/>

    </>
  );
};

export default Gallery;
