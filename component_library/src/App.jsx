import Badge from "./components/Badge";
import Banner from "./components/Banner/index";

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
    <Badge key={color} color={color} shape="pill">
      Badge
    </Badge>
  ));

  return (
    <main className="font-inter">
      <div className="flex gap-2">{badges}</div>
      <div className="flex flex-col gap-2">
        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Text>
        </Banner>

        <Banner status="warning">
          <Banner.Title>Attention</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner.Text>
        </Banner>

        <Banner status="error">
          <Banner.Title>There is a problem with your application</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner.Text>
        </Banner>

        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Text>
        </Banner>

        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
        </Banner>

        <Banner status="warning">
          <Banner.Title>Attention</Banner.Title>
        </Banner>

        <Banner status="error">
          <Banner.Title>There is a problem with you application</Banner.Title>
        </Banner>

        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
        </Banner>
      </div>
    </main>
  );
}
