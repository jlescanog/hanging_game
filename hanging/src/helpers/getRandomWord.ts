
let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'LIBRO',
    'MESA',
    'SILLA',
    'PERRO',
    'GATO',
    'DOCTOR',
    'PROFESOR',
    'CARRO',
    'AVION',
    'ESCALERA',
    'CAMISA',
    'ZAPATO',
    'MURCIELAGO',
    'MONTANA',
    'ESTUDIANTE',
    'ESCOBA',
    'PLANTA',
    'LAPICERO',
    'CUADERNO',
    'PELOTA',
    'ESTRELLA',
    'FUTBOL',
    'RELOJ',
    'VENTANA',
    'HOSPITAL',
    'LINTERNA',
    'PAJARO',
    'MONEDA',
    'PUERTA',
    'LUNA',
    'SOL',
    'PANTALLA',
    'AISHA',
    'MARISOL',
    'DOMENICA',
    'ARQUITECTURA',
    'SALVADOR',
    'GASTOR',
    'TACNA',
    'BENJAMIN'
];


export function getRandomWord() {

    const randomIndex =  Math.floor( Math.random() * words.length )
    return words [randomIndex];

}