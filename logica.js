let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let boton=document.getElementById("boton")
let pe=document.getElementById("pe")
let no1
let no2
let r

boton.addEventListener("click", ey)

function ey(){
let suma

no1 = Number(input1.value)
no2 = Number(input2.value)

suma = no1+no2

r = suma

pe.textContent = r



}