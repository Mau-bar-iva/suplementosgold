import { Link } from 'react-router-dom';

export default function Nav(){
    
    return(  
        <nav>
            <ul className='flex flex-col text-2xl'>
                <li className="m-4"><Link to="/">Inicio</Link></li>
                <li className="m-4"><Link to="/">Productos</Link></li>
                <li className="m-4"><Link to="/">Nosotros</Link></li>
            </ul>
        </nav>
    )
}