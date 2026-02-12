import * as React from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import ImageBlock from '../../../blocks/ImageBlock';
import { Action } from '../../../atoms';

export default function FeaturedItem(props) {
    const { elementId, title, subtitle, text, image, images = [], actions = [], colors, styles = {} } = props;

    // Combinamos las imágenes en una sola lista segura
    const allImages = images.length > 0 ? images : image ? [image] : [];

    // Alineación izquierda por defecto para el texto descriptivo
    const defaultStyles = {
        textAlign: 'left'
    };
    const finalStyles = { ...defaultStyles, ...styles?.self };

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component-featured-item',
                colors || 'bg-white',
                'w-full',
                'flex',
                'flex-col',
                'grow',
                'relative',
                mapStyles(finalStyles)
            )}
            style={{ borderRadius: '16px', overflow: 'hidden' }}
        >
            {/* --- ZONA DE IMAGEN (Swiper) --- */}
            <div className="relative w-full bg-gray-100 overflow-hidden">
                <div className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center">
                    {allImages.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={allImages.length > 1}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            loop={allImages.length > 1}
                            className="absolute inset-0 w-full h-full"
                        >
                            {allImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center">
                                        <ImageBlock
                                            {...img}
                                            className="w-full h-full"
                                            imageClassName="w-full h-full object-cover block"
                                            style={{ height: '100%', width: '100%' }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="w-full h-64 flex items-center justify-center text-gray-400 text-sm">Sin imagen disponible</div>
                    )}
                </div>
            </div>

            <div className="p-1 flex flex-col grow items-center">
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