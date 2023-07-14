import { useState } from "react";

import {useNavigate} from "react-router-dom";

import OtpInput from "otp-input-react";

const VerificationPage = () => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  const otpCodeVerify = () => {
    setLoading(true)
    window.confirmationResult
      .confirm(otpCode)
      .then(async (res) => {
        setUser(res.user)
        setLoading(false)
        navigate('/home')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <div className="container">
      {loading ?
        (
          <p>loading...</p>
        )
        :
        (
          <div className="form">
            <p className="title">
              Введите код из СМС сообщения
            </p>
            <OtpInput
              value={otpCode}
              onChange={setOtpCode}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="input-name"
            ></OtpInput>

            <button
              className="input-btn"
              onClick={otpCodeVerify}
            >
              <span>Ввести Код</span>
            </button>
          </div>
        )
      }
    </div>
  );
};

export default VerificationPage;
