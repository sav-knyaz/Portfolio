import React from 'react'
import '../style/SocialNetwork.css'
import darkVK from '../img/dark-vk.png'
import lightVK from '../img/light-vk.png'
import darkTelegram from '../img/dark-telegram.png'
import lightTelegram from '../img/light-telegram.png'
import darkGithub from '../img/dark-github.png'
import lightGithub from '../img/light-github.png'
import { useState } from 'react'






function SocialNetwork(props){
    const socialsNetworks = props.thems === 'light' ?
                                [{img: darkVK, descript: 'ВКонтакте', link: 'https://vk.com/savknyaz'},
                                 {img: darkTelegram, descript: 'Телеграм', link: 'https://t.me/maks343'},
                                 {img: darkGithub, descript: 'GitHub', link: 'https://github.com/sav-knyaz'}]
                                 :
                                [{img: lightVK, descript: 'ВКонтакте', link: 'https://vk.com/savknyaz'},
                                 {img: lightTelegram, descript: 'Телеграм', link: 'https://t.me/maks343'},
                                 {img: lightGithub, descript: 'GitHub', link: 'https://github.com/sav-knyaz'}];

    const [showSocialNetwork, setShowSocilaNetwork] = useState(socialsNetworks[0]);

    setTimeout(()=>{
        switch (showSocialNetwork.descript) {
            case socialsNetworks[0].descript:
                setShowSocilaNetwork(socialsNetworks[1])
                break;
            case socialsNetworks[1].descript:
                setShowSocilaNetwork(socialsNetworks[2])
                break;
            case socialsNetworks[2].descript:
                setShowSocilaNetwork(socialsNetworks[0])
                break;
            default:
                break;
        }
    }, 4000)
    function redirect(link){
        console.log(link)
        window.location = link
    }
//backgroundColor: props.thems === 'light' ? 'rgb(252, 245, 236)' : 'rgba(240, 233, 224)',
    return(
        <div className='social-network-wrapper' onPointerUp={()=> redirect(showSocialNetwork.link)}>
            <img src={showSocialNetwork.img} />
            <span>{showSocialNetwork.descript}</span>
        </div>
    )
}

export default SocialNetwork