const form = document.querySelector(".buy");
const compras = document.querySelector(".sales");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const precio = Number(data.precio);

    if(data.nombre.length<5){
        alert("El nombre debe tener minimo 5 caracteres");
        form.reset();
        return;
    }
    if(Number.isNaN(precio) || Number(data.precio)<=0){
        alert("Debe agregarse el precio");
        form.reset();
        return;
    }
    
    form.reset();
    addCompra(data);
})

function addCompra(compra){
    const compraContainer = document.createElement("div");
    const producto = document.createElement("h3");
    const comprador = document.createElement("h3");
    const precio = document.createElement("h2");
    const buttonContainer = document.createElement("div");
    const deleteBoton = document.createElement("button");
    const editBoton = document.createElement("button");

    compraContainer.setAttribute("class", "compra");
    buttonContainer.setAttribute("class", "buttons");

    producto.innerHTML = "Producto: "+compra.producto;
    comprador.innerHTML = "Comprador: "+compra.nombre;
    precio.innerHTML = "Precio: "+compra.precio;
    deleteBoton.innerHTML = "Eliminar";
    editBoton.innerHTML = "Editar";

    deleteBoton.addEventListener("click", ()=>{
        compras.removeChild(compraContainer);
    });

    editBoton.addEventListener("click", ()=>{
        form.nombre.value = compra.nombre;
        form.precio.value = compra.precio;
        form.producto.value = compra.producto;
        compras.removeChild(compraContainer);
    })

    compraContainer.appendChild(producto);
    compraContainer.appendChild(comprador);
    compraContainer.appendChild(precio);
    buttonContainer.appendChild(deleteBoton);
    buttonContainer.appendChild(editBoton);
    compraContainer.appendChild(buttonContainer);

    compras.appendChild(compraContainer);
}
