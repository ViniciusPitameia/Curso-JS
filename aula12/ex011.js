var idade = 68
console.log(`Você tem ${idade} anos!`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) { // "||" quer dizer 'ou' "&&" quer dizer 'e'
        console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório')
}