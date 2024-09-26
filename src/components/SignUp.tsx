import { useReducer } from "react";
import Button from "./Button";
import FormContainer from "./FormContainer";
import Input, { FormEvent } from "./Input";
import { EmailChangeAction, PasswordChangeAction } from "./Login";

import styles from "./Signup.module.css";

type State = {
  name: string;
  email: string;
  password: string;
};

type NameChangeAction = {
  type: "SET_NAME";
  payload: string;
};

type Action = EmailChangeAction | PasswordChangeAction | NameChangeAction;

function reducer(state: State, action: Action) {
  if (action.type === "SET_NAME") {
    return { ...state, name: action.payload };
  }
  if (action.type === "SET_EMAIL") {
    return { ...state, email: action.payload };
  }
  if (action.type === "SET_PASSWORD") {
    return { ...state, password: action.payload };
  }
  return state;
}
const initialState: State = {
  name: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNameChange(e: FormEvent) {
    dispatch({
      type: "SET_NAME",
      payload: e.currentTarget.value,
    });
  }

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
    console.log(state.name, state.email, state.password);
  }
  return (
    <div className={styles.signupContainer}>
      <FormContainer>
        <Input
          id="name"
          text="Your name:"
          type="text"
          onChange={handleNameChange}
        />
        <Input
          id="email"
          text="Your email:"
          type="email"
          onChange={handleEmailChange}
        />
        <Input
          id="password"
          text="Your password:"
          type="password"
          onChange={handlePasswordChange}
        />
        <Button text="Sign up" onClick={handleUserData} />
      </FormContainer>
    </div>
  );
}
