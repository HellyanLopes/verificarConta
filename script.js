const codes = document.querySelectorAll('.code');

function mostrarCodigo() {
  var emailInput = document.getElementById('email').value;
  if (emailInput) {
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('codigo-form').style.display = 'block';
    document.getElementById('email-display').textContent = emailInput;
    codes[0].focus();
  } else {
    alert('Por favor, insira seu e-mail.');
  }
}

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 10);
      }
    } else if (e.key === 'Backspace') {
      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    }
  });
});

