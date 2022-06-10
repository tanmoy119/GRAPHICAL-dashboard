import React from 'react';
import './App.css';
import styled from "styled-components";
import BarCharts from './BarCharts';
import LineGraph from './LineGraph';

function App() {
  return (
    <Container>
      <Header>
      <BarC className='tt1' ><BarCharts/></BarC>
     <Line1 className='tt2'><LineGraph/></Line1>
     <Line2 className='tt3'></Line2>
     <Line3 className='tt4'></Line3>
     <Line4 className='tt5'></Line4>
     </Header>
      <h1>hi</h1>
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
  margin: 20px 0 0 20px;
`

const Header = styled.div`
display: grid;
gap: 20px;
//height: 140vh;
background-color rgb(50, 168, 12, 1);
//justify-content: space-between;
    .tt1{
      grid-column: 1 ;
      grid-row: 1 / span 1;
    }
    .tt2{
      grid-column: 2 / span 3  ;
      grid-row: 1/ span 1 ;
    }

    .tt3{
      grid-column: 1 / span 1 ;
      grid-row: 2 ;

    }

    .tt4{
      grid-column: 2 / span 1;
      grid-row: 2 ;

    }

    .tt5{
      grid-column: 3 /span 1 ;
      grid-row: 2 ;

    }

`

const Line1 = styled.div`
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
margin: 20px 20px 0 0 ;

`
const Line2 = styled.div`
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;
`
const Line3 = styled.div`
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;`

const Line4 = styled.div`
border-radius: 20px;
padding:20px;
border:1px solid #ebe9f1;
background-color: white;`
