import * as React from 'react';
import { useState } from 'react'; // <--- Importante: useState para manejar el envío
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

// Imports directos
import Link from '../../atoms/Link';
import Action from '../../atoms/Action';
import Social from '../../atoms/Social';
import ImageBlock from '../../blocks/ImageBlock';

export default function Footer(props) {
    const { elementId, colors, logo, primaryLinks = [], socialLinks = [], legalLinks = [], styles = {}, enableAnnotations } = props;

    // Filtramos para dejar SOLO Instagram
    const instagramOnly = socialLinks.filter(link => link.icon === 'instagram');

    // --- LÓGICA DE ENVÍO DE MAIL (Backend API) ---
    const [formData, setFormData] = useState({ email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // --- CAMBIO PARA VER EL ERROR ---
            const data = await res.json(); // Leemos la respuesta del servidor
            
            if (res.ok) {
                setStatus('success');
                setFormData({ email: '', message: '' });
            } else {
                console.log("ERROR REAL:", data); // Míralo en la consola (F12)
                alert("Falló por esto: " + (data.error || data.message)); // Te saldrá una ventana con el error
                setStatus('error');
            }
            // --------------------------------
        } catch (error) {
            console.error(error);
            alert("Error de conexión: " + error.message);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // ----------------------------------------------

    return (
        <footer
            id={elementId}
            // TU DISEÑO: bg-gray-600 + rounded-t-3xl
            className={classNames('sb-component-footer bg-gray-600 text-white rounded-t-3xl mt-12', mapStyles(styles?.self || {}))}
            {...enableAnnotations}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* COLUMNA 1: LOGO Y DESCRIPCIÓN */}
                    <div className="space-y-6">
                        {logo && (
                            <Link href="/" className="inline-block">
                                <ImageBlock 
                                    {...logo} 
                                    className="w-auto"
                                    imageClassName="h-8 w-auto sm:h-10 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                                />
                            </Link>
                        )}
                        <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
                            Tu destino premium para productos Apple. Calidad, garantía y envíos seguros a todo el país.
                        </p>
                        
                        {/* INSTAGRAM */}
                        {instagramOnly.length > 0 && (
                            <div className="flex pt-2">
                                {instagramOnly.map((link, index) => (
                                    <Social 
                                        key={index} 
                                        {...link} 
                                        className="text-white hover:text-gray-300 transition-colors [&>svg]:w-8 [&>svg]:h-8"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* COLUMNA 2: NAVEGACIÓN */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="font-bold text-white text-lg tracking-wide">Explorar</h3>
                        <ul className="space-y-4">
                            {primaryLinks.map((link, index) => (
                                <li key={index}>
                                    <Action {...link} className="text-base text-gray-200 hover:text-white transition-colors font-medium" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMNA 3: EL FORMULARIO (Tarjeta Blanca) CON LÓGICA REACT */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
                        <h3 className="font-bold text-black text-lg mb-1">Contacto Rápido ⚡</h3>
                        
                        {/* Muestra mensaje de éxito si se envió */}
                        {status === 'success' ? (
                            <div className="py-10 text-center animate-pulse">
                                <p className="text-green-600 font-bold text-xl">¡Enviado! ✅</p>
                                <p className="text-gray-500 text-sm mt-2">Te responderemos pronto.</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline text-blue-600 hover:text-blue-800">
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-500 text-sm mb-4">Te respondemos en minutos.</p>
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Tu Email" 
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none text-sm transition-all"
                                        />
                                    </div>
                                    
                                    <div>
                                        <textarea 
                                            name="message" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="¿En qué podemos ayudarte?" 
                                            rows={2}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none text-sm resize-none transition-all"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={status === 'sending'}
                                        className={classNames(
                                            "w-full font-bold py-3 rounded-lg shadow-md transition-all active:scale-95",
                                            status === 'sending' 
                                                ? "bg-gray-400 cursor-not-allowed text-white" 
                                                : "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                                        )}
                                    >
                                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>
                                    
                                    {status === 'error' && (
                                        <p className="text-red-500 text-xs text-center font-bold">
                                            Error al enviar. Intenta de nuevo.
                                        </p>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>

                {/* LEGALES */}
                <div className="mt-16 border-t border-gray-500/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Mundo iPhone.
                    </p>
                    <div className="flex gap-6">
                         {legalLinks.map((link, index) => (
                            <Action key={index} {...link} className="text-xs text-gray-300 hover:text-white transition-colors" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}