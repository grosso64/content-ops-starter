---
title: Seguimiento de Envíos
type: PageLayout
slug: seguimiento # Cambiamos la URL a /seguimiento
sections:
  - type: GenericSection
    title:
      text: Rastreá tu Pedido 📦
      color: text-dark
    subtitle: Ingresá el código que te enviamos por WhatsApp
    text: >-
      Seleccioná la empresa de correo por la cual despachamos tu producto y pegá tu código de seguimiento.
    actions:
      # BOTÓN CORREO ARGENTINO
      - label: Seguimiento Correo Argentino
        url: https://www.correoargentino.com.ar/formularios/e-commerce
        style: primary
        type: Button
        showIcon: true
        icon: arrowRight # O puedes poner 'send' si prefieres

      # BOTÓN ANDREANI
      - label: Seguimiento Andreani
        url: https://www.andreani.com/
        style: primary
        type: Button
        showIcon: true
        icon: arrowRight

    media:
      type: ImageBlock
      url: /images/icon2.svg # Puedes cambiar esto por una foto de un paquete o camión
      altText: Seguimiento de envíos
    align: left
    colors: bg-light-fg-dark
    styles:
      self:
        padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
        justifyContent: center
        flexDirection: col # Botones centrados
---
