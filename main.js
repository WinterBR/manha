const sala = [
  {nome: 'Eduardo' , nota: 10},
  {nome : 'Carla' , nota: 9},
  {nome: 'João' ,  nota: 2},
  {nome: 'Gabriel' ,  nota: 6},
  {nome: 'Gabriela' ,  nota: 7.5},
  {nome: 'Kauã' ,  nota: 0}
];

function retorna() {
  const aprov = [];
  for (let i = 0; i < sala.length; i++) {
      if (sala[i].nota >= 6) {
          aprov.push(sala[i]);
      }
  }
  console.log(aprov)
}

retorna();