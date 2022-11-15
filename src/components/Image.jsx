import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react';
import '../style/ContentSides.css'

function Image(props){
    const [styleImage, setStyleImage] = useState(props.defaultStyle)


    return(
        <img src={props.image} style={props.biggestStyle} className={props.class}
             onPointerMove={()=> setStyleImage(props.biggestStyle)} 
             onPointerOut={()=> setStyleImage(props.defaultStyle)}/>
    )
}

export default Image