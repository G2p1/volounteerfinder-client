import React, {Component} from 'react';
//import SomeService from '../services/SomeService';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon } from 'leaflet';
import './css/mappopup.css';
import iconImg from '../img/marker.png';

class MapComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }


    render(){
        return(
            <MapContainer style={{ height: "90vh" }} center={[48.379, 31.165]} zoom={11} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker  position={[48.379, 31.165]} icon={new Icon({iconUrl: iconImg, iconSize: [25, 41], iconAnchor: [12, 41]})}>
    <Popup >
    <div className="modal">
        <div className="modal-content">
            {
            this.state.user.username && (
            <div className='modal-user'>
                {this.state.user.username}
            </div>)
            }
            <div className="modal-header">
                Posting
            </div>
            <div className="modal-body">
                Content of posting
            </div>
            <div className="modal-footer">
                <button className="aceptp">Acept</button>
            </div>
        </div>

    </div>
    </Popup>
  </Marker>

</MapContainer>

        )
    }

}

export default MapComponent;