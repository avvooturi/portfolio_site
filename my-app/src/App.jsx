import logo from './da_bear.png';
import './App.css';
import { ReactTyped } from "react-typed";

function Logo() {
  return (
    <>
    <div className='flex space-x-2'>
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
      <div className='absolute inset-y-64 left-0'>
        <h1 className='text-white text-7xl'>
          Welcome to {" "}
          <ReactTyped
            strings={["Another React App"]}
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

export default function App() {
  return (
    <>
    <div className='min-h-screen bg-black'>
      <Logo/>
      <Title/>
    </div>
    </>
  );
}
