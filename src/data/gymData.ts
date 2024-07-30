import exmpleImage from '../img/exmpleImage.png'

export const couches = [
  {
    _id: 1,
    name: 'Laura Martínez',
    phrases: [
      'El límite es solo un comienzo',
      'Cree en ti y todo será posible',
    ],
    yearsOfExperience: 8,
    specialty: 'Entrenamiento funcional',
    certifications: ['Certified Personal Trainer', 'Nutrition Coach'],
  },
  {
    _id: 2,
    name: 'Carlos Gómez',
    phrases: [
      'La constancia supera al talento',
      'El dolor es temporal, la gloria es para siempre',
    ],
    yearsOfExperience: 12,
    specialty: 'Entrenamiento de fuerza',
    certifications: [
      'Strength and Conditioning Specialist',
      'Powerlifting Coach',
    ],
  },
  {
    _id: 3,
    name: 'María Rodríguez',
    phrases: [
      'Transforma tu cuerpo, transforma tu vida',
      'El esfuerzo de hoy es el éxito de mañana',
    ],
    yearsOfExperience: 5,
    specialty: 'Pilates y Yoga',
    certifications: ['Certified Yoga Instructor', 'Pilates Instructor'],
  },
  {
    _id: 4,
    name: 'Juan Pérez',
    phrases: [
      'No te rindas, cada día estás más cerca',
      'La disciplina es el puente entre metas y logros',
    ],
    yearsOfExperience: 10,
    specialty: 'Entrenamiento cardiovascular',
    certifications: ['Certified Personal Trainer', 'Sports Nutritionist'],
  },
  {
    _id: 5,
    name: 'Ana Torres',
    phrases: ['El cambio empieza por ti', 'Eres más fuerte de lo que piensas'],
    yearsOfExperience: 7,
    specialty: 'Entrenamiento funcional y HIIT',
    certifications: ['Certified Functional Strength Coach', 'HIIT Instructor'],
  },
  {
    _id: 6,
    name: 'Miguel Sánchez',
    phrases: [
      'El único límite eres tú',
      'La perseverancia es la clave del éxito',
    ],
    yearsOfExperience: 9,
    specialty: 'Entrenamiento de resistencia',
    certifications: ['Endurance Sports Coach', 'Certified Personal Trainer'],
  },
]

export const classes = [
  {
    _id: 1,
    classTitle: 'Entrenamiento Funcional',
    description:
      'El Entrenamiento Funcional es una modalidad que busca mejorar tu capacidad física general a través de ejercicios que simulan movimientos cotidianos. Con esta clase, trabajarás fuerza, resistencia, equilibrio y movilidad. Laura Martínez te guiará en sesiones dinámicas y variadas, diseñadas para mantener tu cuerpo en constante desafío. Los entrenamientos incluyen el uso de pesas, bandas elásticas, y otros equipos que te ayudarán a mejorar tu rendimiento físico global y tu calidad de vida. Esta clase es ideal para quienes buscan una rutina de ejercicios completa y efectiva.',
    coach: 'Laura Martínez',
    schedule: [
      { day: 'Lunes', time: '07:00 - 08:00' },
      { day: 'Miércoles', time: '18:00 - 19:00' },
      { day: 'Viernes', time: '07:00 - 08:00' },
    ],
    difficultyLevel: 'Intermedio',
    capacity: 55,
    image: exmpleImage,
  },
  {
    _id: 2,
    classTitle: 'Fuerza y Potencia',
    description:
      'La clase de Fuerza y Potencia está diseñada para aquellos que desean aumentar su fuerza máxima y desarrollar potencia muscular. Carlos Gómez te enseñará las técnicas adecuadas para levantar pesas y ejecutar movimientos explosivos de manera segura y efectiva. Esta clase se centra en ejercicios como sentadillas, peso muerto, y press de banca, utilizando barras, mancuernas y kettlebells. Además, se incluyen sesiones de acondicionamiento para mejorar la resistencia muscular. Si estás buscando llevar tus capacidades físicas al siguiente nivel, esta clase es perfecta para ti.',
    coach: 'Carlos Gómez',
    schedule: [
      { day: 'Martes', time: '19:00 - 20:00' },
      { day: 'Jueves', time: '07:00 - 08:00' },
      { day: 'Sábado', time: '10:00 - 11:00' },
    ],
    difficultyLevel: 'Avanzado',
    capacity: 55,
    image: exmpleImage,
  },
  {
    _id: 3,
    classTitle: 'Pilates y Yoga',
    description:
      'La combinación de Pilates y Yoga en esta clase te permitirá mejorar tu flexibilidad, equilibrio y fuerza central de manera armoniosa. María Rodríguez te guiará a través de una serie de ejercicios y posturas que fortalecerán tu cuerpo y mente. Pilates se enfoca en el fortalecimiento del core y la mejora de la postura, mientras que el Yoga te ayudará a reducir el estrés y aumentar tu flexibilidad. Esta clase es ideal para todas las edades y niveles de condición física, proporcionando un enfoque equilibrado y holístico para el bienestar físico y mental.',
    coach: 'María Rodríguez',
    schedule: [
      { day: 'Lunes', time: '18:00 - 19:00' },
      { day: 'Miércoles', time: '07:00 - 08:00' },
      { day: 'Viernes', time: '19:00 - 20:00' },
    ],
    difficultyLevel: 'Todos los niveles',
    capacity: 55,
    image: exmpleImage,
  },
  {
    _id: 4,
    classTitle: 'Cardio Intensivo',
    description:
      'El Cardio Intensivo es una clase diseñada para aquellos que buscan quemar calorías y mejorar su resistencia cardiovascular a través de entrenamientos de alta intensidad. Juan Pérez te llevará a través de una serie de ejercicios aeróbicos que mantendrán tu ritmo cardíaco elevado y tu metabolismo acelerado. Las sesiones incluyen intervalos de alta intensidad, ejercicios de salto, y entrenamiento en circuitos que te desafiarán a alcanzar nuevos niveles de acondicionamiento físico. Esta clase es perfecta para quienes desean perder peso, mejorar su salud cardiovascular y aumentar su energía diaria.',
    coach: 'Juan Pérez',
    schedule: [
      { day: 'Martes', time: '07:00 - 08:00' },
      { day: 'Jueves', time: '19:00 - 20:00' },
      { day: 'Sábado', time: '08:00 - 09:00' },
    ],
    difficultyLevel: 'Intermedio',
    capacity: 55,
    image: exmpleImage,
  },
  {
    _id: 5,
    classTitle: 'HIIT Funcional',
    description:
      'El HIIT Funcional combina entrenamientos de alta intensidad con movimientos funcionales para ofrecerte una clase que mejora tu condición física general. Ana Torres diseñará sesiones que te desafiarán a través de intervalos de alta intensidad y ejercicios que simulan movimientos cotidianos. Utilizando pesas, bandas, y tu propio peso corporal, esta clase te ayudará a quemar calorías, aumentar tu fuerza y mejorar tu resistencia en un tiempo récord. Es ideal para aquellos que buscan resultados rápidos y eficientes, manteniendo su cuerpo en constante desafío y mejora.',
    coach: 'Ana Torres',
    schedule: [
      { day: 'Lunes', time: '19:00 - 20:00' },
      { day: 'Miércoles', time: '07:00 - 08:00' },
      { day: 'Viernes', time: '18:00 - 19:00' },
    ],
    difficultyLevel: 'Avanzado',
    capacity: 55,
    image: exmpleImage,
  },
  {
    _id: 6,
    classTitle: 'Resistencia y Endurance',
    description:
      'La clase de Resistencia y Endurance está diseñada para mejorar tu resistencia aeróbica y anaeróbica a través de entrenamientos estructurados. Miguel Sánchez te guiará en sesiones que incluyen carreras, ciclismo y entrenamientos en circuitos que aumentarán tu capacidad pulmonar y cardiovascular. Esta clase es ideal para atletas de resistencia o para aquellos que buscan llevar su condición física al siguiente nivel. Con ejercicios variados y desafiantes, desarrollarás la capacidad de mantener un esfuerzo prolongado, mejorando tu rendimiento en diversas actividades físicas y deportivas.',
    coach: 'Miguel Sánchez',
    schedule: [
      { day: 'Martes', time: '07:00 - 08:00' },
      { day: 'Jueves', time: '18:00 - 19:00' },
      { day: 'Sábado', time: '09:00 - 10:00' },
    ],
    difficultyLevel: 'Intermedio',
    capacity: 55,
    image: exmpleImage,
  },
]
