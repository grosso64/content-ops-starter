import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import { getComponent } from '../../../components-registry';
import ImageBlock from '../../../blocks/ImageBlock';
import { Action } from '../../../atoms';

export default function FeaturedItem(props) {
    const { elementId, title, subtitle, text, image, images = [], actions = [], colors, styles = {}, hasSectionTitle } = props;
    
    // --- LÓGICA DEL CARRUSEL ---
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Combinamos la imagen singular (vieja) con las nuevas (si existen)
    // Así si solo pones una, funciona. Si pones lista, funciona el carrusel.
    const allImages = images.length > 0 ? images : (image ? [image] : []);
    const hasMultipleImages = allImages.length > 1;

    const nextImage = (e) => {
        e.preventDefault(); // Evita que la página salte
        setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };
    // ----------------------------

    const defaultStyles = {
        textAlign: 'center', // forzamos centrado si no viene estilo
    };
    const finalStyles = { ...defaultStyles, ...styles?.self };

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component-featured-item',
                colors || 'bg-white',
                'w-full', 'flex', 'flex-col', 'grow', 'relative', // relative para las flechas
                mapStyles(finalStyles)
            )}
            style={{ borderRadius: '16px', overflow: 'hidden' }} // Bordes redondeados en la tarjeta completa
        >
            {/* --- ZONA DE IMAGEN / CARRUSEL --- */}
            <div className="relative w-full overflow-hidden bg-gray-100 flex items-center justify-center" style={{ minHeight: '300px' }}>
                {allImages.length > 0 && (
                    <div className="w-full h-full flex transition-transform duration-500 ease-in-out" 
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {allImages.map((img, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center p-4">
                                <ImageBlock {...img} className="max-h-64 object-contain mx-auto" /> 
                            </div>
                        ))}
                    </div>
                )}

                {/* FLECHAS (Solo si hay más de 1 foto) */}
                {hasMultipleImages && (
                    <>
                        {/* Flecha Izquierda */}
                        <button 
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md z-10 transition-all"
                            aria-label="Anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>

                        {/* Flecha Derecha */}
                        <button 
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md z-10 transition-all"
                            aria-label="Siguiente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* --- CONTENIDO DE TEXTO --- */}
            <div className="p-6 flex flex-col grow items-center">
                {title && (
                    <h3 className={classNames('text-xl font-bold mb-2', { 'mt-4': !image })}>
                        {title}
                    </h3>
                )}
                {subtitle && <p className="text-lg text-primary font-bold mb-4">{subtitle}</p>}
                {text && <div className="text-gray-600 mb-6 text-sm leading-relaxed max-w-sm">{text}</div>}
                
                {actions.length > 0 && (
                    <div className="mt-auto pt-4">
                        {actions.map((action, index) => (
                            <Action key={index} {...action} className="w-full" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}