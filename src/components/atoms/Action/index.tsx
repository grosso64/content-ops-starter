import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { useRouter } from 'next/router'; // 1. Importamos el router
import { iconMap } from '../../svgs'; 

export default function Action(props) {
    const { elementId, className, label, altText, url, showIcon, icon, iconPosition = 'right', style = 'primary' } = props;
    const router = useRouter(); 
    
    // DETECTOR DE BOTONES ESPECIALES
    const isWhatsApp = url?.includes('wa.me');
    const isCorreoArgentino = url?.includes('correoargentino');
    const isAndreani = url?.includes('andreani');

    // BUSCADOR DE ICONOS
    const IconComponent = icon ? iconMap[icon] : null;

    const renderedIcon = showIcon && IconComponent ? (
        <IconComponent 
            className={classNames('w-6', 'h-6', 'fill-current', { 
                'order-1 ml-3': iconPosition === 'right', 
                'order-0 mr-3': iconPosition === 'left' 
            })} 
        />
    ) : null;

    // SELECCIÓN DE CLASE
    let customClass = '';
    if (isWhatsApp) customClass = 'button2';
    else if (isCorreoArgentino) customClass = 'button-yellow';
    else if (isAndreani) customClass = 'button-red';

    const finalClassNames = customClass 
        ? classNames(customClass, className) 
        : classNames(
            'sb-component-button',
            'inline-flex',
            'items-center',
            'justify-center',
            'border-2',
            'border-current',
            'px-6',
            'py-3',
            'font-medium',
            'transition-colors',
            'duration-300',
            {
                'bg-primary text-white border-primary hover:bg-white hover:text-primary': style === 'primary',
                'bg-white text-primary border-primary hover:bg-primary hover:text-white': style === 'secondary',
                'text-lg rounded-full': true
            },
            className
          );

    // --- LA MAGIA DEL RETRASO ---
    const handleClick = (e) => {
        // Solo si es un botón especial con animación
        if (customClass) {
            e.preventDefault(); // Detenemos el salto inmediato

            // Esperamos 600ms (la animación dura 500ms)
            setTimeout(() => {
                if (url.startsWith('http')) {
                    // Si es externo (WhatsApp, Correo, Andreani)
                    window.location.href = url; 
                } else {
                    // Si fuera interno
                    router.push(url);
                }
            }, 600);
        }
        // Si NO es especial, el Link funciona normal
    };

    return (
        <Link
            href={url}
            aria-label={altText}
            id={elementId}
            className={finalClassNames}
            onClick={handleClick} // <--- Conectamos el clic aquí
        >
            {renderedIcon}
            <span className={classNames({ 'order-0': iconPosition === 'right', 'order-1': iconPosition === 'left' })}>
                {label}
            </span>
        </Link>
    );
}