export default function handler(req, res) {
  const items = [
    { id: 1, name: "Óleo de motor" },
    { id: 2, name: "Filtro de ar" },
    { id: 3, name: "Pastilha de freio" }
  ];
  res.status(200).json(items);
}
