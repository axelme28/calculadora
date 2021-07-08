const suma = (num1 = 0,num2 = 0) => {return parseFloat(num1)+parseFloat(num2)}
const resta = (num1,num2) => {return parseFloat(num1)-parseFloat(num2)}
const multi = (num1,num2) => {return parseFloat(num1)*parseFloat(num2)}
const divi = (num1,num2) => {return parseFloat(num1)/parseFloat(num2)}


const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const resultado = document.querySelector('#res')

const datos = {
    num1: 0,
    num2: 0
}
num1.addEventListener('input',readText)
num2.addEventListener('input',readText)


function readText(event) {
    datos[event.target.id] = event.target.value
    console.log(datos);

    
}

const btnSumar = document.querySelector('#suma')
const btnRes = document.querySelector('#resta')
const btnMulti = document.querySelector('#multiplicacion')
const btndiv = document.querySelector('#divicion')
const btnclean = document.querySelector('#clean')


btnSumar.addEventListener('click', function(event){
    resultado.textContent = suma(datos.num1,datos.num2)
})

btnRes.addEventListener('click', function(event){
    resultado.textContent = resta(datos.num1,datos.num2)
})

btnMulti.addEventListener('click', function(event){
    resultado.textContent = multi(datos.num1,datos.num2)
})

btndiv.addEventListener('click', function(event){
    resultado.textContent = divi(datos.num1,datos.num2)
})

