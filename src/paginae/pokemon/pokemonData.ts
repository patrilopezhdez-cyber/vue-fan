export interface listaPokemon {
  id: number;
  nombre: string;
  tipos: string[];
  imagen: string;
  caracteristica: string;
  peso: string;
}

export const Pokemon: listaPokemon[] = [
  {
    id: 1,
    nombre: "Bulbasaur",
    tipos: ["Planta", "Veneno"],
    imagen: "/imagines/pokemon/001.png", 
    caracteristica: "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
    peso: "6.9 kg" 
    },

  {
    id: 2,
    nombre:"Ivysaur",
    tipos: ["Planta", "Veneno"],
    imagen: "/imagines/pokemon/002.png",
    caracteristica: "Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo.",
    peso: "13.0 kg" 
    },

  {
    id: 3,
    nombre: "Venusaur",
    tipos: ["Planta", "Veneno"],
    imagen: "/imagines/pokemon/003.png",
    caracteristica: "Puede convertir la luz del sol en energía. Por esa razón, es más poderoso en verano.",
    peso: "100.0 kg" 
    },

  {
    id: 4, nombre:"Charmander",
    tipos: ["Fuego"],
    imagen: "/imagines/pokemon/004.png",
    caracteristica: "La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.",
    peso: "8.5 kg" 
    },

  {
    id: 5,
    nombre: "Charmeleon",
    tipos: ["Fuego"],
    imagen: "/imagines/pokemon/005.png",
    caracteristica: "Al agitar su ardiente cola, eleva poco a poco la temperatura a su alrededor para sofocar a sus rivales.",
    peso: "19.0 kg" 
    },

  { 
    id: 6,
    nombre:"Charizard",
    tipos: ["Fuego", "Volador"],
    imagen: "/imagines/pokemon/006.png",
    caracteristica: "Cuando se enfurece de verdad, la llama de la punta de su cola se vuelve de color azul claro.",
    peso: "90.5 kg" 
    },

  { id: 7,
    nombre: "Squirtle",
    tipos: ["Agua"],
    imagen: "/imagines/pokemon/007.png",
    caracteristica: "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.",
    peso: "9.0 kg" 
    },

  {
    id: 8,
    nombre: "Wartortle",
    tipos: ["Agua"],
    imagen: "/imagines/pokemon/008.png",
    caracteristica: "Tiene una cola larga y peluda que simboliza la longevidad y lo hace popular entre los mayores.",
    peso: "22.5 kg" 
    },
  { 
    id: 9,
    nombre: "Blastoise",
    tipos: ["Agua"],
    imagen: "/imagines/pokemon/009.png",
    caracteristica: "Aumenta de peso deliberadamente para contrarrestar la fuerza de los chorros de agua que dispara.",
    peso: "85.5 kg"
    },

  {
    id: 10,
    nombre: "Caterpie",
    tipos: ["Bicho"],
    imagen: "/imagines/pokemon/010.png",
    caracteristica: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.",
    peso: "2.9 kg"
    },

    {
    id: 11,
    nombre: "Metapod",
    tipos: ["Bicho"],
    imagen: "/imagines/pokemon/011.png",
    caracteristica: "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.",
    peso: "9.9 kg"
    },

  { id: 12,
    nombre: "Butterfree",
    tipos: ["Bicho", "Volador"],
    imagen: "/imagines/pokemon/012.png",
    caracteristica: "Adora el néctar de las flores. Una pequeña cantidad de polen le basta para localizar prados floridos.",
    peso: "32.0 kg"
    },
  
    { 
    id: 13,
    nombre: "Weedle",
    tipos: ["Bicho", "Veneno"],
    imagen: "/imagines/pokemon/013.png",
    caracteristica: "El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
    peso: "3.2 kg" 
    },

  {
    id: 14,
    nombre: "Kakuna",
    tipos: ["Bicho", "Veneno"],
    imagen: "/imagines/pokemon/014.png",
    caracteristica: "Aunque es casi incapaz de moverse, en caso de sentirse amenazado puede envenenar a los enemigos con su aguijón.",
    peso: "10.0 kg"
    },

  { 
    id: 15,
    nombre: "Beedrill",
    tipos: ["Bicho", "Veneno"],
    imagen: "/imagines/pokemon/015.png",
    caracteristica: "Tiene tres aguijones venenosos, dos en las patas anteriores y uno en la parte baja del abdomen, con los que ataca a sus enemigos una y otra vez.",
    peso: "29.5 kg" 
    },

  {
    id: 16,
    nombre: "Pidgey",
    tipos: ["Normal", "Volador"],
    imagen: "/imagines/pokemon/016.png",
    caracteristica: "Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar.   ",
    peso: "1.8 kg" 
    },
  { id: 17,
    nombre: "Pidgeotto",
    tipos: ["Normal", "Volador"],
    imagen: "/imagines/pokemon/017.png",
    caracteristica: "Su extraordinaria vitalidad y resistencia le permiten cubrir grandes distancias del territorio que habita en busca de presas.",
    peso: "30.0 kg"
    },

  { 
    id: 18,
    nombre: "Pidgeot",
    tipos: ["Normal", "Volador"],
    imagen: "/imagines/pokemon/018.png",
    caracteristica: "Este Pokémon vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas.",
    peso: "39.5 kg"
    },

  {
    id: 19,
    nombre: "Rattata",
    tipos: ["Normal"],
    imagen: "/imagines/pokemon/019.png",
    caracteristica: "Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca.",
    peso: "3.5 kg"
    },

  { 
    id: 20,
    nombre: "Raticate",
    tipos: ["Normal"],
    imagen: "/imagines/pokemon/020.png",
    caracteristica: "Gracias a las pequeñas membranas de las patas traseras, puede nadar por los ríos para capturar presas.",
    peso: "18.5 kg",
    }
]
