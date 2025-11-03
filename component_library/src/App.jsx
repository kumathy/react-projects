import Badge from "./components/Badge";
import Banner from "./components/Banner";

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

  return (
    <main>
      <div className="flex gap-2">{badges}</div>
    </main>
  );
}
