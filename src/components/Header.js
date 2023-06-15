import React, {Component} from 'react';
import { AuthService } from '../services/AuthService';
import'./css/header.css';

class Header extends Component{

    goToProfile(){
        window.location.href='/api/profile';
    }
    goToDashboard(){
        window.location.href='/api/dashboard';
    }
    signOut(){
        AuthService.logout();
        window.location.href='/api';
    }
    render(){
        
        return(
            <header style={{height: "5vh", backgroundColor: "darkgreen"}}>
       <div className='logoa'> Volounteer Finder </div>
        <div className='nav'>
            <button className='bd' onClick={this.goToDashboard}>Dashboard</button>
            <button className='bp' onClick={this.goToProfile}>Profile</button>
            <button className='bso' onClick={this.signOut}>Sign out</button>
        </div>
      </header>

        )
    }

}


export default Header;