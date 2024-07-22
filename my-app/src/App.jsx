import logo from './da_bear.png';
import './App.css';
import { ReactTyped } from "react-typed";

function Logo() {
  return (
    <div className='absolute inset-x-20 flex space-x-2'>
      <img
        className="rounded-lg ml-2 float-left"
        src={logo}
        alt="bear"
        width={30}
        height={30} />
      <h6 className='font-bold text-white'>
        avvooturi
      </h6>
    </div>
  );
}

function Title() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <h1 className='text-white text-7xl'>
        Hello, I'm {" "}
        <ReactTyped
          strings={["Arjun Vooturi", "A Software Engineer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar='>'
          showCursor={true}
        />
      </h1>
    </div>
  );
}

function About() {
  return (
    <div className='flex justify-center items-center pt-20'>
      <div className='w-3/4 max-w-3xl mx-auto'>
        <h1 className='text-4xl text-white'>
          About Me
        </h1>
        <h3 className='text-xl text-white mt-4 break-normal'>
          When we pull up yeah on the toad, I keep clips with me so what do you kno? I had already knew they finna hate spanish language last week she nagged me this week I got new goals
        </h3>
      </div>
      <img
        className='w-1/6 max-w-3xl mx-auto rounded-lg ml-20'
        src={logo}
        alt="bear"
        width={300}
        height={300}
      />
    </div>
  );
}

function Img(source, alt) {
  return (
    <>
      <img
        src={source}
        alt={alt}
      />
    </>
  );
}

function Skills() {
  return (
    <div className='flex justify-center items-center pt-20'>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-4xl text-white'>
          Skills
        </h1>
        <div className='mt-4'>
          <h1 className='text-3xl text-white'>
            Programming Languages
          </h1>
          <div className='flex space-x-4 mt-4'>
            {Img("https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=React&labelColor=black", "React Badge")}
            <Img/>
            <Img/>
            <Img/>
          </div>
        </div>
        <div className='mt-4'>
          <h1 className='text-3xl text-white'>
            Programming Languages
          </h1>
          <div className='flex space-x-4 mt-4'>
            <img
              src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=React&labelColor=black"
              alt="React Badge"
            />
            <img
              src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=React&labelColor=black"
              alt="React Badge"
            />
            <img
              src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=React&labelColor=black"
              alt="React Badge"
            />
            <img
              src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=React&labelColor=black"
              alt="React Badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}




export default function App() {
  return (
    <div className='bg-black'>
      <Logo />
      <Title />
      <div className='border-t-4 border-indigo-500 border-8'></div>
      <About />
      <div className='mt-20 border-t-4 border-indigo-500 border-8'></div>
      <Skills />
    </div>
  );
}
