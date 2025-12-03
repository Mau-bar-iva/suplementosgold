import { Outlet } from "react-router-dom"
import Hero from "../components/Hero/Hero.jsx"
import { Star, SquareCheckBig, ToolCase} from "lucide-react"
import Carrousel from "../components/Carrousel/Carrousel.jsx"
export default function MainLayout(){
    
    return( 
        <>
            <Hero />
            <main className="bg-white w-full pt-15 text-black flex flex-col gap-10">
                <Outlet/>
                <section className="flex flex-col gap-5">
                    <div className="mx-[15px] flex flex-col gap-4">
                        <h2 className="text-2xl text-">
                        Descubre algunos productos para ayudarte a alcanzar tus metas
                        </h2>
                        <p className="">
                            Ofrecemos una amplia gama de productos de alta calidad para complementar tu nutrición.
                        </p>
                    </div>
                    <div>
                        <Carrousel />
                    </div>
                    <div className="flex flex-col gap-[3rem]">
                        <div className="flex flex-col justify-center items-center uppercase">
                            <Star/>
                            <h4>calidad garantizada</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center uppercase">
                            <SquareCheckBig/>
                            <h4>productos aprobados y confiables</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center uppercase">
                            <ToolCase/>
                            <h4>equipamiento adecuado para tus necesidades</h4>
                        </div>
                    </div>
                </section>
            </main> 
        </>
    )
}