import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import News from "../components/news/News";
import Works from "../components/works/Works";
import FooterBar from "../components/FooterBar";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-haiti">
        <About />
        <Works />
        <News />
        <Contact />
      </div>
      <FooterBar />
    </>
  );
};

export default Home;
