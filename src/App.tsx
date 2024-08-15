import Logo from "./assets/blockspherelogo..svg"
import patternOne from "./assets/bg-pattern-one.svg"
import arrow from "./assets/green-arrow.svg"
import star from "./assets/star.svg"
import hero from "./assets/Image.svg"
import line from "./assets/Line 33.svg";
import rock from "./assets/space-rock.svg"
import dot from "./assets/Ellipse 11.svg"

function App() {


  return (
      <div className='h-screen text-white max-w-[1440px] mx-auto relative'>
        <nav className="w-11/12 mx-auto mt-3">
          <div className='flex justify-between items-center p-4'>
            <div className='flex items-center justify-between w-[70%]'>
              <img src={Logo} alt='Netflix Logo'  />
              <ul className='flex space-x-20 '>
                <li className="hover:text-[#39FF14] active:text-[#39FF14]">Home</li>
                <li className="hover:text-[#39FF14] active:text-[#39FF14]">Podcasts</li>
                <li className="hover:text-[#39FF14] active:text-[#39FF14]">Products</li>
                <li className="hover:text-[#39FF14] active:text-[#39FF14]">About Us</li>
              </ul>
            </div>
            <button className="border-2 border-[#39FF14] text-[#39FF14] flex items-center gap-x-1 px-5 py-2 rounded-md">dApp <img src={arrow} alt="" /></button>
          </div>
        </nav>
        <img src={star} alt="" className="absolute top-[155px] left-[340px] -z-10" />
        <img src={patternOne} alt="" className="absolute top-[168px] left-20 mx-auto -z-[1]" />
        <img src={patternOne} alt="" className="absolute top-[332px] left-20 mx-auto -z-[1]" />
        <img src={patternOne} alt="" className="absolute top-[496px] left-20 mx-auto -z-[1]" />
        <img src={patternOne} alt="" className="absolute top-[660px] left-20 mx-auto -z-[1]" />
        <img src={patternOne} alt="" className="absolute top-[824px] left-20 mx-auto -z-[1]" />
        <img src={star} alt="" className="absolute top-[558px] left-[340px] -z-10" />
        <img src={line} alt="" className="absolute top-[525px] left-[351px] -z-10" />
        <img src={rock} alt="" className="absolute top-[386px] left-[1320px] -z-10" />
        <img src={dot} alt="" className="absolute top-[744px] left-[46px] -z-10" />

        <div>
          <div className="bg-transparent w-fit h-fit mx-auto btn-gradient-2 mt-[6.5rem]">
            <span className="flex gap-x-2 items-center mx-auto  w-fit backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-full bg-white px-6 py-2 text-[#39FF14] border border-[#39FF14] "><p>The first multi-blockchain powered dApp</p> <img src={arrow} alt="" className="w-ful h-full" /></span>
          </div>
          <h1 className="font-bold text-6xl mx-auto w-1/2 text-center mt-10">Empower Your <br/> <span className="text-[#39FF14]">Decentralized</span> Future</h1>
          <p className="text-[#828282] w-[45%] mx-auto text-center mt-4">Discover secure and transparent blockchain solutions. Take control of your digital assets with our cutting-edge dApps.</p>
        </div>
        <img src={hero} alt="" className="absolute bottom-0 2xl:-bottom-40 left-56" />
        {/* <style>
          {`
            .btn-gradient-2 {
             border: 5px solid transparent;
            border-image: linear-gradient(to right, #f00, #00f);
            border-image-slice: 1;
            border-radius: 99px;
            background-origin:border-box;
            background-clip:content-box, border-box;	
            width: fit-content;	
            height: fit-content;
            }

        `}
        </style> */}
      </div>
  )
}

export default App
