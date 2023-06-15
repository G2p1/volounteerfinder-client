import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/FooterHome';
import MapComponent from '../components/MapComponentDashboard';

class HomePage extends Component{



render(){
    return(
        <div className='HomePage'>
            <Header/>
            <div className='container'>
            <MapComponent className='mc'/>
            </div>
            <Footer/>
        </div>
    )
}

}
export default HomePage;