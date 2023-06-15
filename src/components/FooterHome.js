import React, {Component} from 'react';
import'./css/footer.css';
import logoTG from '../img/Telegram-PNG-Picture.png';
import logoTW from '../img/logo-twitter-png-40407.png';
import logoIG from '../img/logo-instagram-png-13564.png';


class Header extends Component{


    render(){
        
        return(
            <footer style={{height: "5vh", backgroundColor: "darkgreen"}}>
        <div className='fcontainer'>
          <a className="telegram" href='https://web.telegram.org/' target='_blank'> <img className='tg' src={logoTG}></img> </a>
          <a className='twitter' href='https://www.instagram.com/' target='_blank'><img className='tw' src={logoTW}></img></a>
          <a className='instagram' href='https://discord.com/' target='_blank'> <img className='ig' src={logoIG}></img> </a>
        </div>
      </footer>

        )
    }

}


export default Header;