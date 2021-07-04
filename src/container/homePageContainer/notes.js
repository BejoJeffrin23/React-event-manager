import React, { useState,useEffect } from 'react';
import { Col,Row } from 'antd';
import {PlayCircleOutlined,HeartOutlined } from '@ant-design/icons';

const Gallery = (eventData) => {
  const event=eventData.event
console.log('event',event)


  return (
    <>
<Row style={{paddingLeft:'20px'}}>
        <Col style={{borderRadius:'50%',border:'1px'}} xs={4}>
          
         <h1 >{event.eventType==='business'?<PlayCircleOutlined />:<HeartOutlined />}</h1>
        
        </Col>
        
        <Col xs={16}>
          
         <h2>{event.title}</h2>
         <h3 style={{color:'gray'}}>{event.location}</h3>
        
        </Col>
        
        <Col xs={4}>
          
         <h4>{event.dateAndTime}</h4>
        
        </Col>
        <hr></hr>
        </Row>
    </>
  );
};

export default Gallery;
