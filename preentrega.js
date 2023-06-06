// SE ARMA UN PROGRAMA QUE LE PIDE AL USUARIO UN PRESUPUESTO PARA LUEGO INGRESAR EL COSTO DE LOS PRODUCTOS QUE VA A COMPRAR Y LA CANTIDAD DE PRODUCTOS

function validarNumero(num) {
    while (isNaN(num)) {
        num = parseInt(prompt("Ingrese un nuevo valor para el producto nº" + i))
    }
    return num
}

function validarPresupuesto(num) {
    while (isNaN(num) || num <= 0) {
        num = parseInt(prompt("Ingrese un nuevo valor para el presupuesto"))
    }
    return num
}




// definimos variable para el total de suma de productos iniciando en 0 
let costoTotal = 0
let i = 1
let costoProducto = 0

// EL USUARIO DEBE INGRESAR EL PRESUPUESTO QUE TIENE, EL MISMO DEBE SER MAYOR A 0
let presupuesto = parseInt(prompt("Ingrese su presupuesto"))
validarPresupuesto(presupuesto)

// EL USUARIO INGRESA CUANTOS PRODUCTOS DESEA AGREGAR Y EL COSTO DE CADA UNO, DEJA DE AGREGAR PRODUCTOS CUANDO INGRESA "0"
// se utiliza do while porque siempre vamos a querer calcular al menos un produto.
do {
    costoProducto = parseInt(prompt("Ingrese el valor del producto nº " + i + " (0 PARA SALIR)"))
    validarNumero(costoProducto)
    costoTotal = costoTotal + costoProducto
    i++
    console.log(costoProducto + " " + costoTotal)
} while (costoProducto != 0)

// LE DA UN MENSAJE AL USUARIO PARA INFORMARLE SI LE DA EL PRESUPUESTO O NO LE DA. 
if (costoTotal > presupuesto) {
    let falta = costoTotal - presupuesto
    alert(`El presupuesto no alcanza, te faltan ${falta}`)
} else if (costoTotal == presupuesto) {
    alert("El presupuesto te da justo")
} else {
    let sobrante = presupuesto - costoTotal
    alert(`Te sobran ${sobrante}`)
}