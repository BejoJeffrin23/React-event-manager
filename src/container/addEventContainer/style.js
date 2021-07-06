import Styled from 'styled-components';

const CardStyleWrapper= Styled.div`
width:100%;
margin:auto;
.logo{
    text-align:center;
}
.ant-input-affix-wrapper > input.ant-input {
    color:white;
}

.cardBackground{
    min-height:100vh;
    max-height:100%;
    background-color:#2222aa;
}
@media only screen and (min-width: 575px){
    width:50%;
  } 
`


export {
    CardStyleWrapper}