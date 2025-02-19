let Comida = [];
Comida.push('Mondongo', 'Rulo', 'Guineo', 'Mangu')
console.log(Comida[3]);
Comida.unshift('Mondongo');
console.log(Comida)
Comida[4] = 'Rulo'
console.log(Comida);
Comida.shift(Comida); 
console.log(Comida)
Comida.splice(2,1)
console.log(Comida)
delete(Comida[2])
console.log(Comida)
Comida[2] = 'Rulo'
console.log(Comida)