import React, {Component} from 'react';
import'./css/header.css';

class Header extends Component{

    render(){
        
        return(
            <header style={{height: "5vh", backgroundColor: "darkgreen"}}>
       <div className='logoh'> Volounteer Finder </div>

      </header>

        )
    }

}


export default Header;