
import { Course } from './types';

// Course Data
export const COURSES: Course[] = [
  {
    id: 'matematica',
    title: 'Matemática Integral',
    description: 'Refuerza tus habilidades en resolución de problemas, álgebra y lógica matemática.',
    videoUrl: 'https://www.youtube.com/watch?v=n46kqcHQ1oo&t=4s',
    iconName: 'Calculator',
    price: 'S/. 45.00',
    tasks: [
      { id: 'm1', title: 'Análisis del Video', description: 'Escribe un resumen de 5 líneas sobre el tema principal del video.', completed: false },
      { id: 'm2', title: 'Ejercicios de Práctica', description: 'Crea y resuelve 3 ejercicios similares a los mostrados en la clase.', completed: false },
      { id: 'm3', title: 'Glosario Matemático', description: 'Define 5 términos matemáticos mencionados en la lección.', completed: false },
      { id: 'm4', title: 'Aplicación Real', description: '¿En qué situación de la vida diaria usarías lo aprendido hoy?', completed: false },
      { id: 'm5', title: 'Mapa Mental', description: 'Elabora un organizador visual conectando los conceptos clave.', completed: false },
      { id: 'm6', title: 'Cálculo Mental', description: 'Practica operaciones básicas relacionadas con el tema por 5 minutos.', completed: false },
      { id: 'm7', title: 'Identificación de Errores', description: 'Explica un error común que se debe evitar al resolver estos problemas.', completed: false },
      { id: 'm8', title: 'Investigación Adicional', description: 'Busca otro método para resolver el mismo tipo de problema.', completed: false },
      { id: 'm9', title: 'Formulación de Preguntas', description: 'Escribe 2 dudas que te hayan quedado para consultarlas con el tutor.', completed: false },
      { id: 'm10', title: 'Autoevaluación', description: 'Califícate del 1 al 10 en cuánto entendiste el tema y por qué.', completed: false }
    ]
  },
  {
    id: 'comunicacion',
    title: 'Comunicación Efectiva',
    description: 'Desarrolla tu comprensión lectora, expresión oral y técnicas de estudio.',
    videoUrl: 'https://www.youtube.com/watch?v=-te7-QlVyXc',
    iconName: 'MessageCircle',
    price: 'S/. 40.00',
    tasks: [
      { id: 'c1', title: 'Idea Principal', description: 'Identifica y escribe la idea central del video observado.', completed: false },
      { id: 'c2', title: 'Vocabulario Nuevo', description: 'Anota 4 palabras nuevas o interesantes y busca su significado.', completed: false },
      { id: 'c3', title: 'Opinión Crítica', description: 'Escribe un párrafo dando tu opinión sobre el contenido de la clase.', completed: false },
      { id: 'c4', title: 'Toma de Apuntes', description: 'Realiza apuntes utilizando el método Cornell sobre la lección.', completed: false },
      { id: 'c5', title: 'Síntesis', description: 'Resume el video en un máximo de 50 palabras.', completed: false },
      { id: 'c6', title: 'Expresión Oral', description: 'Grábate explicando lo que entendiste en 1 minuto.', completed: false },
      { id: 'c7', title: 'Organizadores Gráficos', description: 'Crea un cuadro sinóptico con la información presentada.', completed: false },
      { id: 'c8', title: 'Contexto', description: 'Investiga más sobre el autor o el tema tratado en el video.', completed: false },
      { id: 'c9', title: 'Ortografía', description: 'Revisa tus apuntes y corrige cualquier error ortográfico.', completed: false },
      { id: 'c10', title: 'Conclusión', description: 'Escribe una conclusión final sobre la importancia de este tema.', completed: false }
    ]
  },
  {
    id: 'ept',
    title: 'Educación para el Trabajo',
    description: 'Descubre herramientas para el emprendimiento y gestión de proyectos.',
    videoUrl: 'https://www.youtube.com/watch?v=H23XhlpZ6xM',
    iconName: 'Briefcase',
    price: 'S/. 50.00',
    tasks: [
      { id: 'e1', title: 'Identificación de Necesidades', description: '¿Qué problema resuelve el tema tratado en el video?', completed: false },
      { id: 'e2', title: 'Propuesta de Valor', description: 'Describe cómo aplicarías este conocimiento en un negocio.', completed: false },
      { id: 'e3', title: 'Planificación', description: 'Enumera los pasos necesarios para ejecutar lo aprendido.', completed: false },
      { id: 'e4', title: 'Recursos Necesarios', description: 'Lista los materiales o recursos que necesitarías para aplicar esto.', completed: false },
      { id: 'e5', title: 'Análisis FODA', description: 'Realiza un breve análisis de fortalezas y debilidades sobre el tema.', completed: false },
      { id: 'e6', title: 'Creatividad', description: 'Propón una idea innovadora relacionada con la clase.', completed: false },
      { id: 'e7', title: 'Presupuesto', description: 'Estima cuánto costaría implementar la idea del video.', completed: false },
      { id: 'e8', title: 'Trabajo en Equipo', description: 'Describe cómo este tema favorece el trabajo colaborativo.', completed: false },
      { id: 'e9', title: 'Marketing', description: 'Crea un eslogan o frase publicitaria para el tema visto.', completed: false },
      { id: 'e10', title: 'Evaluación de Proyecto', description: '¿Qué criterios usarías para saber si tuviste éxito aplicando esto?', completed: false }
    ]
  },
  {
    id: 'dpcc',
    title: 'Desarrollo Personal y Ciudadanía',
    description: 'Fortalece tu identidad, valores y participación ciudadana.',
    videoUrl: 'https://www.youtube.com/watch?v=PeXZktbTgLo',
    iconName: 'Users',
    price: 'S/. 35.00',
    tasks: [
      { id: 'd1', title: 'Reflexión Personal', description: '¿Cómo se relaciona el video con tu vida personal?', completed: false },
      { id: 'd2', title: 'Valores', description: 'Identifica 3 valores que se promueven en la lección.', completed: false },
      { id: 'd3', title: 'Ciudadanía Activa', description: 'Propón una acción para mejorar tu comunidad basada en el tema.', completed: false },
      { id: 'd4', title: 'Identidad', description: 'Describe qué aspecto de tu identidad se fortalece con este tema.', completed: false },
      { id: 'd5', title: 'Empatía', description: 'Ponte en el lugar de otra persona y analiza el tema desde su perspectiva.', completed: false },
      { id: 'd6', title: 'Derechos y Deberes', description: 'Menciona qué derecho o deber se relaciona con lo visto.', completed: false },
      { id: 'd7', title: 'Resolución de Conflictos', description: 'Escribe cómo este conocimiento ayuda a evitar o resolver problemas.', completed: false },
      { id: 'd8', title: 'Argumentación', description: 'Escribe 3 argumentos a favor de la postura presentada en el video.', completed: false },
      { id: 'd9', title: 'Compromiso', description: 'Redacta un compromiso personal para aplicar lo aprendido.', completed: false },
      { id: 'd10', title: 'Diálogo', description: 'Conversa con un familiar sobre el tema y anota sus opiniones.', completed: false }
    ]
  },
  {
    id: 'ingles',
    title: 'English Skills',
    description: 'Mejora tu vocabulario, gramática y comprensión del idioma inglés.',
    videoUrl: 'https://www.youtube.com/watch?v=5Jl0sAwa8og',
    iconName: 'Globe',
    price: 'S/. 55.00',
    tasks: [
      { id: 'i1', title: 'Vocabulary List', description: 'Write down 10 English words you heard in the video.', completed: false },
      { id: 'i2', title: 'Summary', description: 'Write a short summary of the video in English (3 sentences).', completed: false },
      { id: 'i3', title: 'Translation', description: 'Translate 5 key sentences from the video into Spanish.', completed: false },
      { id: 'i4', title: 'Pronunciation', description: 'Practice saying the key words out loud 3 times each.', completed: false },
      { id: 'i5', title: 'Sentence Building', description: 'Create 3 new sentences using the vocabulary learned.', completed: false },
      { id: 'i6', title: 'Listening Comprehension', description: 'What was the most important tip given in the video?', completed: false },
      { id: 'i7', title: 'Questions', description: 'Write 2 questions in English about the topic.', completed: false },
      { id: 'i8', title: 'Dialogue', description: 'Write a short dialogue incorporating the new topic.', completed: false },
      { id: 'i9', title: 'Grammar Check', description: 'Identify one grammar rule used in the video.', completed: false },
      { id: 'i10', title: 'Review', description: 'Watch the video again without subtitles and try to understand everything.', completed: false }
    ]
  },
  {
    id: 'arte',
    title: 'Arte y Cultura',
    description: 'Explora técnicas artísticas, historia del arte y expresión creativa.',
    videoUrl: 'https://www.youtube.com/watch?v=r9A9gBsJVpI',
    iconName: 'Palette',
    price: 'S/. 30.00',
    tasks: [
      { id: 'a1', title: 'Apreciación Visual', description: 'Describe los elementos visuales (color, forma) más destacados del video.', completed: false },
      { id: 'a2', title: 'Boceto Rápido', description: 'Haz un dibujo rápido representando el tema principal.', completed: false },
      { id: 'a3', title: 'Técnica', description: 'Identifica qué técnica artística o material se está utilizando o explicando.', completed: false },
      { id: 'a4', title: 'Creatividad', description: '¿Cómo podrías cambiar o mejorar la obra/técnica mostrada?', completed: false },
      { id: 'a5', title: 'Historia', description: 'Investiga si este estilo artístico pertenece a alguna época específica.', completed: false },
      { id: 'a6', title: 'Interpretación', description: '¿Qué emociones o sentimientos te transmite el contenido del video?', completed: false },
      { id: 'a7', title: 'Práctica', description: 'Dedica 15 minutos a practicar lo aprendido en tu cuaderno de dibujo.', completed: false },
      { id: 'a8', title: 'Análisis de Color', description: 'Haz una lista de los colores predominantes y su significado posible.', completed: false },
      { id: 'a9', title: 'Critica Constructiva', description: 'Escribe una breve crítica sobre la obra o técnica presentada.', completed: false },
      { id: 'a10', title: 'Proyecto Personal', description: 'Planifica una pequeña obra de arte inspirada en este video.', completed: false }
    ]
  },
  {
    id: 'cyt',
    title: 'Ciencia y Tecnología',
    description: 'Indagación científica, naturaleza y fenómenos tecnológicos.',
    videoUrl: 'https://www.youtube.com/watch?v=ca0V91ExwDk',
    iconName: 'Atom',
    price: 'S/. 45.00',
    tasks: [
      { id: 'ct1', title: 'Observación', description: 'Describe detalladamente el fenómeno o concepto explicado.', completed: false },
      { id: 'ct2', title: 'Hipótesis', description: 'Plantea una pregunta y una posible respuesta sobre el tema.', completed: false },
      { id: 'ct3', title: 'Esquema Gráfico', description: 'Dibuja el proceso o sistema explicado en el video.', completed: false },
      { id: 'ct4', title: 'Vocabulario Científico', description: 'Define 3 términos técnicos mencionados.', completed: false },
      { id: 'ct5', title: 'Impacto Ambiental', description: 'Analiza si el tema tiene relación con el cuidado del medio ambiente.', completed: false },
      { id: 'ct6', title: 'Experimentación', description: 'Propón un experimento sencillo para comprobar lo aprendido.', completed: false },
      { id: 'ct7', title: 'Causa y Efecto', description: 'Identifica una relación de causa y efecto en la explicación.', completed: false },
      { id: 'ct8', title: 'Investigación', description: 'Busca un dato curioso adicional sobre este tema científico.', completed: false },
      { id: 'ct9', title: 'Tecnología', description: 'Menciona qué herramientas tecnológicas se usan o mencionan.', completed: false },
      { id: 'ct10', title: 'Reporte', description: 'Escribe un breve reporte de laboratorio simulado sobre el video.', completed: false }
    ]
  },
  {
    id: 'sociales',
    title: 'Ciencias Sociales',
    description: 'Historia, geografía y economía para comprender nuestro mundo.',
    videoUrl: 'https://www.youtube.com/watch?v=ycWu_zxgOXM&t=5s',
    iconName: 'Map',
    price: 'S/. 40.00',
    tasks: [
      { id: 's1', title: 'Línea de Tiempo', description: 'Ordena cronológicamente los eventos mencionados en el video.', completed: false },
      { id: 's2', title: 'Ubicación Geográfica', description: 'Identifica los lugares o países mencionados en un mapa.', completed: false },
      { id: 's3', title: 'Personajes Clave', description: 'Nombra a los protagonistas o figuras históricas del tema.', completed: false },
      { id: 's4', title: 'Causas', description: 'Explica por qué ocurrió el evento o situación descrita.', completed: false },
      { id: 's5', title: 'Consecuencias', description: 'Lista 3 efectos importantes de este suceso histórico o social.', completed: false },
      { id: 's6', title: 'Comparación', description: 'Compara lo visto en el video con una situación actual.', completed: false },
      { id: 's7', title: 'Análisis de Fuente', description: '¿Qué tipo de información presenta el video (imágenes, testimonios)?', completed: false },
      { id: 's8', title: 'Opinión', description: '¿Qué hubieras hecho tú en esa época o situación?', completed: false },
      { id: 's9', title: 'Sociedad y Economía', description: 'Identifica un aspecto económico o social mencionado.', completed: false },
      { id: 's10', title: 'Resumen Histórico', description: 'Redacta un párrafo resumiendo el hecho más impactante.', completed: false }
    ]
  }
];

export const WHATSAPP_NUMBER = '51999177350';
export const CONTACT_PHONE = '999177350';
