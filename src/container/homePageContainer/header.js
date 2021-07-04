import React, { useState,useEffect } from 'react';
import { Col,Row } from 'antd';
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
<Row >
    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 12, offset: 1 }}>
      <AlignLeftOutlined className='firstRow'/>
      <h1 style={{marginBottom:'-15px',color:'white'}}>Your </h1>
      <h1 style={{color:'white'}}>Things</h1>
      <h5 style={{color:'#d5dbe3'}}>{new Date().toLocaleString()}</h5>
    </Col>
    <Col xs={{ span: 8, offset: 1 }} lg={{ span: 8, offset: 1 }}>
    <Row className='secondColumn'>
        <Col xs={12}><h2 style={{color:'white'}}>{counts.businessEvents}</h2><h4 style={{color:'#d5dbe3'}}>Business</h4></Col>  
        <Col xs={12}><h2 style={{color:'white'}}>{counts.personalEvents}</h2><h4 style={{color:'#d5dbe3'}}>Personal</h4></Col>
    </Row>
    </Col>
  </Row>
  </HeaderRowStyle>
        </>
  );
};

export default Gallery;
