import React, { useState,useEffect } from 'react';
import { Col,Row,Button,Card } from 'antd';
import Header  from './header'
import { ButtonWrapper } from './style';
import Notes from './notes'
import {PlusOutlined } from '@ant-design/icons';
import {CardStyleWrapper } from './style';
import axios from 'axios';
import * as Constants from '../../constants';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
 
 
  const [isLoading,setIsLoading]=useState(false)
  const [events,setEvents]=useState([])
  const [personalEvents,setPersonalEvents]=useState(0)
  const [businessEvents,setBusinessEvents]=useState(0)

  useEffect(()=>{
    fetchEvents()
  },[])

 
  const fetchEvents =() => {
    setIsLoading(true)
    
          let endpoint = `${Constants.API}events?${Constants.API_KEY}`;
    
      
           axios
            .get(endpoint)
            .then(result => {
            let  events = result.data.events;
               console.log('service', result.data);
               setEvents(events)
               setPersonalEvents(result.data.personalEvents)
               setBusinessEvents(result.data.businessEvents)
              setIsLoading(false)
      
              // console.log('axios', this.state);
            })
            .catch(error => {
                setIsLoading(false)
                //console.log('error', error);
            });
      };

  return (
    <>
        <CardStyleWrapper>
        <Card>
        <Header  personalEvents ={personalEvents} businessEvents={businessEvents}/>
         <h3 style={{padding:'20px 0px 10px 25px',color:'#C0C0C0'}}>INBOX</h3>
         {events.map((event,index)=>{
         return <Notes key={index} event={event}/>})}
       <ButtonWrapper><NavLink to='/addEvent'> <Button type="primary" shape="circle" icon={<PlusOutlined />} size='large' /></NavLink></ButtonWrapper>
        </Card>
        </CardStyleWrapper>

    </>
  );
};

export default Gallery;
