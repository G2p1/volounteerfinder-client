import React, {Component} from 'react';
import './css/profile.css';

class Profile extends Component{

    constructor(props){
        super(props)
        this.state={
            user: JSON.parse(localStorage.getItem('user'))
        }
    }



    render(){
        return(
            <div className='containerp'>
                <div className='posting'>
                    Posting
                </div>
                {
                this.state.user.username && (
                <div className='username'>
                    {this.state.user.username}
                </div>)
                }
                <div className='info'>
                    info
                </div>
                <div className='comments'>
                    comments
                </div>
            </div>

        )
    }

}

export default Profile;