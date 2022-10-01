let num = [1,2,3,3,7]
num[3] = 6
num.push(7)
num.push(1)
num.sort()
num.length 
console.log(`Nosso vetor é ${num.length}`)
console.log(`O primeiro valor ${num[0]}`)
//percurso para exibição do vetor
for (let pos=0; pos<num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]} `)
}

for (let pos in num) {
    console.log(num[pos])
}
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}