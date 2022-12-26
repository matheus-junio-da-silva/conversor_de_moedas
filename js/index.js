document.getElementById('convert-to-dollar').addEventListener('click', e => {
  // Obter o valor em reais digitado pelo usuário
  const resultado = document.querySelector('#resultado');
  const amount = document.getElementById('amount').value;
  resultado.classList.remove('red');
  if (amount <= 0 || amount === '') {
    resultado.classList.add('red');
    resultado.innerText = 'Digite algum valor válido';
    return;
  }

  // Faça uma solicitação HTTP para a API de câmbio para obter a taxa de câmbio atual
  fetch('https://api.exchangerate-api.com/v4/latest/BRL')
    .then(response => response.json())
    .then(data => {
      // Calcule o valor em dólares usando a taxa de câmbio atual
      let dollarAmount = Number(amount) * data.rates.USD;
      dollarAmount = dollarAmount.toLocaleString('pt-BR', {
        style:'currency',
        currency: 'USD'
      })
      let realValue = Number(amount).toLocaleString('pt-BR', {
        style:'currency',
        currency: 'BRL'
      })
      // Exiba o valor em dólares para o usuário
      resultado.innerText = `${realValue} reais equivalem a ${dollarAmount} dólares.`;
    })
    .catch( e => {
      console.log(e);
    });
});

document.getElementById('convert-to-real').addEventListener('click', e => {
  // Obter o valor em dólares digitado pelo usuário
  const resultado = document.querySelector('#resultado');
  const amount = document.getElementById('amount').value;
  resultado.classList.remove('red');
  if (amount <= 0 || amount === '') {
    resultado.classList.add('red');
    resultado.innerText = 'Digite algum valor válido';
    return;
  }
  // Faça uma solicitação HTTP para a API de câmbio para obter a taxa de câmbio atual
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      // Calcule o valor em reais usando a taxa de câmbio atual
      let realAmount = Number(amount) * data.rates.BRL;
      realAmount = realAmount.toLocaleString('pt-BR', {
        style:'currency',
        currency: 'BRL'
      })
      let dollarValue = Number(amount).toLocaleString('pt-BR', {
        style:'currency',
        currency: 'USD'
      })
      // Exiba o valor em reais para o usuário
      resultado.innerText = `${dollarValue} dólares equivalem a ${realAmount} reais.`
    })
    .catch( e => {
      console.log(e);
    });
});
  
