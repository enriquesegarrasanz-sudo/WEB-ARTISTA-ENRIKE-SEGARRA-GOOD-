// Datos — proyectos cinematográficos
// Cada proyecto se identifica por su slug (data-project en el HTML).
// Para sustituir por contenido real: video.id (Vimeo), poster, synopsis, quote, crew, cast, stills, status.

export const PROJECTS = {
    'el-ultimo-jardin': {
      title: 'El último jardín',
      type: 'CORTOMETRAJE · DIRECCIÓN',
      year: 2025,
      duration: '14 min',
      synopsis: 'Una mujer regresa al pueblo donde creció para cuidar de su madre enferma. En el jardín que compartieron de niña, descubre que las cosas que más temió olvidar son también las que más necesita soltar.',
      quote: 'No todo lo que se queda atrás se pierde. A veces se queda esperando.',
      poster: '', // pega aquí la URL del cartel del proyecto
      video: { provider: 'vimeo', id: '' }, // pega el ID de Vimeo. Si está vacío, se muestra placeholder
      crew: [
        { role: 'Dirección y guion', name: 'Enrike Segarra' },
        { role: 'Producción', name: 'Por definir' },
        { role: 'Dirección de fotografía', name: 'Por definir' },
        { role: 'Montaje', name: 'Por definir' },
        { role: 'Música original', name: 'Por definir' }
      ],
      cast: [
        { actor: 'Por definir', role: 'Elena', photo: '', bio: 'Bio del intérprete pendiente. Cuando confirmes el casting, sustituye este texto con una breve nota sobre su trayectoria.' },
        { actor: 'Por definir', role: 'La madre', photo: '', bio: '' },
        { actor: 'Por definir', role: 'El vecino', photo: '', bio: '' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1400&q=80',
        'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=900&q=80',
        'https://images.unsplash.com/photo-1500336624523-d727130c3328?w=900&q=80',
        'https://images.unsplash.com/photo-1473662712437-7d3f8b6cf7b3?w=900&q=80',
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80'
      ],
      status: 'En circuito de festivales — actualmente en periodo de presentación. Durante este recorrido la obra no puede mostrarse públicamente.'
    },

    'aire-habitacion-304': {
      title: 'Aire / Habitación 304',
      type: 'VIDEOCLIP · DIRECCIÓN',
      year: 2024,
      duration: '4 min',
      synopsis: 'Videoclip para el single homónimo. Una mujer atraviesa un hotel vacío buscando a alguien que ya no está. Rodado en una sola noche en 16mm.',
      poster: '',
      video: { provider: 'vimeo', id: '' },
      crew: [
        { role: 'Dirección', name: 'Enrike Segarra' },
        { role: 'Dirección de fotografía', name: 'Por definir' },
        { role: 'Montaje', name: 'Por definir' }
      ],
      cast: [
        { actor: 'Por definir', role: 'Ella', photo: '', bio: '' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1400&q=80',
        'https://images.unsplash.com/photo-1488161628813-67a86dcc92d8?w=900&q=80',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80'
      ]
    },

    'loewe-heritage': {
      title: 'Loewe — Heritage',
      type: 'SPOT · DIRECCIÓN',
      year: 2024,
      duration: '60 sec',
      synopsis: 'Pieza comercial para Loewe en torno al concepto de herencia y oficio. Manos que trabajan el cuero, gestos transmitidos entre generaciones, silencio.',
      poster: '',
      video: { provider: 'vimeo', id: '' },
      crew: [
        { role: 'Dirección', name: 'Enrike Segarra' },
        { role: 'Productora', name: 'Por definir' },
        { role: 'Dirección de fotografía', name: 'Por definir' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1489599735734-79b4af4a4015?w=1400&q=80',
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=80',
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80'
      ]
    },

    'sirocco': {
      title: 'Sirocco',
      type: 'DOCUMENTAL · DIRECCIÓN',
      year: 2023,
      duration: '38 min',
      synopsis: 'Documental sobre el viento del sur que cruza el Mediterráneo cargado de arena del Sahara. Tres pueblos costeros, tres formas distintas de convivir con un fenómeno que une dos continentes.',
      quote: 'El sirocco no es un viento. Es una memoria que viaja.',
      poster: '',
      video: { provider: 'vimeo', id: '' },
      crew: [
        { role: 'Dirección y guion', name: 'Enrike Segarra' },
        { role: 'Dirección de fotografía', name: 'Por definir' },
        { role: 'Sonido directo', name: 'Por definir' },
        { role: 'Montaje', name: 'Por definir' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1400&q=80',
        'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=900&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80'
      ]
    },

    'las-cosas-pequenas': {
      title: 'Las cosas pequeñas',
      type: 'CORTOMETRAJE · DIRECCIÓN',
      year: 2023,
      duration: '11 min',
      synopsis: 'Un padre y su hija de seis años pasan un domingo entero sin hablarse. Cuando finalmente lo hacen, descubren que lo importante ya estaba dicho en los gestos.',
      poster: '',
      video: { provider: 'vimeo', id: '' },
      crew: [
        { role: 'Dirección y guion', name: 'Enrike Segarra' },
        { role: 'Producción', name: 'Por definir' },
        { role: 'Dirección de fotografía', name: 'Por definir' },
        { role: 'Montaje', name: 'Por definir' }
      ],
      cast: [
        { actor: 'Por definir', role: 'El padre', photo: '', bio: '' },
        { actor: 'Por definir', role: 'La hija', photo: '', bio: '' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1400&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80'
      ]
    },

    'nocturno': {
      title: 'Nocturno',
      type: 'VIDEOCLIP · DIRECCIÓN',
      year: 2022,
      duration: '3 min 40 s',
      synopsis: 'Videoclip rodado íntegramente en blanco y negro durante una sola toma de noche en Madrid. Una declaración de amor a la ciudad cuando duerme.',
      poster: '',
      video: { provider: 'vimeo', id: '' },
      crew: [
        { role: 'Dirección', name: 'Enrike Segarra' },
        { role: 'Dirección de fotografía', name: 'Por definir' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=1400&q=80',
        'https://images.unsplash.com/photo-1516975698824-571e2adfdfb6?w=900&q=80',
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&q=80'
      ]
    }
};
