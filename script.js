function nextPart(choice) {
  const story = document.getElementById('story');
  const choices = document.getElementById('choices');

  if (choice === 'conversar') {
    story.textContent = 'Ela se emociona e agradece por você notar. Com sua ajuda, ela decide procurar apoio.';
    choices.innerHTML = '<p><strong>Você ajudou a quebrar o ciclo de violência.</strong></p>';
  } else if (choice === 'ignorar') {
    story.textContent = 'Com o tempo, a situação piora. Você se arrepende de não ter agido antes.';
    choices.innerHTML = '<p><strong>Ignorar sinais pode custar caro. Esteja atenta.</strong></p>';
  }
}
