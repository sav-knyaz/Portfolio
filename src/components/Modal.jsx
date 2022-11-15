import  React, { useRef, useState } from "react";
import  ReactDOM from 'react-dom';
import '../style/Modal.css'

function Modal({ messeg, title, image, nameClass}){
    const modal = useRef(null)
    const [indexImage, setIndexImage] = useState(0)
    if(Array.isArray(image)){

    }
 console.log(messeg)
   // if(!isOpen) return null

    return ReactDOM.createPortal(
        <div className={"wrapper-modal " + nameClass } 
             ref={modal}>
          <div className="body-modal">
            <span onPointerUp={()=> modal.current.classList.toggle('close')}>╳</span>
            <h5>{title}</h5>
            {image === undefined ?
            <p>{messeg}</p>
            :
            Array.isArray(image) ?
            <div className="body-modal__image-selector">
                {indexImage > 0 &&
                <div className="btn-arrow-selector "
                     onPointerUp={()=> setIndexImage(indexImage - 1)}
                     style={{left: '1vw', transform: 'rotate(-45deg)'}}></div>}

                 <img src={image[indexImage]} />
                 
                {indexImage < image.length - 1 &&
                 <div className="btn-arrow-selector"
                      onPointerUp={()=> setIndexImage(indexImage + 1)}
                      style={{right: '1vw', transform: 'rotate(135deg)'}}></div>}
            </div>
            :
            <img src={image} />}
          </div>
        </div>
    , document.body)
}

export default Modal