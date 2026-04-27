// Datos — series fotográficas
// Tipos de página: 'single' | 'spread' | 'editorial' | 'strip' | 'fullbleed'

export const SERIES = {
    'retratos': {
      num: '01',
      title: 'RETRATOS',
      year: 2024,
      count: 14,
      description: 'Retratos hechos en 35mm y medio formato a lo largo de 2024. Personas que paso por delante en una calle, amigos en su casa, desconocidos en festivales. La pregunta siempre es la misma: qué cabe entre el sujeto y la cámara, en ese segundo en que decide si dejarse ver.',
      pages: [
        { type: 'single',    images: ['https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=1400&q=85'] },
        { type: 'spread',    images: ['https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=85','https://images.unsplash.com/photo-1488161628813-67a86dcc92d8?w=900&q=85'] },
        { type: 'editorial', images: [
          'https://images.unsplash.com/photo-1509909756405-be0199881695?w=1200&q=85',
          'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=85',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=85',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85',
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&q=85'
        ]},
        { type: 'fullbleed', images: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1800&q=85'] },
        { type: 'strip',     images: [
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=900&q=85',
          'https://images.unsplash.com/photo-1463453091185-61582044d556?w=900&q=85',
          'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=900&q=85'
        ]}
      ]
    },

    'madrid-invierno': {
      num: '02',
      title: 'MADRID, INVIERNO',
      year: 2024,
      count: 22,
      description: 'Tres meses recorriendo Madrid de noche con una cámara analógica y un grano que no perdona. La ciudad como un animal que respira despacio. Bares, ventanas iluminadas, escaleras vacías de metro.',
      pages: [
        { type: 'fullbleed', images: ['https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1800&q=85'] },
        { type: 'editorial', images: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85',
          'https://images.unsplash.com/photo-1516975698824-571e2adfdfb6?w=900&q=85',
          'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=85',
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=85',
          'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=900&q=85'
        ]},
        { type: 'spread',    images: ['https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=85','https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900&q=85'] },
        { type: 'single',    images: ['https://images.unsplash.com/photo-1490377104474-513a6c1ad8b6?w=1400&q=85'] }
      ]
    },

    'detras-del-rodaje': {
      num: '03',
      title: 'DETRÁS DEL RODAJE',
      year: 2023,
      count: 31,
      description: 'Fotografías hechas durante mis propios rodajes y los de otros directores con los que he trabajado. El cine como lugar antes que como película: el catering frío, el técnico durmiendo en una silla, la actriz repasando texto al sol.',
      pages: [
        { type: 'editorial', images: [
          'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200&q=85',
          'https://images.unsplash.com/photo-1505066827145-34bcde228211?w=900&q=85',
          'https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=900&q=85',
          'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900&q=85',
          'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=900&q=85'
        ]},
        { type: 'fullbleed', images: ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1800&q=85'] },
        { type: 'strip',     images: [
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=85',
          'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=900&q=85',
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=85'
        ]}
      ]
    },

    'cuerpos-luz': {
      num: '04',
      title: 'CUERPOS / LUZ',
      year: 2023,
      count: 18,
      description: 'Sesiones de estudio centradas en el cuerpo como volumen sobre el que cae la luz. Sin maquillaje, sin contexto. Solo piel, gesto y un foco.',
      pages: [
        { type: 'single',    images: ['https://images.unsplash.com/photo-1500336624523-d727130c3328?w=1400&q=85'] },
        { type: 'spread',    images: ['https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85','https://images.unsplash.com/photo-1496440737103-cd596325d314?w=900&q=85'] },
        { type: 'editorial', images: [
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85',
          'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=85',
          'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=900&q=85',
          'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=900&q=85',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85'
        ]}
      ]
    },

    'mar-abierto': {
      num: '05',
      title: 'MAR ABIERTO',
      year: 2022,
      count: 26,
      description: 'Un verano fotografiando el Mediterráneo desde la costa norte de Mallorca. El mar como adversario, como espejo y como excusa para no hablar.',
      pages: [
        { type: 'fullbleed', images: ['https://images.unsplash.com/photo-1473662712437-7d3f8b6cf7b3?w=1800&q=85'] },
        { type: 'spread',    images: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=85','https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=900&q=85'] },
        { type: 'editorial', images: [
          'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1200&q=85',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
          'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=900&q=85',
          'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=900&q=85',
          'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?w=900&q=85'
        ]},
        { type: 'single',    images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1400&q=85'] }
      ]
    }
};
