import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
const Container = () => {
  return (
    <div className="container">
      <Info />
      <div className="container">
        <About />
        <Interests />
      </div>
    </div>
  );
};

export default Container;
