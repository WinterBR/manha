const sala = [
    {nome: 'Eduardo', nota: 10},
    {nome: 'Carla', nota: 9},
    {nome: 'João', nota: 2},
    {nome: 'Gabriel', nota: 6},
    {nome: 'Gabriela', nota: 7.5},
    {nome: 'Kauã', nota: 0}
];

const filtraNota = (nota) => nota.nota >=6;

const aprov = sala.filter(filtraNota)

console.log(aprov);
