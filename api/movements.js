export default function handler(req, res) {
  if (req.method === 'POST') {
    const { item, qty, type } = req.body;
    res.status(201).json({ message: `Movimentação registrada: ${type} de ${qty} ${item}` });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
