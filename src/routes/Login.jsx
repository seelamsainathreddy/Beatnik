import { useState } from "react";
import AuthPageContainer from "../components/AuthPageContainer";
import LoginForm from "../components/LoginForm";

function Login() {
  const [errorMessage, setErrorMessage] = useState();

  const handleError = (error) => {
    setErrorMessage(error);
  };

  return (
    <AuthPageContainer>
      <LoginForm onError={handleError} />
    </AuthPageContainer>
  );
}

export default Login;
