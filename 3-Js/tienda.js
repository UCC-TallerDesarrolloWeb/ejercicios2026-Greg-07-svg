const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

/**
 * mostrar el modal a partir de la tarjeta
 * @method mostrarMolar
 * @param {number} num id del elemento que se desea visualizar el modal
 */

mostrarModal = (num) => {
  document.getElementById("nombre-producto").innerText = productos[num].nombre;
  document.getElementById("descripcion-producto").innerText =
    productos[num].description;

  document.getElementById("modal").style.display = "block";
};

/**
 * mostrar el modal a partir de la tarjeta
 * @method cerrarMolar
 */

cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

/**
 * mostrar el catalogo de productos en main
 * @method mostrarCatalogo
 */

mostrarCatalogo = (newList = productos) => {
  let contenido = "";

  newList.forEach((producto, id) => {
    contenido += `<div>
                    <img src=" https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="cabezal cerrado">
                    <h3>${producto.nombre}</h3>
                    <p> ${producto.precio} </p>
                    <button type="button"  onclick="mostrarModal(${id})">ver detalle de producto</button>
                    <button type = "button" onclick = "agregarAlCarrito(${id})"> agregar al carrito </button>
                 </div>`;
  });

  document.getElementById("catalogo").innerHTML = contenido;
};

/**
 * Agrega a un array en el localstorage los productos seleccionados
 * @method agregarAlCarrito
 * @param {number} num - id del producto que se desea agregar
 */

agregarAlCarrito = (num) => {
  let carritoList = localStorage.getItem("carrito");

  console.log(carritoList);

  if (carritoList == [] || carritoList == null) {
    carritoList = [];
  } else {
    carritoList = JSON.parse(carritoList);
  }

  carritoList.push(num);
  console.log(carritoList);

  localStorage.setItem("carrito", JSON.stringify(carritoList));
};

/**
 * carga dinamicamente los productos que estan en el localstorage
 * @method mostrarCarrito
 */

mostrarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  let contenido = "";

  if (carritoList == null) {
    contenido = `<div>Su carrito de compra esta vacio</div>`;
  } else {
    carritoList = JSON.parse(carritoList);

    carritoList.forEach((num, id) => {
      contenido += `<div>
                    <h3>${productos[num].nombre}</h3>
                    <p>${productos[num].precio}</p>
                    <button type = 'button' onclick = "eliminarProducto(${id})">Eliminar producto</button>
                  </div>`;
    });

    contenido += `<button type = 'button' onclick = "vaciarCarrito()"> vaciar carrito </button>`;
  }

  document.getElementById("carrito").innerHTML = contenido;
};

/**
 * metodo para vaciar el carrito de compras, eliminando localstorage
 * @method vaciarCarrito
 */

let vaciarCarrito = () => {

  localStorage.removeItem("carrito");

  window.location.reload(); 

}

/**
 * Elimina un producto puntual del localstorage 
 * @param {number} id -id del array del localstorage  
 */

let eliminarProducto = (id) => {

  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList); 

  carritoList.splice(id, 1); 

  if(carritoList.length > 0){
    localStorage.setItem("carrito", JSON.stringify(carritoList));
  } else {
    localStorage.removeItem("carrito");
  } 

  window.location.reload(); 
}

/**
 * 
 */

filtrarProductos = () =>{

  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("minimo").value;
  let max = document.getElementById("maximo").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr= document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("doboks").checked;
  let newlist = productos; 

  if(searchWord){
    newlist = newlist.filter((prod) => prod.nombre.toLowerCase().includes(searchWord.toLowerCase())); 
    console.log("se aplico")
  }

  if(min){
    newlist = newlist.filter((prod) => prod.precio >= min)
    console.log("se aplico")
  }

  if(max){
    newlist = newlist.filter((prod) => prod.precio <= max)
  }

  if(marca != "Todas"){
    newlist = newlist.filter((prod) => prod.marca == marca)
  }

  let category = [];
  prot ? category.push("Protectores") : "";
  entr ? category.push("Entrenamiento"): "";
  dob ? category.push("Dobok"): "";

  if(category.length > 0){
    newlist = newlist.filter((prod) => category.includes(prod.categoria))
  }

  mostrarCatalogo(newlist); 

}
