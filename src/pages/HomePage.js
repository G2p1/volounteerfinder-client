import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';

class HomePage extends Component{

constructor(props){
    super(props);
}

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