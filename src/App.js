import "./App.css";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="app bg-black h-vh pt-4 pb-[80px] px-4 sm:px-[auto] lg:px[4%] text-white flex flex-col md:h-screen  ">
      <div className=" header text-3xl sm:text-4xl lg:text-5xl font-bold  w-full text-center tracking-wide">
        <img
          src="./imgs/logo.png"
          className="h-[70px] pt-2 w-[80%] sm:w-[50%] md:w-[35%] mx-auto"
          alt=""
        />
      </div>

      <img
        className="mx-auto w-[100%] md:w-[75%] h-[300px] sm:h-[450px] md:h-[500px] mt-6  sm:mb-2 "
        src="./imgs/777.gif"
        alt=""
      />
      <div className=" uppercase font-[300px] text-center w-[80%] md:w-1/2 lg:w-1/3 mx-auto p-4 md:p-8 rounded-[50px] text-2xl md:text-3xl lg:text-4xl mb-0 mt-12 md:mt-0 md:py-2  tracking-wider">
        Coming Soon
      </div>
      <p className=" uppercase text-[0.8rem] mb-0 text-center mx-auto w-[80%] md:w-1/2 tracking-wide">
        Every Saint Has a Past, But Every Sinner Has a Future
      </p>

      <div className="footer mb-[83px] sm:mb-2 md:flex justify-between mt-28 md:mt-3 lg:mt-[-40px] items-center ">
        <div className="left text-[0.5rem]  sm:font-normal md:font-bold sm:text-[0.6rem] w-[80%] max-w-[350px] sm:min-w-[340px] min-w-[200px] mx-auto lg:mx-0 lg:w-[40%]   font-lighter flex   justify-between items-center ">
          <h4 className="mr-1 sm:mr-0">TERMS & CONDITIONS</h4>
          <h4 className="mr-1 sm:mr-0">PRIVACY POLICY</h4>
          <h4 className="mr-1 sm:mr-0">2022 SINNER CLUB</h4>
        </div>
        <div className="right flex w-[10%] justify-between min-w-[200px] mx-auto mt-5 lg:mt-0 lg:mr-0 ">
          <a
            href="https://discord.gg/PG6wPHuX7t"
            target={"_blank"}
          >
            <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
              {" "}
              <FaDiscord color="black" size={"70%"} />{" "}
            </div>
          </a>
          <a href="https://twitter.com/thesinners_nft?s=21" target={"_blank"}>
            <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
              {" "}
              <FaTwitter color="black" size={"70%"} />{" "}
            </div>
          </a>
          <a
            href="https://instagram.com/thesinnersnft?utm_medium=copy_link"
            target={"_blank"}
          >
            <div className="icon bg-white rounded-full w-12 h-12 flex justify-center pt-3 hover:bg-gray-300 ">
              {" "}
              <FaInstagram color="black" size={"70%"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
