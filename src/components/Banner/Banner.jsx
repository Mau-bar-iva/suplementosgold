import './Banner.css';
import { useState, useEffect } from 'react';
import BannerColageno from "../../assets/BannerColageno.png"
import BannerCreatina from "../../assets/BannerCreatina.png"
import BannerProteina from "../../assets/BannerProteina.png"
function Banner({Titulo=""}){
    const imagenes = [
        BannerColageno,
        BannerCreatina,
        BannerProteina
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