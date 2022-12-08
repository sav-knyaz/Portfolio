import { useRef } from 'react';
import { useState } from 'react';
import Helper from './components/Helper';
import SocialNetwork from './components/SocialNetwork';
import AboutMe from './facesCube/AboutMe';
import Intro from './facesCube/Intro.jsx';
import MyProjectThird from './facesCube/MyProjectThird';
import MyProjectFirst from './facesCube/MyProjectsFirst';
import MyProjectsSecond from './facesCube/MyProjectsSecond';
import MyStack from './facesCube/MyStack';
import './style/App.css';
import './style/Cub.css';
import './style/SelectorThems.css'



function App() {
  const helpers = [{title: 'вращение куба', messeg: 'Используйте стрелки на клавиатуре, чтобы вращать куб или движением пальца по экрану если дисплей сенсорный.'},
                   {title: 'фотографии автора', messeg: 'Нажмите и удерживайте фотографию, чтобы она оставалась большой.'},
                   {title: 'изменение темы', messeg: 'Чтобы изменить тему страницы, воспользуйтесь селектором в левом нижнем углу.'},
                   {title: 'навигация по граням куба', messeg: 'В правом верхнем углу страницы находиться кнопка меню для навигации по кубу.'},
                   {title: 'ссылки на соцсети автора', messeg: 'В левом верхнем углу выводятся ссылки на соцсети автора сайта.'},
                   {title: 'скриншоты проектов', messeg: 'Нажмите на изображения под названием проекта и сможете его увидеть в большем размере.'}]
  const [defaultStyle, setDefaultStyle] = useState({
                                                width: window.screen.width > 600 ? '2.5vw' : '6vw',
                                                borderRadius: '3px',
                                                marginLeft: '5px'
                                            })
  const [openBurger, setOpenBurger] = useState(false)
  const [thems, setThems] = useState('light')
  const [coordinatX, setCoordinatX] = useState(0)
  const [coordinatY, setCoordinatY] = useState(0)
  //const [cashX, setCashX] = useState(0)
  //const [cashY, setCashY] = useState(0)
  const cub = useRef(null)
  const arrayThems = ['light', 'dark']
  let coordCubX = 0
  let coordCubY = 0
  let Sx = 0
  let Sy = 0 // S это путь пройденный курсором, те (текущая координата курсора y) - cashY  = S 
  let cashX = 0 
  let cashY = 0 // Это первая координата полученная от тач события 

  if(thems === 'light'){
    document.body.style.backgroundColor = 'rgb(252, 245, 236)'
    document.body.style.color = 'rgb(24, 24, 23)'
  } else {
    document.body.style.backgroundColor = 'rgb(24, 24, 23)'
    document.body.style.color = 'rgba(240, 233, 224)'
  }
    function showThems(){
        return arrayThems.map(item => <div className={'selector-thems__container ' + item}
                               onPointerUp={()=> item === 'light' ? setThems('light') : setThems('dark')}
                               style={item === 'light' ? {border: thems === 'light' ? '3px solid rgb(24, 24, 23)' : 'none'}
                                      : {border: '3px solid rgb(252, 245, 236, 1)'}}
                                key={item}>
                    </div>)
    }

   document.onkeydown = (e)=>{
        if(e.keyCode == 37){ setCoordinatY(coordinatY - 4)}
   else if(e.keyCode == 38){ setCoordinatX(coordinatX + 4)}
   else if(e.keyCode == 39){ setCoordinatY(coordinatY + 4)}
   else if(e.keyCode == 40){ setCoordinatX(coordinatX - 4)}
   }

   let stack = []

      document.ontouchstart = (e)=>{
       cashX = e.touches[0].clientX
       cashY = e.touches[0].clientY
       console.log(-10 + -100)
      }

   document.ontouchmove = (e)=>{
    Sx = - cashX + e.touches[0].clientX
    Sy = - cashY + e.touches[0].clientY
    

    coordCubX += Sx
    coordCubY += -Sy
    
    cub.current.style.transform = `rotateX(${coordCubY/2}deg ) rotateY(${coordCubX/2}deg )`

    cashX = e.touches[0].clientX
    cashY = e.touches[0].clientY

  }

  return (
    <div className="App"  >

      <SocialNetwork thems={thems}/>

      <nav className='block-navigation' onPointerUp={()=> setOpenBurger(!openBurger)}>
        <div className={thems === 'light' ?
                           openBurger ? 'btn-burger close light' : 'btn-burger light'
                          :
                           openBurger ? 'btn-burger close' : 'btn-burger'}>
          <div></div>
        </div>
        <ul className={openBurger ? 'list-sides-cube open' : 'list-sides-cube'}
            style={{color: thems === 'light' ? 'rgb(24, 24, 23)':'rgba(240, 233, 224)'}}>
          <li onPointerUp={()=>{setCoordinatX(-4); setCoordinatY(0)}}>Вводная часть</li>
          <li onPointerUp={()=>{setCoordinatX(-4); setCoordinatY(-88)}}>Обо мне</li>
          <li onPointerUp={()=>{setCoordinatX(-4); setCoordinatY(-180)}}>Мой стек</li>
          <li onPointerUp={()=>{setCoordinatX(-4); setCoordinatY(88)}}>Мои прокты 1</li>
          <li onPointerUp={()=>{setCoordinatX(88); setCoordinatY(0)}}>Мои прокты 2</li>
          <li onPointerUp={()=>{setCoordinatX(-92); setCoordinatY(0)}}>Мои проекты 3</li>
        </ul>
      </nav>

      <div className='container'>
        <div className='cub' ref={cub} style={{transform: `rotateX(${coordinatX}deg ) rotateY(${coordinatY}deg )`}}>
          <Intro thems={thems}/>
          <AboutMe thems={thems}/>
          <MyStack thems={thems}/>
          <MyProjectFirst thems={thems} defaultStyle={defaultStyle}/>
          <MyProjectsSecond thems={thems} defaultStyle={defaultStyle}/>
          <MyProjectThird thems={thems} defaultStyle={defaultStyle}/>
        </div>
      </div>
      <div className='selector-thems'>
            {
                showThems()
            }
        </div>
          <Helper helpers={helpers} thems={thems}/>
    </div>
  );
}

export default App;