export default function handler(req, res) {
  const stock = [
    { item: "Óleo de motor", qty: 20 },
    { item: "Filtro de ar", qty: 15 },
    { item: "Pastilha de freio", qty: 8 }
  ];
  res.status(200).json(stock);
}
