# Instrucciones de Implementación - Rita Espinoza Riquelme

## Cómo implementar en WordPress con Elementor

### Paso 1: Preparar las imágenes
Antes de implementar, sube las siguientes imágenes a tu biblioteca de medios de WordPress:
- Foto principal de Rita en su puesto de mariscos
- 6 imágenes de productos (salmón, mariscos, ceviche, jaibas, merluza, almejas)

### Paso 2: Actualizar las URLs de las imágenes en el HTML
Reemplaza estas URLs de placeholder en el HTML con las URLs reales de tus imágenes:

```html
<!-- Imagen principal del hero -->
src="https://via.placeholder.com/800x400/4ECDC4/ffffff?text=Rita+en+su+puesto"

<!-- Imágenes de la galería -->
src="https://via.placeholder.com/300x200/4ECDC4/ffffff?text=Salmon+Fresco"
src="https://via.placeholder.com/300x200/44A08D/ffffff?text=Mariscos"
src="https://via.placeholder.com/300x200/4ECDC4/ffffff?text=Ceviche"
src="https://via.placeholder.com/300x200/44A08D/ffffff?text=Jaibas"
src="https://via.placeholder.com/300x200/4ECDC4/ffffff?text=Merluza"
src="https://via.placeholder.com/300x200/44A08D/ffffff?text=Almejas"
```

### Paso 3: Implementar en Elementor

#### A. Añadir el HTML:
1. En tu página/post de WordPress, abre Elementor
2. Arrastra el widget **"HTML"** a tu página
3. Copia todo el contenido del archivo `rita_espinoza_content.html`
4. Pega el código en el widget HTML de Elementor

#### B. Añadir el CSS:
1. En el editor de Elementor, haz clic en el icono de **configuración** (engranaje) en la esquina inferior izquierda
2. Ve a la pestaña **"Advanced" → "Custom CSS"**
3. Copia todo el contenido del archivo `rita_espinoza_styles.css`
4. Pega el código CSS en el campo "Custom CSS"

### Paso 4: Personalización adicional

#### Actualizar información de contacto:
- Cambia el enlace de Facebook por la URL real de la página ElyMar
- Actualiza el número de teléfono si es necesario
- Añade la ubicación específica del puerto artesanal

#### Personalizar colores (opcional):
- Color principal: `#4ECDC4` (turquesa/verdoso)
- Color secundario: `#44A08D` (verde más oscuro)
- Puedes cambiar estos valores en el CSS si deseas otros tonos

#### Optimizar para SEO:
- Añade atributos `alt` descriptivos a las imágenes
- Considera añadir datos estructurados para negocio local
- Optimiza las imágenes antes de subirlas

### Paso 5: Verificación y pruebas
1. Guarda y previsualiza la página
2. Verifica que sea responsive en móvil y tablet
3. Comprueba que todos los enlaces funcionen correctamente
4. Verifica que las imágenes carguen correctamente

## Características del diseño:

✅ **Responsive** - Se adapta a móviles y tablets
✅ **Moderno** - Usa gradientes, sombras y animaciones suaves
✅ **Cards interactivas** - Efectos hover en productos y galería
✅ **Galería con overlays** - Información adicional al pasar el mouse
✅ **Colores de marca** - Respeta el verde/turquesa original
✅ **Call-to-action** - Botón de contacto prominente
✅ **Iconos SVG** - Vectoriales y escalables
✅ **Animaciones CSS** - Transiciones suaves y profesionales

## Soporte y personalización:

Si necesitas hacer cambios adicionales:
- Los estilos están organizados por secciones
- Cada sección tiene comentarios explicativos
- Las variables de color están claramente definidas
- El diseño es fácilmente modificable

¡Tu página estará lista para impresionar a los visitantes y generar más ventas para Rita! 