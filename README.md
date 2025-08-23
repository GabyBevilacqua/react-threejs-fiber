# Proyecto 3D con React Three Fiber, Three.js y Drei

Este proyecto es una demostración del uso de **React Three Fiber (R3F)** y **Three.js** para crear experiencias 3D interactivas dentro de un entorno **React**. Incluye múltiples técnicas y herramientas para optimizar y facilitar el desarrollo de escenas 3D en la web.

---

## 🚀 Tecnologías utilizadas

- **React** – Librería base para construir interfaces de usuario.
- **Three.js** – Motor gráfico 3D para renderizado WebGL.
- **React Three Fiber (R3F)** – Renderizador declarativo para usar Three.js con React.
- **Drei** – Colección de utilidades listas para usar en proyectos con R3F (cámaras, controles, helpers, etc.).
- **Leva** – Librería para crear paneles de control interactivos y modificar parámetros en tiempo real.

---

## 🛠️ Conceptos y funcionalidades implementadas

### **Programación Declarativa**
Se utiliza un enfoque declarativo para describir la escena 3D como parte del árbol de componentes de React, facilitando la composición, reutilización y mantenimiento del código.

### **Geometrías y Materiales**
Uso de diferentes **geometrías** (`boxGeometry`, `sphereGeometry`, etc.) y **materiales** (`meshStandardMaterial`, `meshBasicMaterial`) para crear objetos personalizados.

### **Luces y Sombras**
Configuración de **luces** (`ambientLight`, `directionalLight`, `pointLight`) y activación de **sombras** para dar realismo a la escena.

### **Environment Maps**
Implementación de mapas HDRI y texturas para entornos realistas mediante `useLoader` y `Environment` (de Drei).

### **Carga de Modelos 3D**
- **useLoader**: Para cargar texturas y otros assets.
- **useGLTF**: Para cargar modelos en formato GLTF/GLB.
- **GLTFJSX**: Conversión de modelos GLTF a componentes JSX optimizados.

### **Hooks de React Three Fiber**
- **useRef**: Referencias a objetos 3D para manipulación directa.
- **useEffect**: Lógica que depende del ciclo de vida de React.
- **useFrame**: Animaciones frame-by-frame sincronizadas con el render loop.
- **useState**: Estados interactivos (ej. hover, clic, toggles).
- **useMemo**: Optimización de cálculos y objetos 3D pesados.

### **Interactividad y Eventos**
Manejo de eventos como `onPointerOver`, `onPointerOut`, `onPointerDown` para interacciones con los objetos en la escena.

### **Herramientas de desarrollo**
- **OrbitControls (Drei)**: Control de cámara interactivo (rotación, zoom, paneo).
- **axesHelper & gridHelper**: Referencias visuales para depuración.
- **stats Panel**: Panel de rendimiento para medir FPS y optimización.

---

## 🔧 Instalación y uso

npm install

npm start

