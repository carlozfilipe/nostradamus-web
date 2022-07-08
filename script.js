const answerElement = document.querySelector('#answer');
const inputQuestion = document.querySelector('#inputQuestion');
const buttonAskQuestion = document.querySelector('#askQuestion');

const answers = [
  'Haha! Tá de sacanagem com minha cara?',
  'Certeza!',
  'Não tenho tanta certeza.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim e Não!',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'A questão que se coloca...',
  'Siô, vai procurar o que fazer!',
];

let addAskQuestion = () => {
  /* Button Event Listender */
  buttonAskQuestion.addEventListener('click', () => {
    if (inputQuestion.value === '') {
      alert('⚠️ Digite uma pergunta! Não deixe o campo vazio! ⚠️');
      return;
    }

    buttonAskQuestion.setAttribute('disabled', true);

    const answer = '<div>' + inputQuestion.value + '</div>';

    if (inputQuestion.value.substr(-1) === '?') {
      const totalAnswers = answers.length;
      const randomNumber = Math.floor(Math.random() * totalAnswers);
      answerElement.innerHTML = answer + answers[randomNumber];
      inputQuestion.value = '';
      answerElement.style.opacity = 1;
    } else {
      alert('Coloque a interrogação ao final da pergunta, por gentileza! 🫶');
    }

    setTimeout(() => {
      answerElement.style.opacity = 0;
      buttonAskQuestion.removeAttribute('disabled');
    }, 2000);
  });

  /* Input Event Listender */
  inputQuestion.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      if (inputQuestion.value === '') {
        alert('⚠️ Digite uma pergunta! Não deixe o campo vazio! ⚠️');
        return;
      }

      const answer = '<div>' + inputQuestion.value + '</div>';

      if (inputQuestion.value.substr(-1) === '?') {
        const totalAnswers = answers.length;
        const randomNumber = Math.floor(Math.random() * totalAnswers);
        answerElement.innerHTML = answer + answers[randomNumber];
        inputQuestion.value = '';
        answerElement.style.opacity = 1;
      } else {
        alert('Coloque a interrogação ao final da pergunta, por gentileza! 🫶');
      }

      setTimeout(() => {
        answerElement.style.opacity = 0;
      }, 2000);
    }
  });
};

addAskQuestion();
