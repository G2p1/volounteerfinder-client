import React, {Component} from 'react';


class Header extends Component{

loginClick(){
  document.getElementsByClassName("login")[0].setAttribute('style', 'display:none')// style.display = "none";

  document.getElementsByClassName('profile')[0].setAttribute('style', 'display:inline')// style.display = "block";
  
}
logoutClick(){
  document.getElementsByClassName("login")[0].style.display = "inline";
  document.getElementsByClassName('profile')[0].style.display = 'none';

}
    
    render(){
        
        return(
            <header style={{height: "5vh", backgroundColor: "darkgreen"}}>
       <span> Volounteer Finder </span>
       <button className="login" onClick={this.loginClick}> Log In </button>
       <button className='profile' style={{display:"none"}}>Profile</button>
       <button className='logout' onClick={this.logoutClick}> Log out </button>
      </header>

        )
    }

}


export default Header;