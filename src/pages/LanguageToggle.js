import React from "react";
import style from '../styles/langToggle.module.scss';
import 'flag-icon-css/css/flag-icons.min.css'
import i18n from "i18next";
import {useTranslation} from "react-i18next";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const languages=[
    {
        code:'fr',
        name:'Français',
        country_code: 'fr'
    },
    {
        code:'en',
        name:'English',
        country_code: 'gb'
    },
    {
        code:'es',
        name:'Español',
        country_code: 'es'
    }
]

export default function LanguageToggle(){
    const {t} = useTranslation()
    const currentLanguageCode = localStorage.getItem('i18nextLng');
    const currentLanguage = languages.find(l => l.code === currentLanguageCode);
    return(
            <div className={style.langToggle} >
                <ul>
                    {languages.map(({code,name,country_code})=>(
                        <li key={country_code}>
                            <button
                                className='dropdown-item'
                                onClick={() => i18n.changeLanguage(code)}
                                disabled={code === currentLanguageCode}
                                // style={{backgroundColor: code === currentLanguageCode ? 'white' : 'silver'}}
                            >
                                <i className={`flag-icon flag-icon-${country_code}`}
                                style={{opacity: code === currentLanguageCode ? 1 : .5}}>
                                </i>
                                {/*<span>{name}</span>*/}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
    )
}


//as a dropdown-menu:
// <div className='dropdown'>
//     {/*<div className={style.langToggle} >*/}
//     {/*<ul>*/}
//     <button
//         className='btn btn-secondary dropdown-toggle'
//         type='button'
//         id='dropdownMenuButton1'
//         data-bs-toggle='dropdown'
//         aria-expanded='false'
//     >
//         {/*{t('navbar-lang')}*/}
//         <FontAwesomeIcon icon={solid('language')}/>
//     </button>
//     <ul className='dropdown-menu'
//         aria-labelledby='dropdownMenuButton1'>
//         {languages.map(({code,name,country_code})=>(
//             <li key={country_code}>
//                 <button
//                     className='dropdown-item'
//                     onClick={() => i18n.changeLanguage(code)}
//                     disabled={code === currentLanguageCode}
//                 >
//                     <i className={`flag-icon flag-icon-${country_code}`}></i>
//                     {/*<span>{name}</span>*/}
//                 </button>
//             </li>
//         ))}
//     </ul>
//     {/*</ul>*/}
//     {/*</div>*/}
// </div>
