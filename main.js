

const Item = function (codigo,tipo,aplicacion,cantidad) {
    this.codigo = codigo
    this.tipo = tipo
    this.aplicacion = aplicacion
    this.cantidad = cantidad
}

// FUNCION PARA BUSCAR POR CODIGO ; DEVUELVE EL ITEM O UNDEFINED

function buscarCodigo () {
    let entrada = parseInt(prompt(`Ingresa el codigo.`))
    if(isNaN(entrada)){entrada = parseInt(prompt(`Debes ingresar un numero.`))}
    let item = stock.find(item => item.codigo === entrada)
    if (item != undefined){
        console.table(item)
        return item
    }else {
        console.log(`No se encontro el codigo ${entrada}`)
    }
    
}

//FUNCION QUE BUSCA POR APLICACION Y PIDE EL CODIGO DESEADO; DEVUELVE EL ITEM O UNDEFINED

function buscarAplicacion () {
    let entrada = prompt(`Ingresa la aplicacion`).toUpperCase().trim()
    let item = stock.filter(item => item.aplicacion === entrada)
    if (item.length > 0){
        console.table(item)

        let conf = confirm(`Deseas seleccionar un codigo?`)
        if (conf){
        let code = parseInt(prompt(`Ingresa el codigo deseado`))
        if(isNaN(code)){code = parseInt(prompt(`Debes ingresar un numero.`))}
        let resultado = stock.find(item => item.codigo === code)
            if (resultado != undefined) {
                console.table(resultado)
                return resultado
            } else {console.log(`No se encontro el codigo ${code}`)}
        }else return } else {console.log(`No se encontro la aplicacion ${entrada}`)}
}

//FUNCION QUE AGREGA STOCK O FILTROS NUEVOS

function agregarFiltro() {

    let entrada = parseInt(prompt(`Ingresa el codigo del filtro`))
        if(isNaN(entrada)){entrada = parseInt(prompt(`Debes ingresar un numero.`))}
    let verif = stock.some(item => item.codigo === entrada)
    if (verif) {
        let item = stock.find(item => item.codigo === entrada)
        let cant = parseInt(prompt(`Ingresa la cantidad de filtros`))
        if(isNaN(cant)){cant = parseInt(prompt(`Debes ingresar un numero.`))}
        item.cantidad += cant
        console.table(item)
    }else {
    console.log(`No se encontro el codigo ${entrada}, agregando nuevo filtro.`)
    let tipo = prompt(`Ingresa el tipo del filtro`).toUpperCase()
    let aplicacion = prompt(`Ingresa la aplicacion`).toUpperCase()
    let cantidad = parseInt(prompt(`Ingresa la cantidad`))
    if(isNaN(cantidad)){cantidad = parseInt(prompt(`Debes ingresar un numero.`))}

    if ((tipo == ``) || (aplicacion == ``) || (isNaN(cantidad))) {
        console.log(`Debes ingresar todos los datos.`)
        return
    }else {

    let item = new Item (entrada,tipo,aplicacion,cantidad)
    stock.push(item)
    console.table(item)
}
}
}

//DECLARACION DE ARRAY Y SIMULACION DE STOCK

const stock = []

let item1 = new Item (145,`FILTRO DE AIRE`,`VW`,20)
let item2 = new Item (247,`FILTRO DE ACEITE`,`VW`,15)
let item3 = new Item (345,`FILTRO DE NAFTA`,`VW`,10)
let item4 = new Item (135,`FILTRO DE AIRE`,`GM`,20)
let item5 = new Item (237,`FILTRO DE ACEITE`,`GM`,15)
let item6 = new Item (335,`FILTRO DE NAFTA`,`GM`,10)
let item7 = new Item (125,`FILTRO DE AIRE`,`PG`,20)
let item8 = new Item (227,`FILTRO DE ACEITE`,`PG`,15)
let item9 = new Item (325,`FILTRO DE NAFTA`,`PG`,10)
let item10 = new Item (115,`FILTRO DE AIRE`,`RN`,20)
let item11 = new Item (217,`FILTRO DE ACEITE`,`RN`,15)
let item12 = new Item (315,`FILTRO DE NAFTA`,`RN`,10)

stock.push(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12)


//

alert(`BIENVENIDO A STOCK DE FILTROS`)

let opcion 

do {
    opcion = prompt (`Ingresa la ocpion que desees\n 1 = Buscar filtros\n 2 = Agregar filtros\n 3 = Mostrar stock completo \n esc = SALIR\n DEBES ABRIR LA CONSOLA `).toLowerCase()

        switch (opcion) {
            case '1':
                let como = prompt(`Ingresa la opcion que desees.\n 1= Buscar por codigo.\n 2 = Buscar por aplicacion.\n 3 = ATRAS`)
                if (como == `1`) {
                    let item = buscarCodigo()
                    if (item != undefined) {
                        let accion = confirm(`Queres bajar 1 del stock?`)
                        if (accion) {
                            item.cantidad --
                            console.table(item)
                        } 
                    } 
                }else if (como == `2`) {
                    let item = buscarAplicacion()
                    if (item != undefined) {
                        let accion = confirm(`Queres bajar 1 del stock?`)
                        if (accion) {
                            item.cantidad --
                            console.table(item)
                            } 
                        }
                    }
                break
                
                case `2`:
                    agregarFiltro()
                break

                case `3`:
                    console.table(stock)
                    break
                

        }

} while ( opcion != `esc`)



