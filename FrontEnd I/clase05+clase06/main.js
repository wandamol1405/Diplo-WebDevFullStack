async function getProducts(){
    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json();
    return data;
} 


const printProducts = async () =>{
    const products = await getProducts();
    console.log(products);

    const productsContainer = document.querySelector("#products");
    products.forEach((product)=>{
        const container = document.createElement("div");
        const imagen = document.createElement("img");
        const nombre = document.createElement("h2");
        const precio = document.createElement("h3");
        const id = document.createElement("p");
        const agregarCarrito = document.createElement("button");

        imagen.setAttribute("src", product.image);
        container.setAttribute("class", "container");
        nombre.innerHTML = product.title;
        precio.innerHTML = "$"+product.price;
        id.innerHTML = "id: "+product.id;
        agregarCarrito.innerHTML = "Agregar al carrito";

        agregarCarrito.addEventListener("click", ()=>{
            saveLocalStorage(product);
        });

        container.appendChild(imagen);
        container.appendChild(nombre);
        container.appendChild(precio);
        container.appendChild(id);
        container.appendChild(agregarCarrito);
        productsContainer.appendChild(container);

    })

} 

printProducts();
countCart();

function saveLocalStorage(producto){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const indexItem = cart.findIndex((cartProduct)=> cartProduct.id === producto.id);
    if(indexItem!==-1){
        cart[indexItem].cantidad = (cart[indexItem].cantidad || 1 ) + 1;
    }else{
        producto.cantidad = 1;
        cart.push(producto);
    }
    window.localStorage.setItem("cart", JSON.stringify(cart));
    countCart();
}

function countCart(){
    const totalCarrito = document.querySelector("#carrito-total");
    const cart = JSON.parse(localStorage.getItem("cart"));
    const total = cart.reduce((total, product)=>{
        return total + product.cantidad;
    },0);
    totalCarrito.innerHTML=total;
}