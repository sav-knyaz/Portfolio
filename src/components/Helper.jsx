import React, {useState} from 'react'
import '../style/Helper.css'

function Helper(props){
    
    const [helper, setHelper] = useState(props.helpers[0])
    const [open, setOpen] = useState(true)

    setTimeout(()=>{
        switch (helper.title) {
          case props.helpers[0].title:
                setHelper(props.helpers[1])
            break;
          case props.helpers[1].title:
              setHelper(props.helpers[2])
            break;
          case props.helpers[2].title:
                setHelper(props.helpers[3])
            break;
          case props.helpers[3].title:
                setHelper(props.helpers[4])
            break;
          case props.helpers[4].title:
                setHelper(props.helpers[5])
            break;
          case props.helpers[5].title:
                setHelper(props.helpers[0])
            break;

          default:
            break;
        }
      }, 4000)


    return(
        <div className='helper-wrapper' style={{color: props.thems === 'light' ? 'rgba(240, 233, 224)': 'rgb(24, 24, 23)'}}>
            <div className='helper__block-close'>
                <div style={{borderBottom: props.thems === 'light' ? '2px solid rgb(24, 24, 23)':
                             '2px solid rgba(240, 233, 224)',
                             borderLeft: props.thems === 'light' ? '2px solid rgb(24, 24, 23)':
                             '2px solid rgba(240, 233, 224)',
                             transform: open ? 'rotate(-45deg)':'rotate(135deg)',
                             top: open ? '0.1vh':'1.5vh'}}
                     onPointerUp={()=> setOpen(!open)}>
                </div>
                <p style={{color: props.thems === 'light' ? 'rgb(24, 24, 23)':'rgba(240, 233, 224)'}}>
                    подсказки
                </p>
            </div>
        <div className='helper-body'
            style={{backgroundColor:  props.thems === 'light' ? 'rgb(24, 24, 23)' : 'rgba(240, 233, 224)',
                    padding: open ? '1vh 1vw':'0',
                    height: open ? 'auto': '0px'}}>
            <h6>{helper.title}</h6>
            <p>{helper.messeg}</p>
        </div>
        </div>
    )
}

export default Helper