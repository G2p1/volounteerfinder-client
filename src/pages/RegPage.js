import React, {Component} from 'react';
import { AuthService } from '../services/AuthService';

import Header from '../components/HeaderHome';
import Footer from '../components/FooterHome';
import MapComponent from '../components/MapComponent';

import '../components/css/authForm.css'

class HomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
          message: "",
        };
      }
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
    
        AuthService.register(username, email, password).then(
          () => {
            window.location.href="auth";
          },
          (error) => {
              this.setState({
              message: "Incorrect Data",
            });
          }
        );
      };    

render(){
    return(
        <div>
        <Header/>
        <div className='container'>
            <MapComponent/>
            {//<intercept-url pattern="/**" access="authenticated"/>
            }
            <form onSubmit={this.handleSubmit} className='formAuthr'>
                <div>
                    <label className='labelunr' htmlFor='username'>Input your login:</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} id='formr-username' placeholder='username' required></input>
                </div>
                <div>
                    <label className='labelpwr' htmlFor='password'>Input your password:</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} id='formr-password' placeholder='password' required></input>
                </div>
                <div>
                    <label className='labelemr' htmlFor='password'>Input your Email:</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleInputChange} id='formr-email' placeholder='email' required></input>
                </div>
                <div>
                    <button type='submit'>Sign up</button>
                </div>
                {this.state.message && (
                  <div className="formr-groupr">
                     <div className="alert alert-danger" role="alert">
                         {this.state.message}
                     </div>
                  </div>
                 )}
            </form>
        </div>
        <Footer/>
    </div>
    )
}

}
export default HomePage;