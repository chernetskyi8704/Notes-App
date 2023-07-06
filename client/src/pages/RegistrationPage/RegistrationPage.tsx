import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../store/features/auth/authApiSlice";
import { IRegistrationInputData } from "../../types/IRegistrationInputData";
import { isApiResponse } from "../../utils/apiErrorUtils";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registration, {}] = useRegistrationMutation();

  const handleRegistration = async (
    inputData: IRegistrationInputData
  ): Promise<void> => {
    try {
      await registration(inputData).unwrap();
      navigate("/login");
    } catch (error) {
      if (isApiResponse(error)) {
        alert(error.data.message);
      }
    }
  };

  return <RegistrationForm handleRegistration={handleRegistration} />;
};

export default RegistrationPage;
