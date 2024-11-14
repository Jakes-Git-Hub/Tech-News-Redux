import React, { useState, FormEvent } from "react";
import { editUser } from "../features/session/sessionSlice";
import { useDispatch } from "react-redux";

export default function EditProfileForm() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(editUser({ username }));
  };

  return (
    <section>
      <h2>Edit Username</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button className="primary">Edit</button>
          </div>
        </label>
      </form>
    </section>
  );
}