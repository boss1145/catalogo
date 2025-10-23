document.addEventListener("DOMContentLoaded", () => {
   const contenedor = document.getElementById("productos");

    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                const item = document.createElement("div");
                item.classList.add("producto");

                item.innerHTML = `
                    <img src="${producto.imagen || 'placeholder.png'}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>Precio:</strong> $${producto.precio}</p>
                `;

                contenedor.appendChild(item);
            });
        })
        .catch(error => {
            console.error("Error al cargar los productos:", error);
            contenedor.innerHTML = "<p>Error al cargar el catálogo.</p>";
        });
});

