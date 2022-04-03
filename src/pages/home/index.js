
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../componets/menu';

export default function Home(){
    return(
      <div className="container-home">
        
        <div className="logo">
            <img width={'250px'} src="/img/logo2.png" alt="logo" className='img'/>
            <h1>MenorLinks</h1>
            <span>Cole seu link para encurtar 👇 </span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#FFF" />
                <input placeholder="Cole seu link aqui.." autoFocus/>
            </div>
            <button>Gerar Link</button>
        </div>

        <Menu/>
      </div>
    )
  }