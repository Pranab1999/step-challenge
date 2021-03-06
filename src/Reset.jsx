import React, { useEffect, useState } from "react";

import { useAuthState} from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./Firebase";

import "./Reset.scss";

const Reset = () => {

  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) window.location.href = "/dashboard";
  }, [user, loading]);

  return (
    <div className='reset'>
      <div className='reset_container'>
        <input
          type='text'
          className='reset_textBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail Address'
        />
        <button
          className='reset_btn'
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <a href='/register'>Register</a> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
