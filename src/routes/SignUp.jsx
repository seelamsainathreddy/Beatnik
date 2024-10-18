import { useState } from "react";
import AuthPageContainer from "../components/AuthPageContainer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState();

  const handleError = (error) => {
    setErrorMessage(error);
  };

  return (
    <AuthPageContainer>
      <SignUpForm onError={handleError} />
    </AuthPageContainer>
  );
}

export default SignUp;
