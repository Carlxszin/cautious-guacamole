document.getElementById('formPoder').addEventListener('submit', async function(e) {
  e.preventDefault();

  const cidade = parseInt(document.getElementById('cidade').value);
  const tropas = parseInt(document.getElementById('tropas').value);
  const herois = parseInt(document.getElementById('herois').value);
  const tecnologia = parseInt(document.getElementById('tecnologia').value);
  const bonusAliança = parseInt(document.getElementById('bonusAliança').value);

  const response = await fetch('http://localhost:3000/api/poder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cidade, tropas, herois, tecnologia, bonusAliança })
  });

  const data = await response.json();
  document.getElementById('resultado').innerText = `Poder Total: ${data.poderTotal}`;
});
