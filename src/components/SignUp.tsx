import Button from "./Button";
import FormContainer from "./FormContainer";
import Input from "./Input";

import styles from "./Signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.signupContainer}>
      <FormContainer>
        <Input id="name" text="Your name:" type="text" onChange={() => {}} />
        <Input id="email" text="Your email:" type="email" onChange={() => {}} />
        <Input
          id="password"
          text="Your password:"
          type="password"
          onChange={() => {}}
        />
        <Button text="Sign up" onClick={() => {}} />
      </FormContainer>
    </div>
  );
}
