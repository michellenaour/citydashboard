
export const categories = [
  {
    id: 1,
    title: "Salud",
    icon: "mdi mdi-hospital-building",
    showSubtopics: false,
    description: "Lorem ipsum dolor sit amet, consectet   sssssur adipiscing elit.",
    subtopics: [
      {
        id: 1,
        title: "Salud Primaria",
        pob_value: 20,
        total_value: 50,
        description: "Cantidad de consultorios x habitantes",
        medida_p:"Cantidad de consultorios x habitantes",
        medida_d:"Equidistancias y distribución territorial en la atención de salud primaria",
        estandarp:"1 consultorio c/ 20 mil hab.",
        estandar_d:"Radio de influencia 2 km lineales",
        grid: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ]

      },
    ],
    color: "#c93b30",
  },
  {
    id: 2,
    title: "Educación",
    icon: "mdi mdi-school",
    showSubtopics: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtopics: [
      {
        id: 1,
        title: "Educación Básica",
        pob_value: 80,
        total_value: 90,
        description: "Cobertura adecuada de educación basica ",
        medida_p:"Cantidad de equip educacionales basicos x habitantes",
        medida_d:"Equidistancias y distribución territorial en la atención de educación básica",
        
        estandar_p:"1 escuela básica cada 6 mil hab.",
        estandar_d:"Radio de influencia 1 km lineal",
        grid: [
          [0, 0, 1, 0, 1, 0],
          [0, 1, 0, 1, 0, 1],
          [1, 1, 0, 0, 0, 0],
          [1, 1, 0, 1, 0, 1],
          [0, 0, 1, 0, 0, 0],
        ]

      },
      {
        id: 2,
        title: "Educación Media",
        pob_value: 75,
        total_value: 82,
        description: "Cobertura adecuada de educación media ",
        medida_p:"Cantidad de equip educacionales medio (humanistas) x habitantes",
        medida_d:"Equidistancias y distribución territorial en la atención de educación media",
        estandar_p:"1 liceo c/ 20 mil hab",
        estandar_d:"Radio de influencia 3 km lineal",
        grid: [
          [0, 0, 1, 0, 1, 0],
          [0, 1, 0, 1, 0, 1],
          [1, 1, 0, 0, 0, 0],
          [1, 1, 0, 1, 0, 1],
          [0, 0, 1, 0, 0, 0],
        ]

      },
    ],
    color: "#58329c",
  },
  {
    id: 3,
    title: "Cultura",
    icon: "mdi mdi-theater",
    showSubtopics: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtopics: [
      {
        id: 1,
        title: "Bibliotecas",
        pob_value: 50,
        total_value: 63,
        description: "Cobertura adecuada de bibliotecas",
        medida_p:"Cantidad de bibliotecas x habitantes",
        medida_d:"Equidistancias y distribución territorial en la atención debiblioteca",
        
        estandar_p:"1 biblioteca de futbol c/ 20 mil hab",
        estandar_d:"Radio de influencia 3 km lineales",
        grid: [
          [0, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0],
          [0, 0, 1, 1, 1, 1],
          [0, 0, 1, 0, 1, 0],
          [1, 1, 0, 1, 1, 1]

        ]
      },
      {
        id: 2,
        title: "Sedes Sociales",
        pob_value: 65,
        total_value: 58,
        description: "Cobertura adecada de sedes sociales",
        medida_p:"Cantidad de sedes sociales x habitantes",
        medida_d:"Equidistancias y distribución territorial en la distribución de sedes sociales",
        estandar_p:"1 sede social c/ 20 mil hab.",
        estandar_d:"Radio de influencia 1 km lineales",
        grid: [
          [1, 1, 0, 0, 0, 0],
          [0, 1, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 1],
          [1, 1, 1, 0, 1, 0],
          [1, 1, 0, 1, 0, 1]

        ]
      },
    ],
    color: "#354394"
  },
  {
    id: 4,
    title: "Deporte",
    icon: "mdi mdi-football",
    showSubtopics: false,
    description: "Cobertura adecada de equipamientos deportivos.",
    
    subtopics: [
      {
        id: 1,
        title: "Gimnasios",
        pob_value: 30,
        total_value: 67,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidap:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"1 gimnasio c/ 10 mil hab.",
        grid: [
          [0, 0, 1, 0, 1, 0],
          [1, 0, 0, 1, 0, 1],
          [0, 1, 1, 0, 0, 1],
          [0, 0, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1]

        ]
      },
      {
        id: 2,
        title: "Multicanchas",
        pob_value: 40,
        total_value: 35,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidap:"Cantidad de multicanchas x habitantes",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"1 multicancha c/ 1.500 hab.",
        grid: [
          [0, 1, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 1],
          [1, 1, 1, 0, 1, 0],
          [1, 1, 0, 1, 0, 1],
          [0, 0, 1, 0, 0, 0],
        ]
      },
      {
        id: 3,
        title: "Canchas de Fútbol",
        pob_value: 75,
        total_value: 60,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidap:"Cantidad de canchas de futbol x habitantes",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"",
        grid: [
          [1, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0],
          [0, 0, 1, 1, 1, 1],
          [0, 0, 1, 0, 1, 0],
          [1, 1, 0, 1, 1, 1]

        ]
      },
    ],
    color: "#1172bf",
  },
  {
    id: 5,
    title: "Áreas Verdes",
    icon: "mdi mdi-forest",
    showSubtopics: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtopics: [
      {
        id: 1,
        title: "Áreas Verdes",
        pob_value: 75,
        total_value: 80,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidap:"m2 AV x habitante",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"",
        grid: [
          [1, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0],
          [0, 0, 1, 1, 1, 1],
          [0, 0, 1, 0, 1, 0],
          [1, 1, 0, 1, 1, 1]

        ]
      },
      {
        id: 2,
        title: "Parques",
        pob_value: 75,
        total_value: 56,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidap:"m2 de parque x habitante",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"",
        grid: [
          [0, 0, 1, 0, 1, 0],
          [0, 1, 0, 1, 0, 1],
          [1, 1, 0, 0, 0, 0],
          [1, 1, 0, 1, 0, 1],
          [0, 0, 1, 0, 0, 0]

        ]
      },
    ],
    color: "#3a853d",
  },
  {
    id: 6,
    title: "Movilidad",
    icon: "mdi mdi-bike",
    showSubtopics: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtopics: [
      {
        id: 1,
        title: "Ciclovías",
        pob_value: 75,
        total_value: 89,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        medidap:"ml ciclovías x hab.",
        estandar:"",
        grid: [
          [1, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0],
          [0, 0, 1, 1, 1, 1],
          [0, 0, 1, 0, 1, 0],
          [1, 1, 0, 1, 1, 1],
        ]
      },
      {
        id: 2,
        title: "Microbuses",
        pob_value: 54,
        total_value: 78,
        description: "Porcentaje de la población dentro del área de influencia de la red de transporte público mayor",
        medidap:"Porcentaje de la población dentro del área de influencia de la red de transporte público mayor",
        medidad:"Cantidad de gimnasios (min. 500 espectadores) x habitantes",
        estandar:"",
        grid: [
          [0, 1, 1, 0, 1, 0],
          [0, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 0, 1],
          [1, 1, 0, 1, 0, 1],
          [0, 0, 1, 0, 0, 0],
        ]
      },
    ],
    color: "#a35105",
  }
]