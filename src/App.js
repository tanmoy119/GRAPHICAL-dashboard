import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import BarCharts from './BarCharts';
import LineGraph from './LineGraph';
import Body from './Body';
import axios from "axios";
const url ='http://localhost:5000/get/data'; 

function App() {

  const [data,setData] = useState([]);
  useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(url);
        setData(request.data);
      }
      fetchData();
  },[url]);

  console.log(data);
  return (
    <Container>
      <Header1>
      <BarC className='tt1' ><BarCharts/></BarC>
     <Line1 className='tt2'><LineGraph/></Line1>
     </Header1>
     <Header2>
     <Line2 className='tt3'><LineGraph/></Line2>
     <Line3 className='tt4'><LineGraph/></Line3>
     <Line4 className='tt5'><LineGraph/></Line4>
     </Header2>
     <Body data={data}/>
    </Container>
  )
}

export default App;

const Container = styled.div`
max-width:1800px;
height:50vh;
margin-left: auto;
margin-right: auto;
margin-top: 20px;

//background-color: white;

`

const BarC = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  padding:20px;
  border:1px solid #ebe9f1;
  margin: 20px;
`

const Header1 = styled.div`
display: flex;
//height: 140vh;
//background-color rgb(50, 168, 12, 1);
//justify-content: space-between;
    

`

const Header2 = styled.div`
display: flex;

`


const Line1 = styled.div`
width:850px;
height: 500px;
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
margin: 20px ;

`
const Line2 = styled.div`
width: 600px;
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
margin: 20px ;
`
const Line3 = styled.div`
width: 600px;
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
margin: 20px ;
`

const Line4 = styled.div`
width: 600px;
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
margin: 20px ;
`
