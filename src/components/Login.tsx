import Button from "./Button";
import FormContainer from "./FormContainer";
import Input from "./Input";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <FormContainer>
        <Input id="email" text="Your email:" onChange={() => {}} />
        <Input id="password" text="Your password:" onChange={() => {}} />
        <Button text="Login" onClick={() => {}} />
      </FormContainer>
    </div>
  );
}
