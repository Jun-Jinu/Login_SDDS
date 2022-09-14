import React, { useState } from "react";
import "./Login.css";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const Login_Mutation = gql`
    mutation ($login_id: String!, $password: String!) {
        login(LoginInput: { login_id: $login_id, password: $password }) {
            error
            statusCode
            ok
            access_token
            refresh_token
        }
    }
`;

function Login() {
    const [Login_mutation, { data }] = useMutation(Login_Mutation);
    const [state, setState] = useState({
        login_id: "",
        password: "",
    });

    return (
        <div className="signup_page">
            <div className="logo">
                <img
                    src={require("./logo_25.png")}
                    className="header-logo"
                    alt="React"
                />
            </div>

            <div className="text_input">
                <label for="login_id">아이디</label>
                <input
                    className="input-blank"
                    value={state.login_id}
                    onChange={(e) =>
                        setState({ ...state, login_id: e.target.value })
                    }
                    type="text"
                />
            </div>

            <div className="text_input">
                <label for="password">비밀번호</label>
                <input
                    className="input-blank"
                    value={state.password}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                    type="password"
                />
            </div>

            <div className="login_button">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        Login_mutation({
                            variables: {
                                login_id: state.login_id,
                                password: state.password,
                            },
                        });
                    }}
                >
                    <span>로그인</span>
                </button>
            </div>
        </div>
    );
}
export default Login;
