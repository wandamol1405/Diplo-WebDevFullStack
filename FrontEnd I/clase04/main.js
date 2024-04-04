const form = document.querySelector("form");
const clientes = document.querySelector("section");
const nameClient = document.querySelector("#nombre");
const dniClient = document.querySelector("#dni");
const button = document.querySelector("button");

form.addEventListener("submit", (event)=>{
    console.log("formulario enviado");
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    addClient(data);
    form.reset();
})
function addClient(client){
    const clientContainer = document.createElement("div");
    const nombre = document.createElement("h1");
    const dni = document.createElement("h2");
    const tipo = document.createElement("p");

    clientContainer.setAttribute("class", "clientes");

    nombre.innerHTML="Nombre: "+client.nombre;
    dni.innerHTML="DNI: "+client.dni;
    tipo.innerHTML="Tipo de cliente: "+client.tipoCliente;

    clientContainer.appendChild(nombre);
    clientContainer.appendChild(dni);
    clientContainer.appendChild(tipo);
    clientes.appendChild(clientContainer);
}

form.addEventListener("input", (event)=>{
    const value = event.target.value;
    
    if((event.target === nameClient && value.length<6)||(event.target === dniClient && value.length!==8)){
        event.target.classList.add("is-invalid");
    }
    else if(event.target === nameClient || event.target === dniClient){
        event.target.classList.remove("is-invalid");
    }

    if(!nameClient.value || !dniClient.value || form.querySelector(".is-invalid")){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
});