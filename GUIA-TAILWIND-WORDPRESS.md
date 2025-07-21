# 🎨 Guía Completa: Cómo Usar Tailwind CSS en WordPress

## 📋 Tabla de Contenidos
1. [¿Qué es Tailwind CSS?](#qué-es-tailwind-css)
2. [Métodos de Instalación](#métodos-de-instalación)
3. [Método 1: CDN (Más Fácil)](#método-1-cdn-más-fácil)
4. [Método 2: Plugin de WordPress](#método-2-plugin-de-wordpress)
5. [Método 3: Compilación Local (Avanzado)](#método-3-compilación-local-avanzado)
6. [Configuración de Colores Personalizados](#configuración-de-colores-personalizados)
7. [Uso con Elementor](#uso-con-elementor)
8. [Mejores Prácticas](#mejores-prácticas)
9. [Troubleshooting](#troubleshooting)

---

## ¿Qué es Tailwind CSS?

Tailwind CSS es un framework de CSS que te permite diseñar directamente en el HTML usando clases predefinidas. En lugar de escribir CSS personalizado, usas clases como `bg-blue-500`, `text-white`, `rounded-lg`, etc.

### Ventajas:
- ✅ Desarrollo más rápido
- ✅ Diseño consistente
- ✅ Tamaño de archivo optimizado
- ✅ Fácil mantenimiento
- ✅ Responsive por defecto

---

## Métodos de Instalación

Hay 3 formas principales de usar Tailwind en WordPress:

| Método | Dificultad | Ventajas | Desventajas |
|--------|------------|----------|-------------|
| CDN | 🟢 Fácil | Instalación inmediata | Archivo más grande |
| Plugin | 🟡 Medio | Fácil configuración | Dependencia de plugin |
| Compilación | 🔴 Avanzado | Máximo control | Requiere conocimientos técnicos |

---

## Método 1: CDN (Más Fácil)

### Paso 1: Agregar el CDN al tema

Abre el archivo `functions.php` de tu tema y agrega:

```php
function agregar_tailwind_css() {
    wp_enqueue_script(
        'tailwind-css',
        'https://cdn.tailwindcss.com',
        array(),
        '3.4.0',
        false
    );
}
add_action('wp_enqueue_scripts', 'agregar_tailwind_css');
```

### Paso 2: Configurar colores personalizados

Agrega este script en el `<head>` de tu tema:

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'primary': '#00BCD1',
                    'secondary': '#44A08D',
                }
            }
        }
    }
</script>
```

### Paso 3: Agregar al header.php

En tu archivo `header.php`, agrega después de la etiqueta `<head>`:

```php
<?php if (!is_admin()): ?>
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'primary': '#00BCD1',
                    'secondary': '#44A08D',
                },
                fontFamily: {
                    'sansita': ['Sansita Swashed', 'cursive'],
                }
            }
        }
    }
</script>
<?php endif; ?>
```

---

## Método 2: Plugin de WordPress

### Plugins Recomendados:

1. **Tailwind CSS for WordPress** (Gratuito)
2. **Full Site Editing Tailwind** (Premium)

### Instalación con Plugin:

1. Ve a **Plugins → Añadir nuevo**
2. Busca "Tailwind CSS"
3. Instala y activa el plugin
4. Ve a **Ajustes → Tailwind CSS**
5. Configura tus colores personalizados:

```json
{
  "theme": {
    "extend": {
      "colors": {
        "primary": "#00BCD1",
        "secondary": "#44A08D"
      }
    }
  }
}
```

---

## Método 3: Compilación Local (Avanzado)

### Requisitos:
- Node.js instalado
- Acceso al servidor
- Conocimientos de terminal

### Paso 1: Inicializar proyecto

```bash
cd tu-tema-wordpress
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

### Paso 2: Configurar tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./template-parts/**/*.php",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00BCD1',
        'secondary': '#44A08D',
      },
      fontFamily: {
        'sansita': ['Sansita Swashed', 'cursive'],
      }
    },
  },
  plugins: [],
}
```

### Paso 3: Crear archivo CSS de entrada

Crea `src/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Componentes personalizados */
@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
  }
  
  .card {
    @apply bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2;
  }
}
```

### Paso 4: Script de compilación

Agrega a `package.json`:

```json
{
  "scripts": {
    "build-css": "tailwindcss -i ./src/tailwind.css -o ./style.css --watch",
    "build-production": "tailwindcss -i ./src/tailwind.css -o ./style.css --minify"
  }
}
```

### Paso 5: Compilar

```bash
npm run build-css
```

---

## Configuración de Colores Personalizados

### Para tus componentes existentes:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Colores de tu marca
                'primary': '#00BCD1',
                'secondary': '#44A08D',
                
                // Colores de estado
                'success': '#28a745',
                'warning': '#ffc107',
                'danger': '#dc3545',
                'info': '#17a2b8',
                
                // Grises personalizados
                'gray-custom': {
                    50: '#f8f9fa',
                    100: '#e9ecef',
                    200: '#dee2e6',
                    300: '#ced4da',
                    400: '#adb5bd',
                    500: '#6c757d',
                    600: '#495057',
                    700: '#343a40',
                    800: '#212529',
                    900: '#1a1e23'
                }
            },
            fontFamily: {
                'sansita': ['Sansita Swashed', 'cursive'],
                'body': ['Segoe UI', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            }
        }
    }
}
```

---

## Uso con Elementor

### Opción 1: Widget HTML personalizado

1. Arrastra un widget **HTML** de Elementor
2. Pega el código HTML con clases de Tailwind
3. Las clases funcionarán automáticamente si Tailwind está instalado

### Opción 2: CSS personalizado por página

En **Ajustes avanzados → CSS personalizado** de la página:

```css
/* Asegurar que Tailwind funcione en Elementor */
.elementor-widget-html .bg-primary {
    background-color: #00BCD1 !important;
}

.elementor-widget-html .text-white {
    color: white !important;
}
```

### Opción 3: Plugin Elementor + Tailwind

Instala plugins como:
- **ElementsKit** (tiene soporte para Tailwind)
- **Essential Addons** (compatible con frameworks CSS)

---

## Mejores Prácticas

### 1. Organización de Clases

```html
<!-- ❌ Malo: muy largo -->
<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-md mx-auto border border-gray-200">

<!-- ✅ Bueno: componente reutilizable -->
<div class="card max-w-md mx-auto">
```

### 2. Crear Componentes Personalizados

```css
@layer components {
  .card-pescado {
    @apply bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl;
    @apply transition-all duration-300 hover:-translate-y-2;
    @apply border border-gray-100;
  }
  
  .btn-pescado {
    @apply bg-gradient-to-r from-primary to-secondary;
    @apply text-white px-6 py-3 rounded-lg font-semibold;
    @apply hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
  }
}
```

### 3. Responsive Design

```html
<!-- Mobile first approach -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 sm:p-6 lg:p-8">
    <!-- Contenido -->
  </div>
</div>
```

### 4. Compatibilidad con WordPress

```php
// En functions.php - Evitar conflictos
function desactivar_tailwind_en_admin() {
    if (is_admin()) {
        return;
    }
    wp_enqueue_script('tailwind-css', 'https://cdn.tailwindcss.com');
}
add_action('wp_enqueue_scripts', 'desactivar_tailwind_en_admin');
```

---

## Troubleshooting

### Problema 1: Tailwind no funciona

**Solución:**
1. Verifica que el CDN se carga correctamente
2. Revisa la consola del navegador por errores
3. Asegúrate de que no hay conflictos con otros CSS

### Problema 2: Conflictos con el tema

**Solución:**
```css
/* Agregar especificidad */
.tailwind-container .bg-primary {
    background-color: #00BCD1 !important;
}

.tailwind-container .text-white {
    color: white !important;
}
```

### Problema 3: Elementor sobrescribe estilos

**Solución:**
```css
/* En CSS personalizado de Elementor */
.elementor-element .bg-primary {
    background-color: #00BCD1 !important;
}

.elementor-element .rounded-2xl {
    border-radius: 1rem !important;
}
```

### Problema 4: Clases no aparecen en producción

**Solución:**
Asegúrate de que todas las clases estén en el archivo `content` de la configuración:

```javascript
module.exports = {
  content: [
    "./wp-content/themes/tu-tema/**/*.php",
    "./wp-content/plugins/elementor/**/*.php",
    "./**/*.html"
  ],
  // ...
}
```

---

## 🚀 Pasos Rápidos para Empezar

### Para principiantes (5 minutos):

1. Abre `functions.php` de tu tema
2. Agrega el código del CDN (Método 1)
3. Copia cualquier componente de `cards-tailwind-components.html`
4. Pégalo en un widget HTML de Elementor
5. ¡Ya tienes Tailwind funcionando!

### Para usuarios avanzados:

1. Instala el plugin de Tailwind
2. Configura tus colores personalizados
3. Crea componentes reutilizables
4. Optimiza para producción

---

## 📁 Archivos de Referencia

- `cards-tailwind-components.html` - Todos los componentes con Tailwind
- `cards-html-components.html` - Versión con CSS personalizado
- `unified-styles.css` - CSS unificado (alternativa a Tailwind)

---

## 🎯 Próximos Pasos

1. ✅ Instala Tailwind usando el método que prefieras
2. ✅ Prueba los componentes de la biblioteca
3. ✅ Personaliza los colores para tu marca
4. ✅ Crea tus propios componentes
5. ✅ Integra con Elementor

¡Ya tienes todo lo necesario para usar Tailwind CSS en WordPress! 🎉 