const sala = [
    {nome: 'Eduardo', nota: 10},
    {nome: 'Carla', nota: 9},
    {nome: 'João', nota: 2},
    {nome: 'Gabriel', nota: 6},
    {nome: 'Gabriela', nota: 7.5},
    {nome: 'Kauã', nota: 0}
];

const aprov = [];
sala.forEach(function(pessoas) {
    if (pessoas.nota >= 6) {
        aprov.push(pessoas);
    }
});

console.log(aprov);
