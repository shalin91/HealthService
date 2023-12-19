import axios from "axios";
import React from "react";
import SignContext from "../Context/SignContext";

export const SignState = (props) => {
  // const url = `http://localhost:5000`;
  const url = `${process.env.REACT_APP_BASE_URL}`;

  //Register User
  const registerUser = async (UserInfo) => {
    const formData = new FormData();
    try {
      console.log(formData);
      formData.append("name", UserInfo.name);
      formData.append("email", UserInfo.email);
      formData.append("password", UserInfo.password);
      formData.append("confirmPassword", UserInfo.confirmPassword);
      formData.append("roles", UserInfo.roles);
      formData.append("active", UserInfo.active);
      formData.append("photo", UserInfo.photo);

      const response = await axios.post(`${url}/api/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  //Login User
  const loginUser = async (UserInfo) => {
    try {
      const response = await axios.post(`${url}/api/login`, UserInfo);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //Forgot Password
  const forgotPassword = async (UserInfo) => {
    try {
      const response = await axios.post(`${url}/api/forgotpassword`, UserInfo);

      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  //Reset Password
  const resetPassword = async (resetToken, password) => {
    try {
      const response = await axios.put(
        `${url}/api/users/resetpassword/${resetToken}`,
        { password: password }
      );
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Update Password
  const changePassword = async (UserInfo, Token) => {
    try {
      const response = await axios.post(`${url}/api/updatepassword`, {
        ...UserInfo,
        token: Token,
      });
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get LoggedInUser
  const getLoggedInUser = async (Token) => {
    try {
      const response = await axios.post(`${url}/api/getloggedinuser`, {
        token: Token,
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Get Specific user
  const getSpecificUser = async (id, role) => {
    try {
      const response = await axios.post(`${url}/api/getspecificuser`, {
        id: id,
        roles: [role],
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // GetUsers
  const getUsers = async () => {
    try {
      const response = await axios.post(`${url}/api/getusers`);
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Update User
  const updateUser = async (userInfo, photo) => {
    try {
      const formData = new FormData();
      formData.append("name", userInfo.name);
      formData.append("roles", userInfo.roles);
      formData.append("active", userInfo.active);
      formData.append("id", userInfo._id);
      if (photo) {
        formData.append("photo", photo);
      }

      const response = await axios.post(`${url}/api/updateuser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // delete user
  const deleteUser = async (userId) => {
    try {
      const response = await axios.post(`${url}/api/deleteuser`, {
        id: userId,
      });
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get roles
  const GetRoles = async () => {
    try {
      const response = await axios.post(`${url}/api/getroles`, {});
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // GetrolesSpecificpermissions
  const GetRoleSpecificPermission = async (role) => {
    try {
      const response = await axios.post(`${url}/api/getrolespecificpermisson`, {
        role: role,
      });
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Add Company
  const AddComapany = async (CompanyData) => {
    try {
      const response = await axios.post(
        `${url}/company/add-company`,
        CompanyData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding content:", error);
      return {
        success: false,
        msg: "An error occurred while adding the email.",
      };
    }
  };

  //add form one

  const AddEmployee = async (EmployeeData) => {
    try {
      const response = await axios.post(
        `${url}/employ/add-employ`,
        EmployeeData
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding content:", error);
      return {
        success: false,
        msg: "An error occurred while adding the email.",
      };
    }
  };

  //adding contact details

  const AddContact = async (ContactData) => {
    try {
      console.log("---------contact details----");
      console.log(ContactData);

      const response = await axios.post(
        `${url}/employ/set-employ-contact-details`,
        ContactData
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding content:", error);
      return {
        success: false,
        msg: "An error occurred while adding the email.",
      };
    }
  };

  // Get Copmany
  const GetCompany = async () => {
    try {
      const response = await axios.get(`${url}/company/get-companys`, {});
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const GetCheckUpName = async () => {
    try {
      const response = await axios.get(`${url}/checkup/get-checkup-name`, {});
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get Company by Id
  const GetCompanybyId = async (id) => {
    try {
      const response = await axios.get(
        `${url}/company/get-company-by-id/${id}`,
        {}
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const GetContactDetailsById = async (props) => {
    try {
      const id = props.id;

      console.log("---id in front end---");

      console.log(id);

      const response = await axios.post(
        `${url}/employ/get-employ-contactetails-by-id`,
        {
          id: id,
        }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const GetEmpsbyCompAndLoc = async (props) => {
    try {
      const id = props.companyName;
      const location = props.companyLocation;

      console.log("|||||||||||||||||||||||---|||");

      console.log(id);
      console.log(location);

      const response = await axios.post(
        `${url}/company/get-all-emp-by-company-location/${id}`,
        { location: location }
      );

      console.log(response.data);

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setNewCheckupName = async (props) => {
    try {
      console.log(
        "----------------------------------------------------------------"
      );

      console.log(props);

      const data = {
        checkupName: props.val.checkupName,
        checkupType: props.val.checkupType,
        checkupDate: props.val.checkupDate,
        checkupNumber: props.val.checkupNumber,
        companyId: props.company,
        location: props.location,
      };

      console.log(data);

      const response = await axios.post(`${url}/checkup/add-checkup-name`, {
        data,
      });
      console.log(response.data);

      return response;
      // return "jay"
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const getCheckupType = async () => {
    try {
      const response = await axios.get(
        `${url}/checkup/get-all-checkup-type`,
        {}
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // set checkupdata

  const getCheckupData = async (data) => {
    try {
      const response = await axios.post(
        `${url}/checkup/add-checkup-data`,
        data
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setVitalAndHistory = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-vital-and-history-details`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setGeneralExamination = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-general-examination`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setEyeDetails = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-eye-details`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setBloodDetails = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-blood-information`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setInvestigation = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-investigation-details`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setForm33 = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-form-33-details`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setForm32 = async (data) => {
    try {
      const response = await axios.post(
        `${url}/employ/set-employ-form-32-details`,
        { data }
      );

      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Add Checkup type
  const AddCheckupType = async (checkupTypeData) => {
    try {
      const response = await axios.post(
        `${url}/checkup/add-checkup-type`,
        checkupTypeData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding content:", error);
      return {
        success: false,
        msg: "An error occurred while adding the email.",
      };
    }
  };

  // GetcheckupData by Id
  const getCheckupDatabyId = async (id) => {
    try {
      const response = await axios.get(
        `${url}/checkup/get-checkupdata/${id}`,
        {}
      );
      return response.data;
    } catch (error) {
      console.error("Error adding content:", error);
      return {
        success: false,
        msg: "An error occurred while adding the email.",
      };
    }
  };

  return (
    <SignContext.Provider
      value={{
        registerUser,
        loginUser,
        forgotPassword,
        resetPassword,
        changePassword,
        getLoggedInUser,
        getSpecificUser,
        getUsers,
        updateUser,
        deleteUser,
        GetRoles,
        GetRoleSpecificPermission,
        AddComapany,
        AddEmployee,
        GetCompany,
        GetCompanybyId,
        GetEmpsbyCompAndLoc,
        GetContactDetailsById,
        setNewCheckupName,
        getCheckupType,
        getCheckupData,
        setVitalAndHistory,
        setGeneralExamination,
        setEyeDetails,
        setInvestigation,
        setForm33,
        AddCheckupType,
        AddContact,
        setBloodDetails,
        setForm32,
        GetCheckUpName,
        getCheckupDatabyId,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};
