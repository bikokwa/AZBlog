import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps a breeze!",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "nextjs-file-based-routing.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps a breeze!",
    date: "2022-02-10",
  },
  {
    slug: "mastering-javascript",
    title: "Mastering JavaScript",
    image: "mastering-js-thumb.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps a breeze!",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
