import {Link} from 'react-router-dom';

import {reactIcon} from '@assets';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <a
        href="https://github.com/KadlagAkash/simply-todo"
        target="_blank"
      >
        <img src={reactIcon} className="logo react" alt="React logo" />
      </a>
      <p className="tagline">Be kind to your mind with</p>
      <h1 className="headline">Simply Todo</h1>
      <br />
      <Link to="/signin">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
