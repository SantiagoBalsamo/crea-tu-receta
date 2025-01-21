# Cocinando tu Receta 🍳

Bienvenido a **Cocinando tu Receta**, una aplicación interactiva donde puedes crear tus propias recetas personalizadas, ajustar cantidades de ingredientes y obtener un "puntaje nutricional" en tiempo real. ¡La cocina nunca fue tan divertida y fácil! 😄

---

## ✨ Características Clave

- **Página principal**:
  - Introducción breve con un botón para comenzar a crear recetas. 🏠

- **Panel de creación de recetas**:
  - Lista interactiva de ingredientes clasificados (proteínas, carbohidratos, vegetales, etc.). 🥩🥦🍞
  - Funcionalidad de arrastrar y soltar para agregar ingredientes a tu receta. ✨
  - Ajuste de cantidades y cálculo automático del puntaje nutricional. 📊

- **Historial de recetas**:
  - Guarda tus creaciones en `localStorage` y consúltalas cuando quieras. 📋

---

## 📂 Estructura de la Aplicación

La navegación se maneja mediante estados locales en el componente principal (`App.jsx`), sin necesidad de React Router.

### Jerarquía de Componentes

1. **App.jsx**:
   - Maneja las vistas principales: `Home`, `Crear Receta`, y `Historial de Recetas`.
   - Administra la lista global de recetas guardadas.

2. **Componentes secundarios**:
   - **Home.jsx**: Introducción y botón para comenzar.
   - **CreateRecipe.jsx**:
     - **IngredientList.jsx**: Lista de ingredientes interactiva.
     - **RecipeBuilder.jsx**: Panel para ajustar ingredientes seleccionados.
     - **RecipeSummary.jsx**: Resumen de la receta y puntaje nutricional.
   - **RecipeHistory.jsx**:
     - **RecipeCard.jsx**: Tarjetas individuales para cada receta guardada.

---

## 🛠️ Tecnologías Utilizadas

- **React**: Construcción de componentes y gestión de estados locales.
- **Hooks**: Uso de `useState` y `useEffect` para manejar estados y efectos secundarios.
- **CSS**: Diseño personalizado y estilizado.
- **localStorage**: Persistencia de datos para el historial de recetas.

---

## ⚙️ Estados y Funcionalidades

### 🌟 Estados Principales (`useState`)

1. **Vista actual**:
   - `"home"`, `"create-recipe"`, `"recipe-history"`.

2. **Crear Receta**:
   - Lista de ingredientes seleccionados.
   - Cantidades ajustadas.
   - Nombre de la receta.
   - Puntaje nutricional calculado.

3. **Historial**:
   - Lista de recetas guardadas.

### ⏳ Efectos Secundarios (`useEffect`)

1. **Cálculo del puntaje nutricional**:
   - Se actualiza dinámicamente al modificar ingredientes o cantidades.

2. **Persistencia del historial**:
   - Guarda y carga recetas desde `localStorage`.

---

## 🔄 Flujo de Datos

1. **Estado principal**:
   - Manejado en `App.jsx` para controlar la vista actual y las recetas guardadas.

2. **Estados específicos**:
   - `CreateRecipe.jsx` maneja los ingredientes seleccionados, cantidades y puntaje nutricional.

3. **Comunicación entre componentes**:
   - Props para pasar datos.
   - Eventos para actualizar estados desde componentes hijos.

---

## 📦 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cocinando-tu-receta.git
   cd cocinando-tu-receta
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación:
   ```bash
   npm start
   ```

4. Accede a la aplicación en tu navegador:
   - [http://localhost:3000](http://localhost:3000)

---

## 🌐 Despliegue en Vercel

La aplicación está desplegada en Vercel y disponible en el siguiente enlace:
[**Cocinando tu Receta - Demo**](https://cocinando-tu-receta.vercel.app)

---

## 🎨 Contribuciones

¡Contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.

---

## 🎉 Agradecimientos

Gracias a [UTN](https://www.utn.edu.ar) por la oportunidad de desarrollar este proyecto como parte del curso de **Front-End con React**. ¡Espero que disfrutes esta aplicación tanto como yo disfruté construyéndola! 📚

---

© 2024 Cocinando tu Receta. Todos los derechos reservados.


