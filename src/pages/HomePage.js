import React, {Component} from 'react';
import '../components/css/loginWindow.css'

import Header from '../components/HeaderHome';
import Footer from '../components/FooterHome';
import MapComponent from '../components/MapComponent';
import LoginWindow from '../components/LoginWindow';

class HomePage extends Component{


render(){
    return(
        <div className='HomePage'>
            <Header/>
            <div className='container'>
            <MapComponent className='mc'/>
            <LoginWindow className='lw'/>
            </div>
            <Footer/>
        </div>
    )
}

}
export default HomePage;