import Badge from "./components/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card";

export default function App() {
  const badgeColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const bannerContents = [
    {
      status: "success",
      title: "Congratulations!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      status: "warning",
      title: "Attention",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "error",
      title: "There is a problem with your application",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "neutral",
      title: "Update available",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      status: "success",
      title: "Congratulations!",
    },
    {
      status: "warning",
      title: "Attention",
    },
    {
      status: "error",
      title: "There is a problem with your application",
    },
    {
      status: "neutral",
      title: "Update available",
    },
  ];

  const badges = badgeColors.map((color) => (
    <Badge key={color} color={color} shape="pill">
      Badge
    </Badge>
  ));

  const banners = bannerContents.map((banner, index) => (
    <Banner key={index} status={banner.status}>
      <Banner.Title>{banner.title}</Banner.Title>
      {banner.text && <Banner.Text>{banner.text}</Banner.Text>}
    </Banner>
  ));

  return (
    <main className="font-inter overflow-x-hidden">
      <div className="flex flex-col gap-10 px-4 py-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-2">{badges}</div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Banners</h2>
          <div className="flex flex-col gap-4">{banners}</div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <Card title="Easy Deployment">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card>
        </section>
      </div>
    </main>
  );
}
