import React, { useState } from "react";
import "./SignUp.css";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const SIGNUP_MUTATION = gql`
    mutation (
        $login_id: String!
        $password: String!
        $phone_number: String!
        $email: String!
    ) {
        signUp(
            createUserInput: {
                login_id: $login_id
                password: $password
                phone_number: $phone_number
                email: $email
            }
        ) {
            error
            statusCode
            ok
        }
    }
`;

function SighUp() {
    //yarn add apollo-boost react-apollo graphql
    const [SighupMutation, { data }] = useMutation(SIGNUP_MUTATION);
    const [state, setState] = useState({
        login_id: "",
        password: "",
        phone_number: "",
        email: "",
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

            <div className="text_input">
                <label for="pw_check">비밀번호 확인</label>
                <input className="input-blank" type="password" />
            </div>

            <div className="text_input">
                <label for="name">이메일</label>
                <input
                    className="input-blank"
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                    }
                    placeholder="example@gmail.com"
                />
            </div>

            <div className="text_input">
                <label for="phone_number">휴대폰 번호</label>
                <input
                    className="input-blank"
                    type="tel"
                    value={state.phone_number}
                    onChange={(e) =>
                        setState({ ...state, phone_number: e.target.value })
                    }
                    placeholder="010-0000-0000"
                />
            </div>

            <div className="list_submit">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        SighupMutation({
                            variables: {
                                login_id: state.login_id,
                                password: state.password,
                                phone_number: state.phone_number,
                                email: state.email,
                            },
                        });
                    }}
                >
                    <span>가입하기</span>
                </button>
            </div>
        </div>
    );
}

export default SighUp;
