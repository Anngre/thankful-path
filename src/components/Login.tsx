import { useReducer } from "react";
import Button from "./Button";
import FormContainer from "./FormContainer";
import Input, { FormEvent } from "./Input";
import styles from "./Login.module.css";

type State = {
  email: string;
  password: string;
};

export type EmailChangeAction = {
  type: "SET_EMAIL";
  payload: string;
}

export type PasswordChangeAction = {
  type: "SET_PASSWORD";
  payload: string
}

type Action = EmailChangeAction | PasswordChangeAction

function reducer(state: State, action: Action) {
  if (action.type === "SET_EMAIL") {
    return { ...state, email: action.payload };
  }
  if (action.type === "SET_PASSWORD") {
    return { ...state, password: action.payload };
  }
  return state;
}

const initialState: State = {
  email: "",
  password: "",
};

export default function Login() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleEmailChange(e: FormEvent) {
    dispatch({
      type: "SET_EMAIL",
      payload: e.currentTarget.value,
    });
  }

  function handlePasswordChange(e: FormEvent) {
    dispatch({
      type: "SET_PASSWORD",
      payload: e.currentTarget.value,
    });
  }

  function handleUserData() {
    console.log(state.email, state.password);
  }

  return (
    <div className={styles.loginContainer}>
      <FormContainer>
        <Input
          type="email"
          id="email"
          text="Your email:"
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          id="password"
          text="Your password:"
          onChange={handlePasswordChange}
        />
        <Button text="Login" onClick={handleUserData} />
      </FormContainer>
    </div>
  );
}
