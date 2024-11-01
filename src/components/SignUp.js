import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({ username }));
        navigate('/profile');
    };
    return (React.createElement("section", null,
        React.createElement("h1", null, "Sign Up"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", null,
                "Username",
                React.createElement("div", null,
                    React.createElement("input", { id: "username", value: username, onChange: (e) => setUsername(e.currentTarget.value) }),
                    React.createElement("button", { type: "submit", className: "primary" }, "Sign Up"))))));
};
export default SignUp;
