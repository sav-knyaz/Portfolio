import React, {useState} from 'react'
import { useRef } from 'react'
import Image from '../components/Image'
import Square from '../components/Square'
import MyPhoto from '../img/my-photo.jpg'
import '../style/Cub.css'

function Intro(props){
   
    const img = useRef(null)
    
    return(
        <Square side={'front'} thems={props.thems}>
            <span>
                Привет! 
            </span>
            <h1>
                Я, Кирилл Савенков-Князев, и это мой сайт-портфолио!
            </h1>
            <div>
            <span> На фото справа как раз запечатлен процес создания этого сайта :)
                    <br/>
                    <br/>
                   На гранях этого куба я расскажу про себя, свой стек и мои проекты.</span>
            <img src={MyPhoto} className={'front__image'} onPointerUp={()=> img.current.classList.toggle('biggest')}
                    onPointerDown={()=> img.current.classList.toggle('biggest')} 
                    ref={img}/>
            </div>
        </Square> 
    )
}

export default Intro