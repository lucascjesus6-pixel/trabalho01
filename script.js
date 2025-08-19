const questions = [
  // Física
  {
    type: "Física",
    text: "Você vê sua vizinha com hematomas novamente. Ela diz que caiu da escada, mas parece nervosa.",
    choices: [
      { text: "Ligar para a polícia anonimamente", score: 1 },
      { text: "Não se envolver", score: 0 },
      { text: "Confrontar o agressor diretamente", score: -1 }
    ]
  },
  {
    type: "Física",
    text: "Sua prima chega com marcas no braço. Ela diz: 'foi só um empurrão'.",
    choices: [
      { text: "Oferecer ajuda e falar sobre apoio jurídico", score: 1 },
      { text: "Apenas escutar e não opinar", score: 0 },
      { text: "Fingir que não viu nada", score: -1 }
    ]
  },
  {
    type: "Física",
    text: "Você escuta gritos e barulhos de agressão no apartamento ao lado à noite.",
    choices: [
      { text: "Ligar 180 e relatar o que ouviu", score: 1 },
      { text: "Ignorar, é briga de casal", score: -1 },
      { text: "Bater na porta para interromper", score: 0 }
    ]
  },

  // Psicológica
  {
    type: "Psicológica",
    text: "Sua colega de trabalho ouve frases como 'ninguém vai te querer' do parceiro dela.",
    choices: [
      { text: "Falar com ela sobre relacionamentos abusivos", score: 1 },
      { text: "Fazer piada com a situação", score: -1 },
      { text: "Ignorar, não é sua função", score: 0 }
    ]
  },
  {
    type: "Psicológica",
    text: "Ela conta que o parceiro controla tudo o que ela veste e quem ela vê.",
    choices: [
      { text: "Ajudar a identificar isso como abuso", score: 1 },
      { text: "Dizer que isso é cuidado", score: -1 },
      { text: "Aconselhar ela a aceitar para evitar brigas", score: 0 }
    ]
  },
  {
    type: "Psicológica",
    text: "Ela vive com medo e ansiedade quando o marido chega em casa.",
    choices: [
      { text: "Encaminhá-la a um psicólogo", score: 1 },
      { text: "Dizer que é normal estar com medo às vezes", score: 0 },
      { text: "Sugere que ela reze para melhorar", score: -1 }
    ]
  },

  // Sexual
  {
    type: "Sexual",
    text: "Ela diz que o parceiro insiste em relações mesmo quando ela não quer.",
    choices: [
      { text: "Explicar que isso é estupro conjugal", score: 1 },
      { text: "Dizer que é 'obrigação de esposa'", score: -1 },
      { text: "Dizer que ela deveria conversar com ele", score: 0 }
    ]
  },
  {
    type: "Sexual",
    text: "Ela contou que ele compartilhou fotos íntimas dela sem permissão.",
    choices: [
      { text: "Incentivar a denúncia na delegacia", score: 1 },
      { text: "Dizer que ela deveria ter cuidado com as fotos", score: -1 },
      { text: "Não opinar", score: 0 }
    ]
  },
  {
    type: "Sexual",
    text: "Ela foi drogada e abusada em uma festa.",
    choices: [
      { text: "Levá-la ao hospital e ajudar na denúncia", score: 1 },
      { text: "Perguntar se ela tem certeza do que aconteceu", score: -1 },
      { text: "Sugerir esquecer o ocorrido", score: 0 }
    ]
  },

  // Patrimonial
  {
    type: "Patrimonial",
    text: "O parceiro dela vendeu seu celular sem avisar.",
    choices: [
      { text: "Dizer que ela tem direito de reaver seus bens", score: 1 },
      { text: "Dizer que é só um celular", score: 0 },
      { text: "Ficar do lado dele", score: -1 }
    ]
  },
  {
    type: "Patrimonial",
    text: "Ele controla todo o dinheiro e não deixa ela trabalhar.",
    choices: [
      { text: "Ajudar ela a buscar autonomia financeira", score: 1 },
      { text: "Dizer que isso é o normal em casamentos", score: -1 },
      { text: "Falar para ela economizar escondido", score: 0 }
    ]
  },
  {
    type: "Patrimonial",
    text: "Ele destrói objetos dela quando discutem.",
    choices: [
      { text: "Isso é crime, deve ser denunciado", score: 1 },
      { text: "Pelo menos ele não bate nela", score: -1 },
      { text: "Ela deve tentar acalmar ele", score: 0 }
    ]
  },

  // Moral
  {
    type: "Moral",
    text: "Ele a xinga e humilha publicamente com frequência.",
    choices: [
      { text: "Isso é violência moral, oriente ela a denunciar", score: 1 },
      { text: "Fingir que não ouviu", score: 0 },
      { text: "Rir da situação", score: -1 }
    ]
  },
  {
    type: "Moral",
    text: "Ele espalha mentiras sobre ela nas redes sociais.",
    choices: [
      { text: "Apoiar a busca por um boletim de ocorrência", score: 1 },
      { text: "Ignorar porque é 'drama'", score: -1 },
      { text: "Compartilhar para ver a fofoca", score: -1 }
    ]
  },
  {
    type: "Moral",
    text: "Ele a chama de 'louca', 'burra' e a desmoraliza diante da família.",
    choices: [
      { text: "Orientar a procurar ajuda legal e psicológica", score: 1 },
      { text: "Ficar neutro", score: 0 },
      { text: "Dizer que ela merece ouvir a verdade", score: -1 }
    ]
  }
];

let currentQuestion =
