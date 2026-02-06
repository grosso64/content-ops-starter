import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs'; 

export default function Action(props) {
    const { elementId, className, label, altText, url, showIcon, icon, iconPosition = 'right', style = 'primary' } = props;
    
    // DETECTOR DE ESTILOS PERSONALIZADOS
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

    // SELECCIÓN DE CLASE SEGÚN EL LINK
    let customClass = '';
    
    if (isWhatsApp) {
        customClass = 'button2'; // Verde (WhatsApp)
    } else if (isCorreoArgentino) {
        customClass = 'button-yellow'; // Amarillo (Correo)
    } else if (isAndreani) {
        customClass = 'button-red'; // Rojo (Andreani)
    }

    // Si tiene clase personalizada, usamos esa. Si no, usamos las normales.
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

    return (
        <Link
            href={url}
            aria-label={altText}
            id={elementId}
            className={finalClassNames}
        >
            {renderedIcon}
            <span className={classNames({ 'order-0': iconPosition === 'right', 'order-1': iconPosition === 'left' })}>
                {label}
            </span>
        </Link>
    );
}