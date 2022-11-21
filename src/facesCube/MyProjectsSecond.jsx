import React, {useState} from 'react'
import Modal from '../components/Modal'
import Square from '../components/Square'
import Weather from '../img/weather.png'
import ToDoList from '../img/to-do.png'
import Form from '../img/form.png'
import Taplink from '../img/taplink-modal.png'
import { Weather_about, ToDoList_about, Form_about, Taplink_about } from '../MessegConst'
import '../style/Cub.css'


function MyProjectsSecond(props){
    const [defaultStyle, setDefaultStyle] = useState({
        width: '2vw',
        borderRadius: '3px',
        marginLeft: '5px'
    })
    const [openModal, setOpenModal] = useState(null)

    return(
        <Square side={'bottom'} thems={props.thems}>
        <div className='weather-wrapper'>
            <h5>Weather</h5>
            <img src={Weather} style={props.defaultStyle} onPointerUp={()=> {setOpenModal('img weather')
                    document.body.querySelector('.weather').classList.toggle('close');}}/>
            <a href='https://weather-pr.vercel.app/'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на проект</a>
            <a href='https://github.com/sav-knyaz/weather'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий</a>
            <button onPointerUp={()=> {setOpenModal('about weather')
                document.body.querySelector('.weather').classList.toggle('close');}}
                className='link-modal'
                style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                о проекте</button>
            {openModal === 'about weather' &&
             <Modal messeg={Weather_about} title={'О проекте'} nameClass='weather'/>}
            {openModal === 'img weather' &&
             <Modal image={Weather} title='Weather' nameClass='weather'/>}
        </div>

        <div>
            <h5>TO DO LIST</h5>
            <img src={ToDoList} style={props.defaultStyle} onPointerUp={()=> {setOpenModal('img to-do')
                    document.body.querySelector('.to-do').classList.toggle('close');}}/>
            <a href='https://sav-knyaz.github.io/to-do-list/'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на проект</a>
            <a href='#'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий</a>
            <button onPointerUp={()=> {setOpenModal('about to-do')
                document.body.querySelector('.to-do').classList.toggle('close');}}
                className='link-modal'
                style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                о проекте</button>
            {openModal === 'about to-do' &&
             <Modal messeg={ToDoList_about} title={'О проекте'} nameClass='to-do'/>}
            {openModal === 'img to-do' &&
             <Modal image={ToDoList} title='TO DO LIST' nameClass='to-do'/>}
        </div>
        <div>
            <h5>Form</h5>
            <img src={Form} style={props.defaultStyle} onPointerUp={()=> {setOpenModal('img form')
                    document.body.querySelector('.form').classList.toggle('close');}}/>
            <a href='https://sav-knyaz.github.io/to-do-list/'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на проект</a>
            <a href='https://github.com/sav-knyaz/Form'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий</a>
            <button onPointerUp={()=> {setOpenModal('about form')
                document.body.querySelector('.form').classList.toggle('close');}}
                className='link-modal'
                style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                о проекте</button>
            {openModal === 'about form' &&
             <Modal messeg={Form_about} title={'О проекте'} nameClass='form'/>}
            {openModal === 'img form' &&
             <Modal image={Form} title='Form' nameClass='form'/>}
        </div>
        <div>
            <h5>Taplink</h5>
            <img src={Taplink} style={props.defaultStyle} onPointerUp={()=> {setOpenModal('img taplink')
                    document.body.querySelector('.taplink').classList.toggle('close');}}/>
            <a href='https://sav-knyaz.github.io/sav-knyaz.githab.io/'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на проект</a>
            <a href='https://github.com/sav-knyaz/sav-knyaz.githab.io'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий</a>
            <button onPointerUp={()=> {setOpenModal('about taplink')
                document.body.querySelector('.taplink').classList.toggle('close');}}
                className='link-modal'
                style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                о проекте</button>
            {openModal === 'about taplnik' &&
             <Modal messeg={Taplink_about} title={'О проекте'} nameClass='taplink'/>}
            {openModal === 'img taplink' &&
             <Modal image={Taplink} title='Taplink' nameClass='taplink'/>}
        </div>
        </Square>
    )
}
//https://weather-pr.vercel.app/
export default MyProjectsSecond