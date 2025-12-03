import { useEffect, useRef } from "react";

export default function Carrousel(){
    const scrollRef = useRef(null);

    const productos = [
        { id: 1, nombre: "Proteína", img: "./assets/BannerCreatina.png" },
        { id: 2, nombre: "Creatina", img: "./assets/BannerCreatina.png" },
        { id: 3, nombre: "Pre-entreno", img: "./assets/BannerCreatina.png" },
        { id: 4, nombre: "Aminoácidos", img: "./ssets/BannerCreatina.png" },
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let interval = setInterval(() => {
        const cardWidth = container.children[0].offsetWidth + 16; // ancho + gap
        container.scrollBy({ left: cardWidth, behavior: "smooth" });

        // volver al inicio cuando llegue al final
        if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth - 10
        ) {
            container.scrollTo({ left: 0, behavior: "smooth" });
        }
        }, 2500);

        // detener auto-scroll si el usuario interactúa
        const stopAutoScroll = () => clearInterval(interval);
        container.addEventListener("touchstart", stopAutoScroll);
        container.addEventListener("mousedown", stopAutoScroll);

        return () => {
        clearInterval(interval);
        container.removeEventListener("touchstart", stopAutoScroll);
        container.removeEventListener("mousedown", stopAutoScroll);
        };
    }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 py-6 scroll-smooth no-scrollbar"
    >
      {productos.map(p => (
        <div
          key={p.id}
          className="min-w-[250px] snap-center shrink-0 bg-white rounded-xl shadow-lg p-4"
        >
          <img
            src={p.img}
            alt={p.nombre}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-3 font-bold text-lg">{p.nombre}</h3>
        </div>
      ))}
    </div>
  );
}