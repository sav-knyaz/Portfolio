import React, {Fragment, useState} from 'react'
import Square from '../components/Square'
import ShopCatalog from '../img/shop-catalog.png'
import ShopRoom from '../img/shop-room.png'
import ShopFilter from '../img/shop-filter.png'
import ShopSearch from '../img/shop-search.png'
import '../style/ContentSides.css'
import '../style/Cub.css'
import Modal from '../components/Modal'
import { TheFurniture_problem, TheFurniture_further } from '../MessegConst'

function MyProjectFirst(props){
    
    const [defaultStyle, setDefaultStyle] = useState({
        width: '30px',
        borderRadius: '3px',
        marginLeft: '5px'
    })
    const [openModal, setOpenModal] = useState(null)

    return(
        <Square side={'left'} thems={props.thems}>
        <h2>мои проекты</h2>
            <h5>TheFurniture</h5>
            <div>
                <img src={ShopCatalog} style={defaultStyle} 
                    onPointerUp={()=> {setOpenModal('img')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}}/>
                <img src={ShopRoom} style={defaultStyle} 
                    onPointerUp={()=> {setOpenModal('img')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}}/>
                <img src={ShopFilter} style={defaultStyle}
                    onPointerUp={()=> {setOpenModal('img')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}} />
                <img src={ShopSearch} style={defaultStyle} 
                    onPointerUp={()=> {setOpenModal('img')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}}/>
            </div>
            <p>Целью этого проекта было получение опыта fullstack разработки, чтобы лучше понять устройство
               всего веб-приложения, столкнуться с новыми проблемами и их решениями.
                Благодаря этому опыту смог лучше разобраться в 
                взаимодействие сервера с БД, собственно написание БД с помощью ORM системы Sequelize,
               авторизация по jwt токену, роутинг в реакт и др. Стек технологий, которые я использовал:<br/>
               <span>PostgreSQL, Express, Node.js и React.js</span><br/>
                <button onPointerUp={()=> {setOpenModal('problem')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}}
                    className='link-modal' 
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Проблемы с которыми столкнулся,</button> 
                <button onPointerUp={()=> {setOpenModal('further')
                    document.body.querySelector('.theFurniture-modal').classList.toggle('close');}}
                    className='link-modal'
                    style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                        Дальнейшее развитие</button>
                <a href='https://github.com/sav-knyaz/fullStack-TheFurniture'
                   className='link-project link-modal'
                   style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)'}}>
                    Ссылка на репозиторий проекта</a>
                
            </p>
            { openModal === 'problem' &&
            <Modal  messeg={TheFurniture_problem} title={'Проблемы'} nameClass={'theFurniture-modal'}/> }
            { openModal === 'further' &&
            <Modal  messeg={TheFurniture_further} title={'Будущее'}  nameClass={'theFurniture-modal'}/> 
            }
            { openModal === 'img' &&
            <Modal image={[ShopCatalog, ShopFilter, ShopRoom, ShopSearch]} nameClass={'theFurniture-modal'}/>}
        </Square>
    )
}

export default MyProjectFirst
