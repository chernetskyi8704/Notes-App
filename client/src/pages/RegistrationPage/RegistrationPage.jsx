import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/loader/Loader";
import { useRegistrationMutation } from "../../store/features/auth/authApiSlice";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registration, { isLoading }] = useRegistrationMutation();

  const handleRegistration = async (firstName, lastName, email, password) => {
    try {
      const userData = await registration({
        firstName,
        lastName,
        email,
        password,
      });
      if (userData.error) {
        console.log(userData.error.data.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <RegistrationForm handleRegistration={handleRegistration} />
  );
};

export default RegistrationPage;
