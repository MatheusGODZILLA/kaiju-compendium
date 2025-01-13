const dataset = [
    {
        image: 'https://godzilla.com/cdn/shop/files/1954-087.jpg?v=1687898191&width=1440',
        name: 'GODZILLA (1954)',
        description: 'O Godzilla de 1954 surgiu como um monstro enorme, de 50 metros de altura, com barbatanas dorsais escarpadas do pescoço à cauda. Nunca antes os espectadores haviam visto um monstro dessa magnitude e, quando Godzilla lançou seu terrível raio de calor para incendiar Tóquio, o cinema mudou para sempre.',
        height: '50',
        weight: '20,000',
        era: 'Showa',
        roar: require('../assets/roars/Godzilla_1954.mp3'),
    },
    {
        image: 'https://godzilla.com/cdn/shop/files/King-Ghidorah_2001.jpg?v=1687983115&width=1440',
        name: 'KING GHIDORAH (GMK)',
        description: 'O King Ghidorah de GMK é único entre as outras encarnações, pois ele é retratado como um monstro guardião benevolente que defende o Japão contra o Godzilla. King Ghidorah foi um dos três Monstros Guardiões e, nos tempos antigos, era conhecido como Yamata no Orochi. Depois de ser morto por antigos guerreiros japoneses, Ghidorah foi colocado para descansar sob o Aokigahara, onde os guerreiros esperavam que ele permanecesse até retornar um dia para salvar o Japão.',
        height: '50',
        weight: '25,000',
        era: 'Millennium',
        roar: require('../assets/roars/GMK_Ghidorah.mp3'),
    },
    {
        image: 'https://wikizilla.org/w/thumb.php?f=GKOTM_custom_textless_December_poster_Rodan.png&width=800',
        name: 'RODAN (MonsterVerse)',
        description: 'Com a capacidade de arrasar cidades inteiras simplesmente voando, Rodan era temido como um destruidor pelos antigos humanos, que o apelidaram de “Demônio do Fogo”. Nascido no vulcão El Nido del Demonio, na Isla de Mara, México, uma instalação de contenção foi estabelecida lá pela Monarch em 1991.',
        height: '46.9',
        weight: '39,043',
        era: 'MonsterVerse',
        roar: require('../assets/roars/MonsterVerse_Rodan.mp3'),
    },
    {
        image: 'https://wikizilla.org/w/images/4/49/MechaGodzilla-2.jpg',
        name: 'MECHAGODZILLA (Heisei)',
        description: 'Como sua contraparte da era Showa, essa versão do Mechagodzilla foi construída especificamente para destruir o Godzilla; no entanto, dessa vez, foi construída pela organização militar humana G-Force para defender o Japão do monstro. Construído com a tecnologia recuperada dos destroços do Mecha-King Ghidorah, o Mechagodzilla foi lançado na batalha contra o Godzilla quando ele chegou ao Japão em busca do BabyGodzilla.',
        height: '120',
        weight: '150,000',
        era: 'Heisei',
        roar: require('../assets/roars/MechaGodzilla_Roars.mp3'),
    },
    {
        image: 'https://wikizilla.org/w/thumb.php?f=GMMG_-_Mothra.jpg&width=330',
        name: 'Mothra (Tokyo SOS)',
        description: 'Descendente da Mothra original que atacou Tóquio e a cidade de New Kirk em 1961, a imago Mothra viajou para o Japão junto com o Shobijin em 2004 para avisar Shinichi Chujo que o uso dos restos mortais do Godzilla pela JSDF para construir o Kiryu era imoral e que ela seria forçada a declarar guerra à humanidade se os restos mortais não fossem devolvidos ao mar. O Shobijin prometeu que Mothra defenderia o Japão contra o segundo Godzilla no lugar do Kiryu se suas exigências fossem atendidas.',
        height: '36',
        weight: '12,000',
        era: 'Millennium',
        roar: require('../assets/roars/Mothra_Tokyo_SOS.mp3'),
    },
];

export default dataset;