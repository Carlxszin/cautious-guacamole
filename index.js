const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/poder', (req, res) => {
  const { cidade, tropas, herois, tecnologia, bonusAliança } = req.body;

  if (
    cidade == null || tropas == null || herois == null ||
    tecnologia == null || bonusAliança == null
  ) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  const poder = cidade + tropas + herois + tecnologia + bonusAliança;

  res.json({
    mensagem: 'Poder calculado com sucesso!',
    poderTotal: poder
  });
});

app.listen(port, () => {
  console.log(`API do Whiteout Survival rodando em http://localhost:${port}`);
});
