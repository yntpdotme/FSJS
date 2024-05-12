import {useState} from 'react';

import {closeIcon} from '@assets';
import './ErrorSnackbar.css';

const ErrorSnackbar = ({label}) => {
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      {visibility && (
        <section className="error-notification">
          <div className="notification-content">
            <div className="notification-text">{label}</div>
            <img
              src={closeIcon}
              alt=""
              className="close-icon"
              onClick={() => setVisibility(false)}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default ErrorSnackbar;
