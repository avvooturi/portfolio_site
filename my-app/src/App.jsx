import logo from './da_bear.png';
import './App.css';

function FirstRow() {
  return (
    <>
    <img
      className="bear"
      src={logo}
      alt="bear"
      width={100}
      height={100} />
      <h1 className='text-3xl font-bold underling'>
        Current Title
      </h1>
      </>
  );
}

export default function App() {
  return (
    <FirstRow/>
  );
}
