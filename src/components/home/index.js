import react from "react";
import InputBox from "./input-box";
import HomeInfo from "./home-info";

const Home = (props) => {
  return (
    <div className="home">
      <div className="welcome-header">
        <InputBox />
      </div>
      <HomeInfo />
    </div>
  );
};

export default Home;
