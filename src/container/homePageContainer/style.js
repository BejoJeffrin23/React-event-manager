import Styled from 'styled-components';
import image from '../../static/images/darkSky.jpg'
const HeaderLeftColumn = Styled.div`
padding-left:20px
`
const HeaderRowStyle= Styled.div`
background-image: url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

.firstRow{
    margin-top:15px;
    color:white
}
.secondColumn{
    margin-top:60%; 
    @media only screen and (min-width: 575px){
        margin-top: 20%;
      } 
}
`
const ButtonWrapper= Styled.div`
position: fixed;
bottom: 15px;
right: 15px;
@media only screen and (min-width: 575px){
    right: 28vw;
    bottom:30px;
} 
`
const CardStyleWrapper= Styled.div`
width:100%;
margin:auto;
.ant-card-body{
    padding:0px;
    min-height:100vh;
    max-height:100%;
}
.logo{
    text-align:center;
}
.cardBackground{
    background-color:blue;
}
@media only screen and (min-width: 575px){
    width:50%;
  } 
`
export {
    HeaderLeftColumn,
HeaderRowStyle,
ButtonWrapper,
CardStyleWrapper}