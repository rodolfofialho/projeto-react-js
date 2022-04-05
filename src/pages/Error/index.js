import './error.css';
import { Link } from 'react-router-dom';


export default function Error(){
    return(
        <div className='container-error'>
            <img src='/img/error-404.svg' alt='Página não encotrada'/>
                <h1>Página não encontrada!</h1>
            <Link to={"/"}>
                Voltar para home
            </Link>
        </div>
    )
}