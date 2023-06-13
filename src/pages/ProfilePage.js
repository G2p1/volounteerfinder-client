import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';

class HomePage{

render(){
    return(
        <div>
            <Header/>
            <MapComponent/>
            <Footer/>
        </div>
    )
}

}
export default HomePage;