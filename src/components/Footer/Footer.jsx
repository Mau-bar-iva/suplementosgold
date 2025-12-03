export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Suplementos Gold</h2>
          <p className="mt-3 text-sm text-gray-400">
            Calidad premium en suplementos deportivos.  
            Rendí al máximo todos los días.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="#" className="hover:text-yellow-400">Productos</a></li>
            <li><a href="#" className="hover:text-yellow-400">Nosotros</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: suplementosgold@gmail.com</li>
            <li>WhatsApp: +54 11 1234-5678</li>
            <li>Horario: Lun–Sab 9:00 a 20:00</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Suplementos Gold — Todos los derechos reservados.
      </div>
    </footer>
  );
}
