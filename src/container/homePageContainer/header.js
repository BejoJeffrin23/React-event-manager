import React, { useState,useEffect } from 'react';
import { Col,Row,Progress } from 'antd';
import { HeaderLeftColumn,HeaderRowStyle } from './style';
import { AlignLeftOutlined } from '@ant-design/icons';
const Gallery = (counts) => {
  

  const [state, setState] = useState({
      data:[],
      walletBalance:0,
    activeClass: '',
    profilePicture:'',
    newProfilePicture:'',
    newWorkPicture:'',
    workPictures:[]
  });
  


  return (
<>
<HeaderRowStyle>
<Row>
    <Col xs={{ span: 14}} lg={{ span: 14}} className='firstColumn'>
      <AlignLeftOutlined />
      <h1 style={{marginBottom:'-10px',marginTop:'10px',fontWeight:'normal',color:'white'}}>Your </h1>
      <h1 style={{color:'white',fontWeight:'normal'}}>Things</h1>
      <h5 style={{color:'#d5dbe3',marginTop:'35px',fontWeight:'normal'}}>{new Date().toLocaleString()}</h5>
    </Col>
    <Col xs={{ span: 10}} lg={{ span: 10}} className='secondColumnParent'>
    <Row className='secondColumn'>
        <Col xs={12}><h2 style={{color:'white',textAlign:'center',marginBottom:'-7px'}}>{counts.personalEvents}</h2>
        <p style={{color:'#d5dbe3',textAlign:'center'}}>Personal</p></Col>
        <Col xs={12}><h2 style={{color:'white',textAlign:'center',marginBottom:'-7px'}}>{counts.businessEvents}</h2>
        <p style={{color:'#d5dbe3',textAlign:'center'}}>Business</p></Col>  
        <Row style={{padding:'15px 0px 0px 50px'}}>
        <Progress width='20px' showInfo={false} type="circle" percent={75} /> <h5 style={{color:'white',paddingLeft:'8px',fontWeight:'5'}}>75% done</h5>
        </Row>
    </Row>
    </Col>
  </Row>
  </HeaderRowStyle>
        </>
  );
};

export default Gallery;
