import React from 'react'
import '../style/SelectorThems.css'

function SelectorThems(){
    const thems = ['light', 'dark', 'impromptu']

    function showThems(){
        return thems.map(item => <div className={'selector-thems__container ' + item}>
                         <div className='cub-color'>
                         </div>
                    </div>)
    }

    return(
        <div className='selector-thems'>
            {
                showThems()
            }
        </div>
    )
}

export default SelectorThems