
//Punto 1

let comida = ["Bread", "Milk", "Cheese", "Hummus", "Noodles"]
console.log(comida)

//Punto 2

let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
console.log(diasSemana)

//Punto 3

let informacion = [
    {
        "Nombre": "Juan",
        "Apellido":"Sanchez",
        "Telefono":"134568",
        "Edad":"27"
    },

    {
        "Nombre": "Pepe",
        "Apellido":"Cortez",
        "Telefono":"1654658",
        "Edad":"28"
    },
    
    {
        "Nombre": "Lala",
        "Apellido":"Madero",
        "Telefono":"564558",
        "Edad":"29"
    },

    {
        "Nombre": "Juls",
        "Apellido":"Pardo",
        "Telefono":"121555658",
        "Edad":"20"
    },

    {
        "Nombre": "Carlos",
        "Apellido":"Martinez",
        "Telefono":"165454151",
        "Edad":"30"
    },

]

console.log(informacion)


// Punto 4

let estudiantes = [
    {
        "Nombre":"Pablo",
        "Apellido":"Rios",
        "Telefono":"13456",
        "Edad":"10",
        "Materias":["Matematicas", "Fisica"],
        "Hobbies":["Leer", "Escribir"]
    },

    {
        "Nombre":"Jorge",
        "Apellido":"Solis",
        "Telefono":"134565151",
        "Edad":"11",
        "Materias":["español", "ingles", "Matematicas"],
        "Hobbies":["Leer", "Escribir", "Dibujar"]
    },

    {
        "Nombre":"Marcos",
        "Apellido":"Leon",
        "Telefono":"1345165156",
        "Edad":"15",
        "Materias":["Biologia", "Fisica"],
        "Hobbies":["Dormir", "Escribir"]
    },

    {
        "Nombre":"Ivan",
        "Apellido":"Torres",
        "Telefono":"1345654151",
        "Edad":"16",
        "Materias":["Algebra", "qumica"],
        "Hobbies":["Leer", "Cantar"]
    },

    {
        "Nombre":"lele",
        "Apellido":"Cortez",
        "Telefono":"1561651",
        "Edad":"15",
        "Materias":["Lenguas", "Fisica"],
        "Hobbies":["Leer", "Escribir"]
    },
]

console.log(estudiantes)

//Punto 5 

let arreglo = ["Lunes", "Pruebas", "Matematicas", ["Lunes", "Martes", "Miercoles"]]
console.log(arreglo)

// Punto 6


function getInfo(){
    let idBusqueda = document.getElementById('capture-id').value
    let url = `https://jsonplaceholder.typicode.com/posts/${idBusqueda}`

    fetch(url)
        .then(res => res.json())
        .then( data => {
            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">
                                            ${data.title}
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                ${data.body} 
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`

        
        document.getElementById('infoContenido').innerHTML = html

        })
}