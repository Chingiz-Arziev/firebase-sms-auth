import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../configs/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import '../index.css'

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { toast } from "react-hot-toast";

const SignInPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate()

  const captchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha",
        {
          size: "invisible",
          callback: (response) => {
            signUp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  const signUp = () => {
    captchaVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPhoneNumber = '+' + phoneNumber

    signInWithPhoneNumber(auth, formatPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("Смс сообщение успешно отправлено!");
        navigate('/verification')
      })
      .catch((error) => {
        toast.error("Возникла ошибка:", error);
      });
  }

  return (
    <div className="container">

      <div className="form">
        <h1 className="title">
          Укажите ваши данные, для входа в систему
        </h1>

        <input
          type="text"
          placeholder="ведите ваше имя"
          className="input-name"
        />

        <PhoneInput
          country={"kg"}
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="input-phone"
        />

        <button
          className="input-btn"
          onClick={signUp}
        >
          <span>Отправить код через СМС</span>
        </button>
        <div id="recaptcha"></div>
      </div>
    </div>

  )
}

export default SignInPage