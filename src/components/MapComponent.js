import React, {Component} from 'react';
//import SomeService from '../services/SomeService';
import { MapContainer, TileLayer} from 'react-leaflet'


class MapComponent extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            some:undefined
        }    
    }

//    componentDidMount(){
//        SomeService.getSome().then(param => {
//            this.setState({some: param.data})
//        });
//    }

    render(){
        return(
            <MapContainer style={{ height: "90vh" }} center={[48.379, 31.165]} zoom={6} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 

</MapContainer>

        )
    }

}

export default MapComponent;