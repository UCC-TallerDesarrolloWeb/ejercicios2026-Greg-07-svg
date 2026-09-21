/**
 * Descripción
 * @method convertirUnidades
 * @param {string} id - id del elemento input en html
 * @param {int} value - valor ingresado en el input
 */

convertirUnidades = (id, valor) => {

    let metros, pulgadas, pies, yardas

    valor = valor.replace(",","."); 

    if(isNaN(valor)){
        alert("se ingreso un valor incorrecto donde deberia haber "+id); 

        metros = "" ; 

        pulgadas = "" ; 

        pies = "" ; 

        yardas = "";

    } else if(id === "metro"){
        metros = valor;
        pulgadas = valor * 39.3701; 

        pies = valor * 3.28084 ; 

        yardas = valor * 1.09361; 

    } else if(id === "pulgada"){

        pulgadas = valor;

        metros = valor * 0.0254

        pies = valor * 0.08333333

        yardas = valor * 0.02777778

    } else if(id === "pie"){

        pies = valor;

        metros = valor * 0.3048

        yardas = valor * 0.3333333

        pulgadas = valor * 12; 
        
    } else if(id === "yarda"){

        yardas = valor;

        metros = valor * 0.9144

        pulgadas = valor * 36; 

        pies = valor * 3; 
    }
    document.getElementById("metro").value = Math.round(metros * 100) / 100;
    document.getElementById("pulgada").value = Math.round(pulgadas * 100) / 100;
    document.getElementById("pie").value = pies.toFixed(2);
    document.getElementById("yarda").value = yardas.toFixed(2);

}


/**
 * Descripción
 * @method convertirGR
 * @param {string} id - id del elemento input en html
 */

function convertirGR(id){

    let grad , rad;

    if (id === "grados"){
        grad = document.getElementById("grados").value ;
        rad = grad * Math.PI / 180; ;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI ; 
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad; 
}


/**
 * Descripción
 * @method mostrarOcultar
 * @param {string} valor - valor del ud del radio button seleccionado
 */
mostrarOcultar = (valor) => {

    const displayDiv = (valor === "val_mostrar" ? 'block' : 'none')

    document.getElementById("unDiv").style.display = displayDiv; 

}


/**
 * Descripción calcula la suma entre dos numeros y pone el valor en otro input 
 * @method calcularSuma
 */
calcularSuma = () => {

    let sum1, sum2 

    sum1 = Number(document.getElementById("nums1").value)
    sum2 = Number(document.getElementById("nums2").value)



    document.getElementById("totalS").value = sum1 + sum2; 

} 

/**
 * Descripción calcula la suma entre dos numeros y pone el valor en otro input 
 * @method calcularResta
 */
calcularResta = () => {

    let res1, res2 

    sum1 = Number(document.getElementById("nums1").value)
    sum2 = Number(document.getElementById("nums2").value)



    document.getElementById("totalS").value = sum1 + sum2; 

} 

/**
 * Descripción calcula la suma entre dos numeros y pone el valor en otro input 
 * @method calcularSuma
 */
calcularMult = () => {

    let sum1, sum2 

    sum1 = Number(document.getElementById("nums1").value)
    sum2 = Number(document.getElementById("nums2").value)



    document.getElementById("totalS").value = sum1 + sum2; 

} 

/**
 * Descripción calcula la suma entre dos numeros y pone el valor en otro input 
 * @method calcularSuma
 */
calcularDiv = () => {

    let sum1, sum2 

    sum1 = Number(document.getElementById("nums1").value)
    sum2 = Number(document.getElementById("nums2").value)



    document.getElementById("totalS").value = sum1 + sum2; 

} 
