import React from 'react';
import './App.css';
import styled from "styled-components";
import BarCharts from './BarCharts';
import LineGraph from './LineGraph';

function App() {
  return (
    <Container>
      <Header>
      <BarC className='tt1' ><BarCharts /></BarC>
     <BarC className='tt2'><LineGraph /></BarC>
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
  //width: 800px;
  //height: 500px;
  background-color: white;
  border-radius: 20px;
  padding:20px;
  border:1px solid #ebe9f1
`

const Header = styled.div`
display: grid;
//justify-content: space-between;
    .tt1{
      grid-column: 1 / span 1;
      grid-row: 1;
    }
    .tt2{
      grid-column: 3;
      grid-row: 1 / span 2;
    }

`