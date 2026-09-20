import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
    title: 'Ingeniería en Tecnologías de la Información | UPTex 0VIT2',
    description: 'Espacio informativo y blog académico del grupo 0VIT2.',
    icons: {
        icon: '/images/logo_ti.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
        <body>
        <Navbar />
        {children} {/* <-- AQUÍ se renderizará el contenido de tu página */}
        </body>
        </html>
    );
}