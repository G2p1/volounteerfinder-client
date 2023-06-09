import React, {Component} from 'react';
import SomeService from '../services/SomeService';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


class UserComponent extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            some:undefined
        }    
    }

    componentDidMount(){
        SomeService.getSome().then(param => {
            this.setState({some: param.data})
        });
    }

    render(){
        return(
            <MapContainer style={{ height: 536 }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

        )
    }

}

export default UserComponent;