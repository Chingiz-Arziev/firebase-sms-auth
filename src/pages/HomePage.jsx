import React from 'react';
import Confetti from "../animations/Confetti";

import {useNavigate} from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <Confetti />
      <div className="form">
        <p className="title">Вы успешно авторизированы!</p>

        <button onClick={() => navigate('/')}
          className="input-btn"
        >Выйти из аккаунта?</button>
      </div>
    </div>

  );
};

export default HomePage;
