import { useNavigate } from 'react-router-dom'
import './Header.css';

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='Header'>
            <button className='buttonnavigate' onClick={() => navigate('/')}>Home</button>
            <button className='buttonnavigate' onClick={() => navigate('/grupos')}>Grupos</button>
            <button className='buttonnavigate' onClick={() => navigate('/cadastro')}>Cadastro</button>
        </div>
        )   
}