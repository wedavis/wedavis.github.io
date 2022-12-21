import React from 'react';
import styled from 'styled-components'
import './Projects.css'
import {TimeAndWeather} from '@styled-icons/fluentui-system-filled/TimeAndWeather'
import { Link } from 'react-router-dom';

const TimeAndWeatherIcon = styled(TimeAndWeather)`
width: 24px;
height: 24px;
padding: 5px 5px;`

const Button = styled.button`
display: flex;
font-size: 0.6em;
margin: 0 5px;
border-radius: 7px;
align-items: center;
background: lightgrey;
`



function Projects() {
    return(
    <div className="Projects">
     <h1 className="initial-header">William Davis</h1>
      <header className="Home-header"> 
        <Link to="/weather" style = {{textDecoration: 'none'}} target="_blank">
          <Button>
            <TimeAndWeatherIcon viewBox="0 0 25 25"/>
            <h1 className="button-header">Daily Weather</h1>
          </Button>
        </Link>
      </header>
    </div>
  )
}
export default Projects;