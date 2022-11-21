import React, {useState} from 'react'
import Square from '../components/Square'
import GTAfirst from '../img/gta-first.png'
import GTAsecond from '../img/gta-second.png'
import GTAdrive from '../img/gta-drive.png'
import Alya from '../img/alya.png'
import { GtaHud_problem, GtaHud_working_process, Lending_problem, Lending_work_process } from '../MessegConst'
import '../style/Cub.css'
import Modal from '../components/Modal'



function LinksToProjects(props){
    const [defaultStyle, setDefaultStyle] = useState({
        width: '4vw',
        borderRadius: '3px',
        marginLeft: '5px'
    })
    const [openModal, setOpenModal] = useState(null)

    return(
        <Square side={'top'} thems={props.thems}>
        
        <div className='hud-GTA'>
        <h5>Hud длы GTA</h5>
        <div >
            <img src={GTAfirst} style={defaultStyle} 
                 onPointerUp={()=> {setOpenModal('GTA-image')
                    document.body.querySelector('.gta-modal').classList.toggle('close');}}
                    className='link-modal'/>
            <img src={GTAsecond} style={defaultStyle} 
                 onPointerUp={()=> {setOpenModal('GTA-image')
                    document.body.querySelector('.gta-modal').classList.toggle('close');}}
                    className='link-modal'/>
            <img src={GTAdrive} style={defaultStyle}
                 onPointerUp={()=> {setOpenModal('GTA-image')
                    document.body.querySelector('.gta-modal').classList.toggle('close');}}
                    className='link-modal'/>
        </div>
        <p>Это коммерчиский проект и предназначается для RP GTA online.
           Моя задача состояла в том, чтобы написать интерфейс и интегрировать его в React приложение. 
           Как вы уже могли догадаться hud я писал на реакте, но с условием, что будут использоваться
            классовые компоненты, тк весь проект написан на классах.
        </p>
        <button onPointerUp={()=> {setOpenModal('GTA-problem')
                    document.body.querySelector('.gta-modal').classList.toggle('close');}}
                    className='link-modal' 
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Проблемы с которыми столкнулся, </button> 
        <button onPointerUp={()=> {setOpenModal('GTA-working-process')
                    document.body.querySelector('.gta-modal').classList.toggle('close');}}
                    className='link-modal'
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                        Рабочий процесс.</button>
        {openModal === 'GTA-problem' &&
         <Modal messeg={GtaHud_problem} title={'Проблемы'} nameClass={'gta-modal'}/>}
        {openModal === 'GTA-working-process' &&
         <Modal messeg={GtaHud_working_process} title={'Рабочий процесс'} nameClass={'gta-modal'}/>}
         {openModal === 'GTA-image' &&
         <Modal image={[GTAfirst, GTAsecond, GTAdrive]} title={'Hud для GTA'} nameClass={'gta-modal'}/>}
        </div>
        <div>
            <h5>Лендинг для дизайнера</h5>
            <div>
             <img src={Alya} style={defaultStyle} onPointerUp={()=> {setOpenModal('lending-img')
                    document.body.querySelector('.lending-modal').classList.toggle('close');}}
                    className='link-modal' />
            </div>
            <p>
                Это тоже коммерчиский проект. Писал его для дизайнера, это одна из моих
                ранних работ и стек здесь соответсвующий: 
                <span>HTML, CSS, JavaScript</span>
            </p>
            <button onPointerUp={()=> {setOpenModal('lending-problem')
                    document.body.querySelector('.lending-modal').classList.toggle('close');}}
                    className='link-modal' 
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Проблемы с которыми столкнулся, </button> 
            <button onPointerUp={()=> {setOpenModal('lending-work-process')
                    document.body.querySelector('.lending-modal').classList.toggle('close');}}
                    className='link-modal'
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                        Рабочий процесс.</button>
            <a href='https://sav-knyaz.github.io/alena.githab.io/Alena/index.html'
               className='link-project link-modal'
               style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий проекта</a>
        {openModal === 'lending-problem' &&
         <Modal messeg={Lending_problem} title={'Проблемы'} nameClass={'lending-modal'}/>}
        {openModal === 'lending-work-process' &&
         <Modal messeg={Lending_work_process} title={'Рабочий процесс'} nameClass={'lending-modal'}/>}
        {openModal === 'lending-img' &&
         <Modal image={Alya} title='Лендинг для дизайнера' nameClass={'lending-modal'}/>}
        </div>
        </Square>
    )
}
//
export default LinksToProjects