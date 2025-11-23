# 📦 pedidos-grupo-17

Este proyecto es un **sistema de gestión de pedidos**, desarrollado en el contexto académico (grupo 17). Representa una aplicación para crear, consultar, actualizar y eliminar pedidos, lo que lo convierte en un buen ejemplo de sistema CRUD (Crear, Leer, Actualizar, Eliminar).

---

## 🧰 Tecnologías (suposiciones)

> ⚠️ Si alguna parte no es correcta, puedes modificarla según tu implementación real.

- **Lenguaje principal**: Java (u otro, cambiar si es diferente)  
- **Base de datos**: Posible uso de MySQL, PostgreSQL o SQLite  
- **Framework / Librerías**: JDBC (o el que hayas usado)  
- **Interfaz de usuario**: Consola, aplicación de escritorio o web, según tu proyecto  

---

## 🧭 Funcionalidades

- Crear un nuevo pedido (cliente, producto, cantidad, precio)  
- Listar todos los pedidos existentes  
- Actualizar el estado de un pedido (por ejemplo, “pendiente”, “procesado”, “entregado”)  
- Eliminar pedidos  
- (Opcional) Filtrar pedidos por diferentes criterios  
- Persistencia de datos a través de base de datos  

---

## 📂 Estructura del proyecto (ejemplo)

pedidos-grupo-17/

│

├── src/

│ ├── main/

│ │ ├── java/

│ │ │ └── com/miempresa/pedidos/

│ │ │ ├── Pedido.java

│ │ │ ├── Cliente.java

│ │ │ ├── PedidoService.java

│ │ │ └── App.java

│ └── resources/

│ └── application.properties

│

└── database/

└── pedidos.sql

## 🚀 Cómo ejecutar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tatiana1104/pedidos-grupo-17.git
Entra en la carpeta del proyecto:

   ```bash
   cd pedidos-grupo-17
   ```

Entra en la carpeta del proyecto:
Si usas Maven (o similar), instala dependencias:

```bash
mvn install
```
Configura la base de datos:

Importa database/pedidos.sql (si lo tienes) en tu sistema gestor de base de datos.

Ajusta la conexión (URL, usuario, contraseña) en application.properties u otro archivo de configuración.

Ejecuta la aplicación:

```bash
mvn exec:java -Dexec.mainClass="com.miempresa.pedidos.App"
```
O abre la clase principal (App.java) desde tu IDE y ejecútala manualmente.

📈 Ejemplo de uso
Al iniciar la aplicación, podrías ver un menú con opciones como:

1. Crear pedido
2. Ver todos los pedidos
3. Actualizar estado
4. Eliminar pedido
5. Salir

Cada pedido que crees se almacena en la base de datos, por lo que al cerrar y volver a abrir la aplicación, los pedidos persistirán.

💡 Lecciones aprendidas / habilidades desarrolladas
Implementación de un sistema CRUD con buenas prácticas.

Conexión de aplicación con base de datos (persistencia).

Trabajo en equipo (grupo 17): coordinación, diseño colaborativo y división de tareas.

Modelado de entidades como Pedido y Cliente.

🔭 Posibles mejoras futuras
Agregar autenticación para clientes o administradores.

Crear una interfaz web para gestionar los pedidos.

Añadir notificaciones cuando cambie el estado del pedido.

Generar reportes o gráficos estadísticos (pedidos por cliente, por fecha, etc.).

Implementar un historial de cambios de estado para cada pedido.

👩‍💻 Contribuidoras
J. Tatiana Vargas — parte del grupo 17

(Otros miembros del grupo, si aplica)

📫 Contacto
GitHub: tatiana1104

Email: juddytatianavs@hotmailcom

