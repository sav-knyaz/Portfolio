import React from 'react'
import Square from '../components/Square'
import '../style/Cub.css'


function MyStack(props){

    return(
        <Square side={'back'} thems={props.thems}>
        <h2>мой стек</h2>
        <p>Себя позиционирую как разработчик клиентской части веб-приложений (front-end),
            поэтому, конечо в мой стек входит: 
        </p>
        <p className='back__stack-names'>
           <span> HTML, CSS, JavaScript, React, Redux </span>
            и не совсем "фронтовские" <span>PostgreSQL, Node.js, Express</span>
        </p>
        <p>Хочу не много рассказать о том, как начинал изучать JS и почему выбор пал на React.</p>
        <p>Начиная изучать JS, 
           я решил сэкономить время и прошел курс по JS "для начинающих", от того самого
           альмоматра для вайтишников "learnJS". <br/>
           Тк разработка UI на основе отдельных компонентов — это будущее web-разработки, 
           плюс фреймворки и библиотеки экономят время при разработке, я принял решение это дело изучить,
           но как и любой другой начинающий front-end developer, встал перед выбором, что изучать первым.
           Написал один проект на Vue, другой на React и душа откликнулось в сторону библиотеке React, в добавок, 
           на мой взгляд, UI код в React читабельней и проще в сопровождении.</p>
        </Square>
    )
}

export default MyStack
