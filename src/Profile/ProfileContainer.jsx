import { connect } from "react-redux";
import React, { useState } from 'react';
import Records from "./Records";
import './Profile.css';
import vec2 from '../img/Vector2.png'
import vec3 from '../img/Vector3.png';
import vec4 from '../img/Vector4.png';
import CalendarComponent from "./Calendar";
import { del } from "../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        records: state.profilePage.records
    }
};


function ProfileComponent (props) {


    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };
    let className = isActive ? 'cards hidden' : 'cards';
    let className2 = isActive ? 'open' : '';
    let string = isActive ? 'Мои записи' : 'Подробнее';
    let className3 = isActive ? 'profile_1 hidden' : 'profile_1';
    let className4 = isActive ? 'more up' : 'more';
    let className5 = isActive ? 'profile_1 two hidden' : 'profile_1 two';
    let className6 = isActive ? 'cal' : 'hidden';
    let dates = [];
    let number = props.records.length;
    let className7 = number >  2 & !isActive ? '' : 'hidden';
    props.records.map(item => dates.push(item['day'].slice(0, 5) + ".20" + item['day'].slice(5)));
    dates = dates.map(date => date.slice(0, 8) + date.slice(9));
    dates = dates.map(date => new Date(date.replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")))
    return(
            <div className= 'profile'>
                <div className={className3}>Записи на прием</div>
                <div className= {className2}>
                <Records records= {props.records} className= {className2} del= {props.del}/>
                </div>
                <div className={className7}>
                    <p className='number'>Еще {number -2} записи</p>
                </div>
                <a href="#" onClick={toggleClass} className={className4}>{string}</a>
                <div className={className5}>Электронная карта</div>
                <div className={className}>
                    <div className='card'>
                        <div className= 'card1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="none" viewBox="0 0 40 50">
                            <path fill="#fff" stroke="#50CAFF" stroke-width=".5" d="M18.384 32.617v-.25H13.25a1.703 1.703 0 010-3.406h5.133v-5.133a1.703 1.703 0 013.406 0v5.133h5.133a1.703 1.703 0 110 3.406H21.79V37.5a1.703 1.703 0 11-3.406 0v-4.883zM25.848 8.54h-.25V9.766a5.616 5.616 0 01-5.61 5.609 5.616 5.616 0 01-5.608-5.61V8.54H7.988a4.16 4.16 0 00-4.156 4.156v29.492a4.16 4.16 0 004.156 4.157h24.013a4.16 4.16 0 004.156-4.157 1.703 1.703 0 013.406 0c0 4.17-3.393 7.563-7.562 7.563H7.988c-4.17 0-7.562-3.393-7.562-7.563V12.695c0-4.17 3.392-7.562 7.562-7.562h6.392v-3.18c0-.94.762-1.703 1.703-1.703h7.813c.94 0 1.703.762 1.703 1.703v3.18H32c4.17 0 7.563 3.392 7.563 7.562V32.52a1.703 1.703 0 01-3.407 0V12.695A4.16 4.16 0 0032 8.54h-6.153zm-3.656-4.633v-.25H17.786v6.11c0 1.215.988 2.203 2.203 2.203a2.205 2.205 0 002.203-2.203v-5.86z"/>
                            </svg>

                        </div>
                        <div className='card2'>
                            <p>Информация о пациенте</p>
                            <hr />
                            <ul className='card3'>
                                <li>Ваши личные данные</li>
                                <li>Рекомендации врачей</li>
                                <li>История болезней</li>
                            </ul>
                        </div>
                    </div>

                    <div className='card'>
                        <div className= 'card1'>
                        <img src={vec2} alt="img" />
                        </div>
                        <div className='card2'>
                            <p>Результаты анализов</p>
                            <hr />
                            <div className='card3'>
                            Вы можете узнать здесь результаты своих анализов
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className= 'card1'>
                        <img src={vec3} alt="img" />
                        </div>
                        <div className='card2'>
                            <p>Добавить  информацию</p>
                            <hr />
                            <div className='card3'>
                            Добавляйте в свою электронную медицинскую карту новые данные
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className= 'card1'>
                        <img src={vec4} alt="img" />
                        </div>
                        <div className='card2'>
                            <p>История приемов</p>
                            <hr />
                            <div className='card3'>
                            Вся информация о полученных услугах за все время хранится здесь
                            </div>
                        </div>
                    </div>

                    
        
                </div>
                <div className={className6}>
                <CalendarComponent dates= {dates}/>
                </div>
            </div>
        )
}


let ProfileContainer = connect(mapStateToProps, {del})(ProfileComponent);

export default ProfileContainer;