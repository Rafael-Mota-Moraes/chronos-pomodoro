self.onmessage = function (event) {
  console.log('Worker recebeu: ', event.data);

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer um favor');
      break;
    }
    case 'FALA_OI': {
      self.postMessage('Oi');
      break;
    }
    case 'FECHAR': {
      self.postMessage('Fechando');
      self.close();
      break;
    }
    default:
      self.postMessage('Não entendi');
      break;
  }
};
