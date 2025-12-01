import { UnitSize, Testimonial, UseCase } from './types';

export const UNIT_SIZES: UnitSize[] = [
  {
    id: '2x1',
    dimensions: '2 x 1 m',
    area: 2,
    price: 25,
    description: 'Ideal para cajas, maletas y objetos personales.',
    recommendedFor: ['cajas', 'equipaje', 'ropa', 'archivo doméstico']
  },
  {
    id: '2x1.5',
    dimensions: '2 x 1.5 m',
    area: 3,
    price: 50,
    description: 'Perfecto para bicicletas, electrodomésticos pequeños y mobiliario.',
    recommendedFor: ['bicicletas', 'muebles pequeños', 'ordenadores', 'herramientas']
  },
  {
    id: '2x2',
    dimensions: '2 x 2 m',
    area: 4,
    price: 75,
    description: 'Espacio para mudanzas, mobiliario grande o stock empresarial.',
    recommendedFor: ['mudanzas', 'muebles grandes', 'stock empresa', 'palets']
  },
{
    id: '2x2.5',
    dimensions: '2 x 2.5 m',
    area: 5,
    price: 100,
    description: 'Perfecto para bicicletas, electrodomésticos Grandes y mobiliario, sofas.',
    recommendedFor: ['bicicletas', 'muebles Grandes', 'ordenadores', 'herramientas']
  },

{
    id: '2x3',
    dimensions: '2 x 3 m',
    area: 6,
    price: 150,
    description: 'Perfecto para bicicletas, electrodomésticos Grandes, Herramientas de Volumen y mobiliario.',
    recommendedFor: ['bicicletas', 'muebles Grandes', 'ordenadores', 'herramientas Grandes']
  },


  
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana G.",
    role: "Santander",
    text: "Me ha salvado en la mudanza, tener un espacio extra temporal fue perfecto."
  },
  {
    id: 2,
    name: "Carlos R.",
    role: "Torrelavega",
    text: "Tengo herramientas y stock de mi negocio aquí, seguridad total y accesibilidad 24h."
  },
  {
    id: 3,
    name: "Lucía M.",
    role: "Astillero",
    text: "Muy limpio, ordenado y fácil de acceder. El sistema con PIN es comodísimo."
  }
];

export const USE_CASES: UseCase[] = [
  {
    title: "Mudanzas",
    description: "Guarda tus cosas mientras haces cambios de vivienda.",
    iconName: "Truck"
  },
  {
    title: "Archivos y documentación",
    description: "Perfecto para documentos, archivos, material de oficina o cajas.",
    iconName: "FileText"
  },
  {
    title: "Stock empresarial",
    description: "Ideal para empresas que necesitan guardar stock y herramientas.",
    iconName: "Boxes"
  },
  {
    title: "Material deportivo",
    description: "Bicicletas, esquís, windsurf, equipamiento de montaña...",
    iconName: "Bike"
  },
  {
    title: "Mudanzas temporales",
    description: "Solución ideal para cambios de casa y reformas.",
    iconName: "Home"
  }
];
