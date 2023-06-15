import React, {Component} from 'react';
import { AuthService } from '../services/AuthService';

import Header from '../components/HeaderHome';
import Footer from '../components/FooterHome';
import MapComponent from '../components/MapComponent';

import '../components/css/authForm.css'



class HomePage extends Component{
  
    constructor(props){
       
        super(props);
        this.state={
            username: "",
            password: "",
            massage:"",
        }
        
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        AuthService.login(username, password)
          .then(
            
            () => {
            
              // Redirect to the desired page after successful login
             
              window.location.href="dashboard";
              //window.location.reload();
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
                <form onSubmit={this.handleSubmit} className='formAuth'>
                    <div>
                        <label className='labelun' htmlFor='username'>Input your login:</label>
                        <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} id='form-username' placeholder='username' required></input>
                    </div>
                    <div>
                        <label className='labelpw' htmlFor='password'>Input your password:</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} id='form-password' placeholder='password' required></input>
                    </div>
                    <div>
                        <button type='submit'>Log in</button>
                    </div>
                    {this.state.message && (
                      <div className="form-group">
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