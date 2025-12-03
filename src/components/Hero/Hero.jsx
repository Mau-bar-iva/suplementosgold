import Nav from "../Nav";
import { useState } from 'react';
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <header className="fixed w-full h-15 flex justify-between items-center px-4 bg-[#252522] z-10">
                <div className="h-[50px]">
                    <Link to="/">
                        <img src="/public/assets/Logo-Hero.png" alt="Logo-suplementosgold" className="h-full rounded-full" />
                    </Link>
                </div>

                <div>
                    <button
                        className='h-[44px] bg-[#2c3e50] px-2'
                        onClick={()=>setMenuOpen(prev => !prev)}>
                        <Menu color="#c9a55e"/>
                    </button>

                </div>
            </header>
            <div
                className={`
                    fixed left-0 top-0 w-full h-full bg-[#2c3e50] z-9 p-20
                    transition-transform duration-1200 ease-out
                    ${menuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
                >
                <Nav />
            </div>
        </>
    )
}