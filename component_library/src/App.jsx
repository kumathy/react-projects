import Badge from "./components/Badge";

export default function App() {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const badges = colors.map((color) => (
    <Badge color={color} shape="pill">
      Badge
    </Badge>
  ));

  return <main>{badges}</main>;
}
