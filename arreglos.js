let Carros = [];
Carros.push('Charger', 'Ferrari', 'Pagani', 'Toyota')
console.log(Carros[3]);
Carros.unshift('Ferrari');
console.log(Carros)
Carros[4] = 'Toyota'
console.log(Carros);
Carros.shift(Carros); 
console.log(Carros)
Carros.splice(2,1)
console.log(Carros)
delete(Carros[2])
console.log(Carros)
Carros[2] = 'Ferrari'
console.log(Carros)