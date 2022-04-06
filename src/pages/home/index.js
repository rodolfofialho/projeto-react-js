import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../componets/menu';
import LinkItem from '../../componets/LinkItem';

import api from '../../Services/api';

export default function Home(){

  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [ showModal, setShowModal ] = useState(false);

  
  /*Quando o usuario clicar em gerar link. está chamando a funcao handleShortLink
    dentro da função existe um try catch, dentro do try eu tendo realizar alguma ação. No caso desse projeto ele acessa nossa 
    api do shortenLink < Bitlyn https://dev.bitly.com/api-reference#createBitlink > faz uma requisição do tipo post
    criar o llink encurtado da url grande que foi passado na função

    O que a api retorna fica dentro so response.data..
     pode ser consultado na página da bitlyn na area de API Reference
    da url.. caso o try não funcione ele vai cair no catch.. Abrindo um alert informanado que algo deu errado:/
  */ 
  
  async function handleShortLink() {  
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      setLink('');

    }catch{
      alert("Ops, algo deu errado :/")
      setLink('');
    }
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
          content={data}
          />
        )}
      </div>
    )
  }