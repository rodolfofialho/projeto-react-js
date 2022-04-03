import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links(){
    return(
      <div className='links-container'>

          <div className='links-header'>
            <Link to="/">
               <FiArrowLeft size={38} color="#FFF"/> 
            </Link>
            <h1>Meus Links</h1>
          </div>

          <div className='links-item'>
            <button className='link'>
              <FiLink size={25} color="#FFF"/>
              https://cafeProgramador.com
            </button>
            <button className='link-delete'>
              <FiTrash size={25} color="#ff0000"/>
            </button>
          </div>
      </div>
    )
  }