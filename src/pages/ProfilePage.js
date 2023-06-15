import React from 'react';

import Header from '../components/Header';
import Footer from '../components/FooterHome';
import MapComponent from '../components/MapComponent';
import Profile from '../components/Profile';
import { Component } from 'react';

class ProfilePage extends Component {

render(){
    return(
        <div>
            <Header/>
            <div className='container'>
            <MapComponent/>
            <Profile/>
            </div>
            <Footer/>
        </div>
    )
}

}
export default ProfilePage;