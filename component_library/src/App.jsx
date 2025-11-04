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

  const badges = colors.map((color) => (
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
    <main className="font-inter flex flex-col gap-5">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex gap-2">{badges}</div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Banners</h2>
        <div className="flex flex-col gap-4">{banners}</div>
      </section>
    </main>
  );
}
