Objetivo
Evaluar los conocimientos prácticos de Angular en temas clave como directivas, componentes, ciclos de vida, módulos, servicios de enrutamiento, peticiones HTTP y observables.

---

Sección 1: Directivas
Crea un componente que reciba un array de objetos productos con las propiedades nombre y precio.
Muestra los productos en una lista usando NgFor.
Si el array está vacío, muestra un mensaje "No hay productos disponibles" utilizando NgIf.

Añade una funcionalidad que resalte los productos con precio mayor a 100 aplicando una clase CSS específica con NgClass.
Cambia dinámicamente el color del texto según el precio del producto usando NgStyle (verde si es menor a 50, rojo si es mayor a 100).

---

Sección 2: Componentes
Crea un componente llamado ProductoCard que reciba un producto como @Input y muestre su nombre y precio en formato de tarjeta.
Usa este componente dentro de un componente principal para renderizar la lista de productos.

---
Sección 3: Ciclos de Vida de un Componente
Crea un componente que use al menos los métodos ngOnInit, ngOnChanges y ngOnDestroy para:
Inicializar datos en ngOnInit.
Detectar cambios en las propiedades de entrada (@Input) con ngOnChanges.
Limpiar recursos (como suscripciones a observables) en ngOnDestroy.

---

Sección 4: Módulos
Crea un módulo llamado ProductosModule que contenga:
Un componente principal ProductosListComponent.
El componente ProductoCard mencionado anteriormente.
Asegúrate de exportar los componentes necesarios y de importar el módulo en el módulo raíz de la aplicación.

---

Sección 5: Servicios y Router
Crea un servicio ProductoService que contenga un método para obtener una lista de productos simulados (puedes usar un array estático).

Configura una ruta para el componente ProductosListComponent usando el router de Angular.
Crea un enlace de navegación (<a routerLink="/productos">) para acceder al listado.

---

Sección 6: Peticiones HTTP Client
Usa el servicio ProductoService para realizar una petición HTTP GET a un endpoint simulado (https://fakestoreapi.com/products) y obtener la lista de productos.
Muestra los productos obtenidos en el componente ProductosListComponent.

Implementa un manejo de errores básico para mostrar un mensaje al usuario en caso de que falle la petición.
