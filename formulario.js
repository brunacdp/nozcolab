const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML = "<p class='font2-m' style='border-radius: 8px; background: #FEFFCE;'><span style='color: #317A00;'>Mensagem enviada</span>. Em breve retornaremos seu contato.</p>";
  } else {
    formulario.innerHTML = "<p class='font2-m' style='border-radius: 8px; background: #FEFFCE;'><span style='color: #E00000;'>Erro no envio</span>. Você pode enviar diretamente para o nosso e-mail em: <span style='font-weight: bold'>contato@nozcolab.com.br</span></p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch('enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);