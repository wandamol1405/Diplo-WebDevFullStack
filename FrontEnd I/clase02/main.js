const products = [
    {
      id: "32FE-395",
      nombre: "Disco ssd",
    },
    {
      id: "32FE-396",
      nombre: "Memoria ram",
    },
    {
      id: "32FE-397",
      nombre: "Disco duro",
    },
    {
      id: "32FE-398",
      nombre: "Procesador",
    },
  ];

const container = document.querySelector("#product_container");

  products.forEach(product=>{
    let articleContainer = document.createElement("article");
    articleContainer.setAttribute("id", "product_card")
    let title = document.createElement("h3");
    let paragraph = document.createElement("p");
    let button = document.createElement("button");

    title.innerHTML = product.nombre;
    paragraph.innerHTML = product.id;
    button.innerHTML = "Ver detalle";

    articleContainer.appendChild(title);
    articleContainer.appendChild(paragraph);
    articleContainer.appendChild(button);
    
    container.appendChild(articleContainer);
  })