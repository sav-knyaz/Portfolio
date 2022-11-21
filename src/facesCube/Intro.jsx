import React, {Fragment, useState} from 'react'
import { useRef } from 'react'
import Modal from '../components/Modal'
import Square from '../components/Square'
import MyPhoto from '../img/my-photo.jpg'
import '../style/Cub.css'


function Intro(props){
   
    const img = useRef(null)
    const [openModal, setOpenModal] = useState('close')
    
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
            <img src={MyPhoto} className={'front__image'} onPointerUp={()=> { setOpenModal('open')
                    document.body.querySelector('.side__intro').classList.toggle('close');}} 
                    ref={img}/>
            </div>
            {openModal === 'open' &&
             <Modal title={'На фото запечатлен процес создания этого сайта :)'}
                     image={MyPhoto} nameClass={'side__intro'} styleImage={{margin: '0 30%'}}/>}
        </Square> 
    )
}

export default Intro