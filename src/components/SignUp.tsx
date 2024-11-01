import React, { useState, FormEvent } from "react";
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(signUp({ username }));
    navigate('/profile');
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </label>
      </form>
    </section>
  );
}

export default SignUp;