import './Banner.css';
import { useState, useEffect } from 'react';

function Banner({Titulo=""}){
    const imagenes = [
        "/src/assets/BannerColageno.png",
        "/src/assets/BannerCreatina.png",
        "/src/assets/BannerProteina.png"
    ];

    const [indice, setIndice] = useState(0);
        
    useEffect(() => {
        const intervalo = setInterval(()=>{
            setIndice((prev)=>(prev + 1) % imagenes.length)
        }, 3500)

        return ()=> clearInterval(intervalo)

    }, [imagenes.length]);

    return(
        <div className='banner-container'>
            <div className='banner-img-container'>
                <div 
                  className='banner-image'
                  style={{ backgroundImage: `url(${imagenes[indice]})` }}
                ></div>
            </div>
            <div className='banner-text-container'>
                <h4 className='text-lg font-medium'>Suplementos Gold</h4>
                <h1 className='banner-title'>{Titulo}</h1>
            </div>
        </div>
    )
}

export default Banner