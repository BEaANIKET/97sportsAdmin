import axios from "axios";


export const onLoginWithCredentials = async (mobile, password) => {
    try {
      const formData = new URLSearchParams();
      formData.append("mobile", mobile);
      formData.append("password", password);
      // console.log(formData);
  
      const response = await axios.post(
        "https://admin.titan97.live/Apicall/login_process",
        formData );
  
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to login:", error.response?.data || error.message);
      return error.response?.data || error.message;
    }
  };