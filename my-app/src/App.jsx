import logo from './da_bear.png';
import './App.css';
import { ReactTyped } from "react-typed";

function Logo() {
  return (
    <>
    <div className='absolute inset-x-20 flex space-x-2'>
      <img
        className="rounded-lg ml-2 float-left"
        src={logo}
        alt="bear"
        width={30}
        height={30} />
        <h6 className='font-bold underling text-white'>
          avvooturi
        </h6>
    </div>
      </>
  );
}

function Title() {
  return (
    <>
      <div className='absolute inset-y-64 left-20'>
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
    </>
  );
}

function About() {
  return (
    <>
    <div className='absolute inset-x-32 top-3/4 flex justify-center items-center'>
      <h1 className='text-4xl text-white'>
      About Me
      </h1>
      <h3 className='text-2xl text-white ml-20'>
      Let's try this
      </h3>
    </div>
    </>
  );
}

export default function App() {
  return (
    <>
    <div className='min-h-screen bg-black'>
      <Logo/>
      <Title/>
      <div className='absolute inset-x-0 top-2/3 border-t-4 border-indigo-500 border-8'></div>
      <About/>
    </div>
    </>
  );
}
