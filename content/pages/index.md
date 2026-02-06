---
title: Home
slug: /
sections:
  # --- INICIO DE LA SECCIÓN DE TIENDA (CATÁLOGO) ---
  - type: FeaturedItemsSection
    # Configuración del Título de la sección
    title:
      text: Catálogo de Auriculares
      color: text-dark
      styles:
        self:
          fontSize: x-large
          textAlign: center
      type: TitleBlock
    subtitle: Envíos a todo el país 🇦🇷
    textAlign: center

    # Diseño de la grilla: 'three-col-grid' muestra 3 productos por fila
    variant: three-col-grid
    colors: bg-light-fg-dark

    # Aquí empieza la lista de tus productos
    items:
      # --- PRODUCTO 1 ---
      - type: FeaturedItem
        title: AirPods Pro (2da Gen) # Nombre del producto
        subtitle: $ 40.000 ARS # PRECIO (Usamos el subtítulo para esto)

        # CARACTERÍSTICAS (Usa el símbolo >- para escribir en varias líneas)
        text: >-
          Cancelación de ruido activa. 
          Estuche de carga MagSafe (USB-C).
          Hasta 6 horas de audio.

        # IMAGEN DEL PRODUCTO
        images:
          - type: ImageBlock
            url: /images/airpods-pro.jpg # Foto 1 (Frente)
            altText: Vista frontal
          - type: ImageBlock
            url: /images/airpods-pro.jpg # Foto 2 (Estuche abierto)
            altText: Estuche abierto
          - type: ImageBlock
            url: /images/airpods-pro-3.jpg # Foto 3 (En el oído)
            altText: Puesto en oreja

        # BOTÓN DE COMPRA (WHATSAPP)
        actions:
          - label: Comprar por WhatsApp
            # Reemplaza el número 54911... con tu número real.
            # %20 es un espacio en blanco para el mensaje.
            url: https://wa.me/5491112345678?text=Hola,%20quiero%20comprar%20los%20AirPods%20Pro
            showIcon: true
            icon: whatsapp # Icono de mensaje (si está disponible) o arrowRight
            style: primary # Estilo de botón principal (lleno de color)
            type: Button

        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large # Bordes redondeados
            flexDirection: col # Imagen arriba, texto abajo
            textAlign: center # Todo centrado

      # --- PRODUCTO 2 ---
      - type: FeaturedItem
        title: AirPods Max negro
        subtitle: $ 60.000 ARS
        text: >-
          +12 horas de audio, con regulador de volumen, vincha regulable, boton de encendido
        image:
          type: ImageBlock
          url: /images/AirpodsMaxNegro.jpg
          altText: AirPods Max negro
          styles:
            self:
              borderRadius: large
        actions:
          - label: Comprar por WhatsApp
            # Reemplaza el número 54911... con tu número real.
            # %20 es un espacio en blanco para el mensaje.
            url: https://wa.me/5491112345678?text=Hola,%20quiero%20comprar%20los%20AirPods%20Pro
            showIcon: true
            icon: whatsapp # Icono de mensaje (si está disponible) o arrowRight
            style: primary # Estilo de botón principal (lleno de color)
            type: Button

        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large # Bordes redondeados
            flexDirection: col # Imagen arriba, texto abajo
            textAlign: center # Todo centrado

      # --- PRODUCTO 3 ---
      - type: FeaturedItem
        title: AirPods Max plateados # Nombre del producto
        subtitle: $ 60.000 ARS # PRECIO (Usamos el subtítulo para esto)

        # CARACTERÍSTICAS (Usa el símbolo >- para escribir en varias líneas)
        text: >-
          +12 horas de audio, con regulador de volumen, vincha regulable, boton de encendido
        # IMAGEN DEL PRODUCTO
        image:
          type: ImageBlock
          url: /images/AirpodsMaxPlateados.jpg # ¡Asegúrate de subir esta foto a la carpeta public/images!
          altText: AirPods Max plateados
          styles:
            self:
              borderRadius: large

        # BOTÓN DE COMPRA (WHATSAPP)
        actions:
          - label: Comprar por WhatsApp
            # Reemplaza el número 54911... con tu número real.
            # %20 es un espacio en blanco para el mensaje.
            url: https://wa.me/5491112345678?text=Hola,%20quiero%20comprar%20los%20AirPods%20Pro
            showIcon: true
            icon: whatsapp # Icono de mensaje (si está disponible) o arrowRight
            style: primary # Estilo de botón principal (lleno de color)
            type: Button

        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large # Bordes redondeados
            flexDirection: col # Imagen arriba, texto abajo
            textAlign: center # Todo centrado
    # Configuración de espaciado de toda la sección
    styles:
      self:
        padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
        justifyContent: center
      subtitle:
        fontSize: medium

  # --- FIN DE LA SECCIÓN DE TIENDA ---

seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
