function getCart(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
}

async function getProducts(){
    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json();
    return data;
} 

async function printCartProducts(){
    const cart = getCart();
    const products = await getProducts();

    const cartNode = document.querySelector("#cart");
    const cartItemsNode = document.querySelector("#cart-items");
    cartItemsNode.innerHTML = "";

    cart.forEach(producto => {
        const product = products.find(p => p.id === producto.id);
        if(product){
            const containerItem = document.createElement("div");
            const containerItemDesc = document.createElement("div");
            const img = document.createElement("img");
            const idItem = document.createElement("p");
            const nameItem = document.createElement("h3");
            const priceItem = document.createElement("p");
            const quantityItem = document.createElement("p");
            const containerButtons = document.createElement("div");
            const deleteItem = document.createElement("button");

            containerItem.setAttribute("class", "cart-item");
            idItem.innerHTML = "ID: "+product.id;
            nameItem.innerHTML = product.title;
            priceItem.innerHTML = "$"+product.price;
            quantityItem.innerHTML = "Cantidad: "+producto.cantidad;
            deleteItem.innerHTML = "Eliminar producto";
            img.setAttribute("src", product.image);
            containerButtons.setAttribute("class", "buttons");

            deleteItem.addEventListener("click", ()=>{
                deleteProduct(product.id)
            });

            containerItemDesc.appendChild(idItem);
            containerItemDesc.appendChild(nameItem);
            containerItemDesc.appendChild(priceItem);
            containerItemDesc.appendChild(quantityItem);
            containerButtons.appendChild(deleteItem);
            containerItemDesc.appendChild(containerButtons);
            containerItem.appendChild(img);
            containerItem.appendChild(containerItemDesc);
            cartItemsNode.appendChild(containerItem);
        }
    });

}

function deleteProduct(id){
    const cart = getCart();
    const indexProduct = cart.findIndex(p=> p.id === id);
    if(indexProduct!==-1){
        cart.splice(indexProduct, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        printCartProducts();
    }

}

document.addEventListener("DOMContentLoaded", printCartProducts);