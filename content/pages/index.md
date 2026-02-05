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
      type: TitleBlock
    subtitle: Envíos a todo el país 🇦🇷
    
    # Diseño de la grilla: 'three-col-grid' muestra 3 productos por fila
    variant: three-col-grid
    colors: bg-light-fg-dark
    
    # Aquí empieza la lista de tus productos
    items:
      
      # --- PRODUCTO 1 ---
      - type: FeaturedItem
        title: AirPods Pro (2da Gen)   # Nombre del producto
        subtitle: $ 280.000 ARS        # PRECIO (Usamos el subtítulo para esto)
        
        # CARACTERÍSTICAS (Usa el símbolo >- para escribir en varias líneas)
        text: >-
          Cancelación de ruido activa. 
          Estuche de carga MagSafe (USB-C).
          Hasta 6 horas de audio.
        
        # IMAGEN DEL PRODUCTO
        image:
          type: ImageBlock
          url: /images/airpods2.jpg  # ¡Asegúrate de subir esta foto a la carpeta public/images!
          altText: AirPods Pro 2da Generación
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
            icon: messageCircle       # Icono de mensaje (si está disponible) o arrowRight
            style: primary            # Estilo de botón principal (lleno de color)
            type: Button
            
        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large       # Bordes redondeados
            flexDirection: col        # Imagen arriba, texto abajo
            textAlign: center         # Todo centrado

      # --- PRODUCTO 2 ---
      - type: FeaturedItem
        title: AirPods Max negro
        subtitle: $ 650.000 ARS
        text: >-
          +12 horas de audio, con regulador de volumen, vincha regulable, boton de encendido
          viene tambien con su funda antirayones, de alta resistencia que lo protege del polvo y suciedad
          con su vinculacion POP-UP
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
            icon: messageCircle       # Icono de mensaje (si está disponible) o arrowRight
            style: primary            # Estilo de botón principal (lleno de color)
            type: Button
            
        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large       # Bordes redondeados
            flexDirection: col        # Imagen arriba, texto abajo
            textAlign: center         # Todo centrado

      # --- PRODUCTO 3 ---
      - type: FeaturedItem
        title: AirPods Max plateados  # Nombre del producto
        subtitle: $ 280.000 ARS        # PRECIO (Usamos el subtítulo para esto)
        
        # CARACTERÍSTICAS (Usa el símbolo >- para escribir en varias líneas)
        text: >-
          Cancelación de ruido activa. 
          Estuche de carga MagSafe (USB-C).
          Hasta 6 horas de audio.
        
        # IMAGEN DEL PRODUCTO
        image:
          type: ImageBlock
          url: /images/AirpodsMaxPlateados.jpg  # ¡Asegúrate de subir esta foto a la carpeta public/images!
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
            icon: messageCircle       # Icono de mensaje (si está disponible) o arrowRight
            style: primary            # Estilo de botón principal (lleno de color)
            type: Button
            
        # Estilos de la tarjeta del producto
        colors: bg-neutralAlt-fg-dark # Fondo grisáceo para destacar la tarjeta
        styles:
          self:
            padding: ['pt-6', 'pb-6', 'pl-6', 'pr-6'] # Espaciado interno
            borderRadius: large       # Bordes redondeados
            flexDirection: col        # Imagen arriba, texto abajo
            textAlign: center         # Todo centrado
    # Configuración de espaciado de toda la sección
    styles:
      self:
        padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
        justifyContent: center
  # --- FIN DE LA SECCIÓN DE TIENDA ---
  
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: Grow your business 10x faster
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: This is a subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    media:
      title: Title of the video
      url: /images/placeholder-video.mp4
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    badge:
      label: Key Benefits
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
    type: GenericSection
  - type: GenericSection
    title:
      text: Generic section with a video
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Section with a video subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      title: Title of the video
      url: /images/placeholder-video.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
    elementId: null
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - title:
      text: Social Media Management
      color: text-dark
      type: TitleBlock
    subtitle: Increase your reach
    text: >
      A service that helps businesses to manage their social media accounts and
      posts.
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
      - label: See Tutorials
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
    media:
      url: /images/hero2.svg
      altText: Fun feature preview
      type: ImageBlock
    badge:
      label: This is a badge
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
    type: GenericSection
  - title:
      text: Business Consulting
      color: text-dark
      type: TitleBlock
    subtitle: Be in good company
    text: >
      A service that provides advice and guidance to startups and small
      businesses.
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
      - label: See Tutorials
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
    media:
      url: /images/hero3.svg
      altText: Dope design preview
      type: ImageBlock
    badge:
      label: This is a badge
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
    type: GenericSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: CarouselSection
    title: null
    subtitle: What our customers say about us
    items:
      - title: >-
          “A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away.”
        tagline: Testimonial 1
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose."
        tagline: Testimonial 2
        subtitle: 'John Doe, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: John Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "Design is how it works, how it functions. Good design doesn't just make a product aesthetically pleasing, it makes it a pleasure to use."
        tagline: Testimonial 3
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away.”
        tagline: Testimonial 4
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."
        tagline: Testimonial 5
        subtitle: 'Jane Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “Quote from some important person goes right here. I love using Netlify Create.”
        tagline: Testimonial 6
        subtitle: 'Jane Doe, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/img-placeholder-dark.png
          altText: Jane Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - title:
      text: List of features here
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Featured items section subtitle
    items:
      - title: Feature Item One
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Follow the tutorial to build your first Netlify Create site.
        image:
          url: /images/abstract-feature1.svg
          altText: Placeholder Image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Feature Item Two
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Follow the tutorial to build your first awesome Netlify Create site.
        image:
          url: /images/abstract-feature2.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Feature Item Three
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Learn from the tutorial and build your first awesome Netlify Create site.
        image:
          url: /images/abstract-feature1.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  - title:
      text: Generic Section With A Form
      color: text-dark
      type: TitleBlock
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---