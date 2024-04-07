let n1 = prompt('Digite o primeiro número')
let n2 = prompt('Digite o segundo número')

let imparoupar = (Number(n1)+Number(n2)) % 2
 
alert(`A soma dos dois núemros e: ${Number(n1)+Number(n2)}`)
alert(`A subtração dos dois núemros e: ${Number(n1)-Number(n2)}`)
alert(`A multiplicação dos dois núemros e: ${Number(n1)*Number(n2)}`)
alert(`A divisão dos dois núemros e: ${Number(n1)/Number(n2)}`)
alert(`O resto dos dois núemros e: ${Number(n1)%Number(n2)}`)

if(imparoupar == 0) {
    alert(`A soma dos dois núemros é par: ${Number(n1)+Number(n2)}`)
} else {
    alert(`A soma dos dois núemros é impar: ${Number(n1)+Number(n2)}`)
}

if(n1 == n2) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes")
}35