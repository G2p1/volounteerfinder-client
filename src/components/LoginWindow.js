import React, {Component} from 'react';

class LoginWindow extends Component{

    loginin(){
        window.location.href='/api/auth';
    }

    register(){
        window.location.href='/api/reg';
    }

render(){
    return(
        <div className='loginwindow'>
            <div className='welcome'> 
            Welcome to our platform<br/>
            Lets start!
            </div>
            <button className='hlogin' onClick={this.loginin}>Log in</button>
            <button className='hregistrate' onClick={this.register}>Registrate</button>            
        </div>
    )
}

}
export default LoginWindow;