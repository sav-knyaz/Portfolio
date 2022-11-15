import React from 'react'
import { Fragment } from 'react';
import '../style/Cub.css'
import '../style/ContentSides.css'

function Square(props){

    return(
        <Fragment>
        {
        <div className={'side ' + props.side} 
        style={{border: props.thems === 'light' ? '5px solid rgb(24, 24, 23)' : '5px solid rgba(240, 233, 224, 0.8)',
                background: props.thems === 'light' ? 'rgb(252, 245, 236, 0.96)' : 'rgb(24, 24, 23, 0.98)',
                color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
            {props.children}
        </div>}
        </Fragment>
    )
}

export default Square