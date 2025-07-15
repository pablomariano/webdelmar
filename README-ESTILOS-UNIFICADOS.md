# Sistema de Estilos Unificado
**Integración completa para WordPress sin conflictos de estilos**

## 📁 Estructura de archivos

### 🎨 CSS Unificado
- **`unified-styles.css`** - Archivo CSS único que contiene todos los estilos

### 📄 Páginas HTML
- **`rita_espinoza_content.html`** - Perfil de Rita Espinoza
- **`business_directory.html`** - Directorio de negocios  
- **`cards-html-components.html`** - Biblioteca de 6 componentes de cards

---

## 🛡️ Sistema de Namespacing

Para evitar conflictos con los estilos globales de WordPress, **cada sección tiene su propio prefijo**:

| Sección | Prefijo | Ejemplo de clase |
|---------|---------|------------------|
| **Rita Espinoza** | `re-` | `.re-main-title` |
| **Directorio de Negocios** | `bd-` | `.bd-business-card` |
| **Componentes Cards** | `cc-` | `.cc-product-card` |

---

## 🚀 Implementación en WordPress/Elementor

### Paso 1: Subir el CSS
1. Sube `unified-styles.css` a tu tema de WordPress
2. O súbelo a la carpeta de medios y obtén la URL

### Paso 2: Para cada página
1. **En Elementor**: Arrastra un widget HTML
2. **Copia y pega** el contenido HTML correspondiente
3. **En configuración CSS de Elementor**: No necesitas añadir nada adicional

### Paso 3: Verificación
- Los estilos se cargan automáticamente con el `@import` en cada HTML
- No habrá conflictos con otros estilos de WordPress
- Cada sección es completamente independiente

---

## 🎯 Componentes incluidos

### 🐟 Rita Espinoza (`re-`)
- Header con gradiente turquesa
- Hero section con imagen y overlay
- Cards de productos con iconos
- Galería interactiva con efectos hover
- Sección de contacto con redes sociales
- Call-to-action final

### 🏢 Directorio de Negocios (`bd-`)
- Header con título personalizable
- Grid de cards de negocios con overlay
- Efectos hover y animaciones
- Categorías y descripciones
- CTA para registrar nuevos negocios

### 🎨 Biblioteca de Cards (`cc-`)
1. **Image Overlay Card** - Para perfiles con foto
2. **Icon Content Card** - Para servicios con características
3. **Product Card** - Para catálogos con precios
4. **Testimonial Card** - Para reseñas con rating
5. **Stats Card** - Para métricas importantes
6. **Event Card** - Para eventos con fechas

---

## 🎨 Paleta de colores

- **Principal**: `#00BCD1` (Turquesa)
- **Secundario**: `#44A08D` (Verde)
- **Texto**: `#333` (Gris oscuro)
- **Fondo**: `#f8f9fa` (Gris claro)

---

## 📱 Responsive Design

✅ **Completamente responsive**
- Desktop: Grid de 2-3 columnas
- Tablet: Grid de 2 columnas  
- Mobile: Single column
- Breakpoints: 768px y 480px

---

## 🔧 Personalización

### Cambiar colores
Busca y reemplaza en `unified-styles.css`:
- `#00BCD1` → Tu color principal
- `#44A08D` → Tu color secundario

### Añadir nuevos componentes
1. Usa el prefijo correspondiente (`re-`, `bd-`, `cc-`)
2. Sigue la estructura de naming existente
3. Mantén la consistencia visual

---

## 🛠️ Soporte técnico

### Problemas comunes
- **Estilos no se cargan**: Verifica la ruta del CSS
- **Conflictos visuales**: Asegúrate de usar los prefijos correctos
- **Responsive no funciona**: Revisa que no haya CSS conflictivo de WordPress

### Mejores prácticas
- Siempre usa las clases con prefijo
- No modifiques los estilos base de WordPress
- Utiliza el archivo CSS unificado únicamente

---

**🚀 ¡Tu sistema está listo para producción!**  
Todos los componentes son independientes, escalables y sin conflictos con WordPress. 