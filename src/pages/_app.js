import { useEffect, useState } from 'react';
import '../css/main.css';

// 1. Componente del Loader (Con estilos blindados)
function AppLoader() {
    return (
        <div
            style={{
                position: 'fixed', // Flotar encima de todo
                top: 0,
                left: 0,
                width: '100%', // Ocupar todo el ancho
                height: '100%', // Ocupar todo el alto
                zIndex: 99999, // Estar encima de cualquier cosa
                backgroundColor: '#ffffff', // Fondo blanco
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.5s ease-out' // Suavizado al irse (opcional)
            }}
        >
            <div className="sb-app-loader-orbit">
                {/* Logo latiendo */}
                <img
                    src="/images/logo.png"
                    alt="Cargando..."
                    style={{
                        width: '80px',
                        height: 'auto',
                        animation: 'pulse 1.5s infinite ease-in-out'
                    }}
                />
            </div>

            {/* Agregamos la animación de latido aquí mismo para no depender del CSS */}
            <style jsx global>{`
                @keyframes pulse {
                    0% {
                        transform: scale(0.95);
                        opacity: 0.8;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0.95);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
}

// 2. Componente Principal
export default function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Bloquear el scroll mientras carga para que no se muevan
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Devolver el scroll cuando termina
            document.body.style.overflow = 'unset';
        }, 1200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <>
            {isLoading && <AppLoader />}
            <Component {...pageProps} />
        </>
    );
}
