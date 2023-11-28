// Este é um array de objetos chamado "characters". Cada objeto representa um personagem.
const characters = [
    // Cada personagem é um objeto com várias propriedades.
    {
        id: 1, // A propriedade "id" é um identificador único para cada personagem.
        name: 'Satoru Gojo', // A propriedade "name" é o nome do personagem.
        type: 'Feiticeiro', // A propriedade "type" é o tipo do personagem.
        img: 'https://static.wikia.nocookie.net/animeverso/images/f/fe/Satoru_Gojo_%28Jump_GIGA%29.png/revision/latest/scale-to-width-down/1000?cb=20230808030559&path-prefix=pt-br', // A propriedade "img" é a URL de uma imagem do personagem.
        typeDescription:'Tecnica Amaldicoada', // A propriedade "typeDescription" descreve o tipo do personagem.
        description: 'Ilimitado e Six-eye', // A propriedade "description" é uma descrição do personagem.
        atk: 150, // A propriedade "atk" é o valor de ataque do personagem.
        def: 150, // A propriedade "def" é o valor de defesa do personagem.
        level: 'Especial' // A propriedade "level" é o nível do personagem.
    },
    // O array continua com mais objetos, cada um representando um personagem diferente.
    {
        id: 2,
        name: 'Suguru Geto',
        type: 'Feiticeiro',
        img: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/56/Suguru_Geto_young_%28Anime%29.png/revision/latest?cb=20221217104834',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Manipulacao de Maldicao',
        atk: 110,
        def: 100,
        level: 'Especial'
    },
    {
        id: 3,
        name: 'Mei Mei',
        type: 'Feiticeiro',
        img: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/73/Mei_Mei_%28Anime%29.png/revision/latest?cb=20210201021211',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Manipulacao de corvos',
        atk: 80,
        def: 80,
        level: 'Primeiro'
    },
    {
        id: 4,
        name: 'Kento Nanami',
        type: 'Feiticeiro',
        img: 'https://static.wikia.nocookie.net/vsbattles/images/0/0e/Nanami_using_his_skill_%28anime%29.png/revision/latest?cb=20220320114635',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Hora extra e Abrindo o jogo',
        atk: 90,
        def: 90,
        level: 'Primeiro'
    },
    {
        id: 5,
        name: 'Toji Fushiguro',
        type: 'Feiticeiro',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93da57db-9cd4-4308-abc2-cfe884e73c93/dgbq5zv-9b30c7f4-09bf-4e13-bcd9-41b671ac1d6c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkzZGE1N2RiLTljZDQtNDMwOC1hYmMyLWNmZTg4NGU3M2M5M1wvZGdicTV6di05YjMwYzdmNC0wOWJmLTRlMTMtYmNkOS00MWI2NzFhYzFkNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Rp27Xt8OjfMjVi5ETgQ9BvSv-tnXfTV5MDKcUvjSYs',
        typeDescription:'Restricao Congenita',
        description: 'Forca e velocidade sobre-humana',
        atk: 120,
        def: 115,
        level: 'Especial'
    },
    {
        id: 6,
        name: 'Yuta Okkotsu',
        type: 'Feiticeiro',
        img: 'https://static.wikia.nocookie.net/liberproeliis/images/a/a7/Yuta4.png/revision/latest?cb=20230704144157&path-prefix=pt-br',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Espírito Vingativo Especial "Rika"',
        atk: 115,
        def: 100,
        level: 'Especial'
    },
    {
        id: 7,
        name: 'Yuji itadori',
        type: 'Feiticeiro',
        img: 'https://static.wikia.nocookie.net/liberproeliis/images/e/e1/Yuji2.png/revision/latest?cb=20230703185200&path-prefix=pt-br',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Kokusen e hospedeiro de Ryomen Sukuna',
        atk: 90,
        def: 60,
        level: 'Primeiro'
    },
    {
        id: 8,
        name: 'Nobara Kugisaki',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Tecnica do Boneco de Palha',
        atk: 50,
        def: 45,
        level: 'Terceiro'
    },
    {
        id: 9,
        name: 'Megumi Fushiguro',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Tecnica das 10 sombras',
        atk: 75,
        def: 70,
        level: 'Segundo'
    },
    {
        id: 10,
        name: 'PANDA',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Modo Gorila e Modo Triceratops',
        atk: 50,
        def: 75,
        level: 'Segundo'
    },
    {
        id: 11,
        name: 'Toge Inumaki',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Fala Amaldicoada',
        atk: 125,
        def: 25,
        level: 'Primeiro'
    },
    {
        id: 12,
        name: 'Maki Zenin',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Restricao Congenita',
        description: 'Forca sobre-humana',
        atk: 50,
        def: 40,
        level: 'Quarto'
    },
    {
        id: 13,
        name: 'Aoi Todo',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Boogie Woogie',
        atk: 90,
        def: 80,
        level: 'Primeiro'
    },
    {
        id: 14,
        name: 'Ultimate Mechamaru',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Liberacao da Espada e Canhao Definitivo',
        atk: 80,
        def: 75,
        level: 'Primeiro'
    },
    {
        id: 15,
        name: 'Momo Nishimiya',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Foice do Vento e Voa',
        atk: 55,
        def: 60,
        level: 'Segundo'
    },
    {
        id: 16,
        name: 'Kasumi Miwa(Pobre)',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Novo Estilo da Sombra',
        atk: 30,
        def: 20,
        level: 'Terceiro'
    },
    {
        id: 17,
        name: 'Mai Zenin',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'A Criacao',
        atk: 40,
        def: 20,
        level: 'Terceiro'
    },
    {
        id: 18,
        name: 'Noritoshi Kamo',
        type: 'Feiticeiro',
        img: '',
        typeDescription:'Tecnica Amaldicoada',
        description: 'Manipulacao Sanguinea',
        atk: 75,
        def: 65,
        level: 'Segundo'
    },
    {
        id: 19,
        name: 'Mahoraga',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Invocacao',
        description: 'Invocacao suprema das 10 sombras',
        atk: 150,
        def: 145,
        level: 'Especial'
    },
    {
        id: 20,
        name: 'Mahito',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Transfiguracao Inerte',
        atk: 105,
        def: 105,
        level: 'Especial'
    },
    {
        id: 21,
        name: 'Jogo',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Pirotecnico',
        atk: 110,
        def: 90,
        level: 'Especial'
    },
    {
        id: 22,
        name: 'Dagon',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Shikigamis e Ondas do Desastre ',
        atk: 100,
        def: 95,
        level: 'Especial'
    },
    {
        id: 23,
        name: 'Hanami',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Brotos amaldicoados e Jardim de flores',
        atk: 95,
        def: 100,
        level: 'Especial'
    },
    {
        id: 24,
        name: 'Choso',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Manipulacao sanguinea e Trombose',
        atk: 95,
        def: 95,
        level: 'Especial'
    },
    {
        id: 25,
        name: 'Dragao Arco-iris',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Invocacao',
        description: 'Invocacao do Suguru Geto',
        atk: 50,
        def: 140,
        level: 'Especial'
    },
    {
        id: 26,
        name: 'Cao divino: Totalidade',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Invocacao',
        description: 'Invocacao das 10 sombras',
        atk: 100,
        def: 50,
        level: 'Primeiro'
    },
    {
        id: 27,
        name: 'Cabeca de Mosca',
        type: 'Maldicao',
        img: '',
        typeDescription: 'Tecnica Amaldicoada',
        description: 'Nao tem',
        atk: 1,
        def: 1,
        level: 'Quarto'
    },
]
