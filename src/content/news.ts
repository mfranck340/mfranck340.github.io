const linkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-2 hover:text-accent transition-colors">
  <path d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
</svg>`;

export const news = [
  {
    year: 2026,
    items: [
      {
        cardType: 'milestone',
        milestoneType: 'Fellowship',
        date: 'May',
        title: 'Paper Accepted at ITSC 2026',
        description: 'A research paper has been accepted at the IEEE International Conference on Intelligent Transportation Systems (ITSC 2026).',
      },
      {
        cardType: 'milestone',
        milestoneType: 'Fellowship',
        date: 'April',
        title: 'Awarded FPI Fellowship at University of Alcalá',
        description: 'I was awarded an FPI fellowship at the University of Alcalá to support my doctoral research in autonomous driving.',
      },
      {
        cardType: 'event',
        date: 'March',
        title: 'Master’s Graduation Ceremony',
        description: 'Attended the graduation ceremony for the Master’s Degree in Cybersecurity at the University of Alcalá, where I received the Extraordinary Award as the top-ranked student of my cohort.',
        image: 'https://media.licdn.com/dms/image/v2/D4E22AQE67wzyGUW0ow/feedshare-shrink_800/B4EZ4BjHJqJgAc-/0/1778142442461?e=1780531200&v=beta&t=n6K2xk72hs35ULN8lQG8gP5ni2CB3JeCXSJlOlHaNiA',
        imagePosition: 'center',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7458069977082888192/',
        icon: linkIcon,
      }
    ],
  },
  {
    year: 2025,
    items: [
      {
        cardType: 'milestone',
        milestoneType: 'PhD',
        date: 'December',
        title: 'Started PhD at University of Alcalá',
        description: 'I started my PhD at the University of Alcalá, focused on AI for control and decision making in autonomous driving.',
      },
      {
        cardType: 'event',
        date: 'November',
        title: 'Eighth Iberian Robotics Conference – ROBOT 2025',
        description: 'Attended the Eighth Iberian Robotics Conference – ROBOT 2025, accompanying the presentation of the work <strong>“Low-cost Driver Monitoring System Using Deep Learning”</strong> by Marco Fernández Pérez.',
        link: 'https://www.linkedin.com/posts/miguel-antunes-garcia_this-month-i-attended-the-eight-iberian-activity-7400504511750086656-wsfr?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvfGnkBaSwU-q8MIaBbp7wG4zBRpbyS5bY',
        image: '/news/robot25.jpeg',
        icon: linkIcon,
      },
      {
        cardType: 'publication',
        publicationType: 'Book chapter',
        publicationVenue: 'EDUEMER 2025',
        date: 'September',
        title: 'Impacto de las metodologías activas en la enseñanza universitaria de la robótica',
        description: 'Co-authored an academic publication derived from my Bachelor\'s thesis, published in the EDUEMER 2025 proceedings book <strong>Educación, tecnología emergente y conciencia global</strong>, pp. 1951-1966. The work focuses on active learning methodologies in university robotics education using Matlab-ROS and TurtleBot.',
        link: 'https://www.dykinson.com/libros/educacion-tecnologia-emergente-y-conciencia-global/9791370065560/',
        icon: linkIcon,
      },
      {
        cardType: 'event',
        date: 'September',
        title: 'RobeSafe Autonomous Driving Demo',
        description: 'We showcased our autonomous driving stack at the University of Alcalá during the European Researchers Night.',
        image: 'https://media.licdn.com/dms/image/v2/D4D22AQHpgbG5wjX_sA/feedshare-shrink_1280/B4DZmuTiZMGkAs-/0/1759565985604?e=1780531200&v=beta&t=YTd5KFSOFrjYW73rNU2KESrUK--8mMyZ5xF0DFHNvXU',
        imagePosition: 'bottom',
        link: 'https://www.linkedin.com/posts/robesafe-research-group_europeanresearchersnight-nocheeuropeadelosinvestigadores-activity-7380154657915944960-GWLr?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvfGnkBaSwU-q8MIaBbp7wG4zBRpbyS5bY',
        icon: linkIcon,
      },
      {
        cardType: 'achievement',
        date: 'September',
        title: 'Master’s Thesis Defense',
        description: 'Defended my Master’s thesis, titled <strong>“Study of Security Measures in Digital Twins: Practical Case of Freight Wagon Monitoring”</strong>, achieving an outstanding grade of 9/10.',
      },
      {
        cardType: 'publication',
        publicationType: 'Conference Paper',
        publicationVenue: '2025 IEEE Intelligent Vehicles Symposium (IV)',
        date: 'August',
        title: 'Design and Development of a Digital Twin for Monitoring Railway Infrastructure',
        description: 'Co-authored a conference paper published in the proceedings of the 2025 IEEE Intelligent Vehicles Symposium (IV), pp. 351–356. The work presents the design and development of a digital twin for monitoring railway infrastructure.',
        link: 'https://ieeexplore.ieee.org/abstract/document/11097609',
        icon: linkIcon,
      },
      {
        cardType: 'event',
        date: 'June',
        title: 'Poster Presentation at IEEE IV 2025',
        description: 'Presented our work on the design and development of a digital twin for monitoring railway infrastructure during a poster session at the 2025 IEEE Intelligent Vehicles Symposium (IV 2025).',
        image: '/news/iv25.jpeg',
      }
    ],
  },
  {
    year: 2024,
    items: [
      {
        cardType: 'event',
        date: 'October',
        title: 'RobeSafe Autonomous Driving Demo – AVAD Project',
        description: 'Participated in a public outreach event showcasing an autonomous vehicle developed by the RobeSafe Research Group at the University of Alcalá. The demo presented a real vehicle equipped with onboard sensors for autonomous driving applications.',
        image: '/news/avad-demo-2024.jpg',
        imagePosition: 'center',
        eventLayout: 'wide-image',
        link: 'https://cultura.uah.es/es/evento/Coche-autonomo.-Proyecto-AVAD/',
        icon: linkIcon,
      },
      {
        cardType: 'achievement',
        date: 'July',
        title: 'Bachelor\'s Thesis Defense',
        description: 'I defended my Bachelor\'s thesis, titled <strong>Development of Navigation Applications for the TurtleBot 4 Robot in the Matlab-ROS2 Environment</strong>, receiving a 10/10 grade and an honors distinction.',
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        cardType: 'milestone',
        milestoneType: 'Research group',
        date: 'September',
        title: 'Joined RobeSafe Research Group',
        description: 'I joined the RobeSafe Research Group through my undergraduate thesis supervisor, who introduced me to the group while supervising my final degree project.',
      },
    ],
  },
];
