import { connect } from "react-redux";
import React from "react";
import './Header.css';
import img1 from '../img/search (4) 1.png';
import img2 from '../img/bell 1.png';
import img3 from '../img/eye 1.png'
import img4 from '../img/раскрыть.png';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage
    }
};

class headerComponent extends React.Component {
    render() {
        return(
            <div className= 'header'>
                <div className= "header_1">Мой профиль</div>
                <div className= "header_2">
                    <img src= {img1} className= 'header_3'/>
                    <img src= {img2} className= 'header_3'/>
                    <img src= {img3} className= 'header_3'/>
                    <img src={`${this.props.profile.image}`} alt= 'img' className= 'avatar'/>
                    <img src= {img4} className= 'header_3'/>
                </div>
            </div>
        )
    }
}


let HeaderContainer = connect(mapStateToProps)(headerComponent);

export default HeaderContainer;