import React from 'react';
import styled from 'styled-components';
import Selector from './Selector';

function Body() {
  return (
    <Component >
        <Filters>
            <span className='filter'>Filters -</span>
            <Selector heading={'Topics'} />
            <Selector heading={'Country'} />
            <Selector heading={'City'} />
            <Selector heading={'Region'} />
            <Selector heading={'Sector'} />
            <Selector heading={'End Year'} />
            <Selector heading={'Source'} />
            <Selector heading={'Topics'} />
            <Selector heading={'Topics'} />
            <Selector heading={'Topics'} />

        </Filters>
        <Nav>
            <span className='topic'>Topic</span>
            <span className='title'>Title</span>
            <span>City</span>
            <span>Region</span>
            <span>Country</span>
            <span>Likelihood</span>
            <span>Intensity</span>
            <span>Relevance</span>
            <span className='year'>Year</span>


        </Nav>
        <NavBody>
        <span className='Topic'>Topic</span>
            <span className='title'>U.S. petroleum consumption is projected to remain below the 2005 level.</span>
            <span className='City'>Falakata</span>
            <span className='Region'>Northern</span>
            <span className='Country'>Country</span>
            <span className='Likelihood'>Likelihood</span>
            <span className='Intensity'>Intensity</span>
            <span className='Relevance'>Relevance</span>
            <span className='Year'>Year</span>
        </NavBody>
        <NavBody>
        <span className='Topic'>Topic</span>
            <span className='title'>1</span>
            <span className='City' >Northern America</span>
            <span className='Region' >Northern America</span>
            <span className='Country' >United States of America</span>
            <span className='Likelihood' >10</span>
            <span className='Intensity' >9</span>
            <span className='Relevance' >1</span>
            <span className='Year' >2020-2021</span>
        </NavBody>


    </Component>
    
  )
}

export default Body;

const Component = styled.div`
width:100%;
height: 50vh;
background-color: white;
border-radius: 20px;
//padding:20px;
border:1px solid #ebe9f1;

`
const Filters = styled.div`
//width:100%;
border-radius: 20px;
height:70px;
background-color: white;
display: flex;
//justify-content: space-between;
align-items: center;
        .filter{
            margin: 0 10px;
           // font-size: 20px;
        }


`

const Nav = styled.div`
height: 40px;
background-color:#f3f2f7;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;

        .title{
            margin: 0 200px;
        }
        .topic{
            padding: 0 0 0 px;
        }

`

const NavBody = styled.div`
height: 40px;
background-color: white;
display: flex;
align-items: center;
//justify-content: space-between;
padding: 0 5px;
border-bottom:1px solid #ebe9f1;

        .title{
            display: flex;
            justify-content: center;
            width: 450px;
            padding: 0 45px;
            color: #6e6b7b;
            font-size: 14px;
            height:100%;
        }
        .Topic{
            display: flex;
            width: 100px;
            justify-content: center;
            align-items: center;
            color: #6e6b7b;
            font-size: 14px;
            height:100%;
        }

.City{
    display: flex;
    justify-content: center;
    width: 180px;
    color: #6e6b7b;
    font-size: 14px;

}
.Region{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    color: #e11e40;
    font-size: 14px;
}
.Country{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    color: #6e6b7b;
    font-size: 14px;

}
.Likelihood{
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    color: #6e6b7b;
    font-size: 14px;
    height:100%;

}
.Intensity{
    display: flex;
    width: 160px;
    justify-content: center;
    align-items: center;
    color: #6e6b7b;
    font-size: 14px;
   // height:100%;
}
.Relevance{
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    color: #6e6b7b;
    font-size: 14px;
    height:100%;

}
.Year{
    display: flex;
    justify-content: center;
    width: 100px;
    background-color: rgba(40,199,111,.12);
    border-radius: 10px;
    color: #28c76f;
    font-size: 14px;

}

`