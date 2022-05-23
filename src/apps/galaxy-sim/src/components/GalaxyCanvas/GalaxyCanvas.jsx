import React, { useRef, useEffect } from 'react'
import {render} from './GalaxyCanvas.helper'
import { Button } from 'react-bootstrap'
import './GalaxyCanvas.css'

const GalaxyCanvas = props => {
  
  const canvasRef = useRef(null)
  
  return <>
    <Button className={'button'} onClick={render}>Try it</Button>
    <canvas id={'canvasRef'} width="1500" height="3000"/>
  </>
}  

export default GalaxyCanvas