export interface Medalla {
  id: number;
  nombre: string;
  lider: string;
  tipo: string;
  imagen: string;
  colorBg: string;
}

export const listaMedalla: Medalla[] = [
  {
    id: 1,
    nombre: "Medalla Roca",
    lider: "Brock",
    tipo: "Roca",
    imagen: "/imagines/pokemon/Medalla_Roca.png",
    colorBg: "bg-yellow-600 text-white"
  },
  {
    id: 2,
    nombre: "Medalla Cascada",
    lider: "Misty",
    tipo: "Agua",
    imagen: "/imagines/pokemon/Medalla_Cascada.png",
    colorBg: "bg-blue-500 text-white"
  },
  {
    id: 3,
    nombre: "Medalla Trueno",
    lider: "Lt. Surge",
    tipo: "Eléctrico",
    imagen: "/imagines/pokemon/Medalla_Trueno.png",
    colorBg: "bg-yellow-400 text-gray-900 font-bold"
  },
  {
    id: 4,
    nombre: "Medalla Arcoiris",
    lider: "Erika",
    tipo: "Planta",
    imagen: "/imagines/pokemon/Medalla_Arcoíris.png",
    colorBg: "bg-green-500 text-white"
  },
  {
    id: 5,
    nombre: "Medalla Alma",
    lider: "Koga",
    tipo: "Veneno",
    imagen: "/imagines/pokemon/Medalla_Alma.png",
    colorBg: "bg-purple-500 text-white"
  },
  {
    id: 6,
    nombre: "Medalla Pantano",
    lider: "Sabrina",
    tipo: "Psíquico",
    imagen: "/imagines/pokemon/Medalla_Pantano.png",
    colorBg: "bg-pink-500 text-white"
  },
  {
    id: 7,
    nombre: "Medalla Volcán",
    lider: "Blaine",
    tipo: "Fuego",
    imagen: "/imagines/pokemon/Medalla_Volcán.png",
    colorBg: "bg-red-500 text-white"
  },
  {
    id: 8,
    nombre: "Medalla Tierra",
    lider: "Giovanni",
    tipo: "Tierra",
    imagen: "/imagines/pokemon/Medalla_Tierra.png",
    colorBg: "bg-yellow-800 text-white"
  }
];