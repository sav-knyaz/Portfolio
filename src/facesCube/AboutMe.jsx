import React, {useState} from 'react'
import { useRef } from 'react'
import Modal from '../components/Modal'
import Square from '../components/Square'
import MyPhoto from '../img/photo-about-me.jpg'
import '../style/Cub.css'



function AboutMe(props){
    const img = useRef(null)
    const [openModal, setOpenModal] = useState('close')

    return(
        <Square side={'right'} thems={props.thems}>
            <h2>Обо мне</h2>
            <p><img src={MyPhoto} className='right__image'
                      onPointerUp={()=>{ setOpenModal('open')
                      document.body.querySelector('.side__about-me').classList.toggle('close');}} 
                    ref={img}/>
                Мне 21 год, веду активный образ жизни, мой день начинается с просмотра таск-менеджера,
               куда я с вечера записываю задачи на завтрашний день. Считаю тайм менеджемент 
               очень важной штукой, благодаря которой человек эффективней и быстрей добьется 
               нужных результатов, сэкономив невозвратимый и бесценный ресурс, который с каждой секундой
               только уходит. <br/>
               Веб-разработкой занимаюсь около полутора лет, началось все с изучение HTML 
               (как и у 90% фронтов :)) на парах по прикладной информатике и к чему я пришел
               за эти полтора года, читайте на следующей стороне куба)
            </p>
            {openModal === 'open' &&
             <Modal title={'Я'} image={MyPhoto} styleImage={{margin: '0 30%'}}
              nameClass={'side__about-me'}/>}
        </Square>
    )
}

export default AboutMe