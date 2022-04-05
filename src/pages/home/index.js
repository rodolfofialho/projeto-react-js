import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../componets/menu';
import LinkItem from '../../componets/LinkItem';

export default function Home(){

  const [link, setLink] = useState('');
  const [ showModal, setShowModal ] = useState(false);

  function handleShortLink() {
    setShowModal(true);
  }

    return(
      <div className="container-home">
        
        <div className="logo">
            <img width={'150px'} src="/img/logo2.png" alt="logo" className='img'/>
            <h1>MenorLinks</h1>
            <span>Cole seu link para encurtar 👇 </span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#FFF" />
                <input placeholder="Cole seu link aqui" autoFocus
                  value={link}
                  onChange={ (e) => setLink(e.target.value) }
                />
            </div>
            <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu/>

        { showModal && (
          <LinkItem
          closeModal={ () => setShowModal(false) }
          />
        )}
      </div>
    )
  }