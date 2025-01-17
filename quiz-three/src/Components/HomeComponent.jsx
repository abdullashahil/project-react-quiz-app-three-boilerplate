import { Link } from 'react-router-dom';
import './components.css';

const HomeComponent = () => {

  return (
    <div className='main'>
      <h1>Quiz App</h1>
      <Link to='/quiz'>
        <button className="play">Play</button>
      </Link>
    </div>
  );
};

export default HomeComponent;
