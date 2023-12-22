import React, { useContext, useEffect, useState } from "react";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const FormHelth33 = () => {
  const { id } = useParams();
  const { getCheckupDatabyId } = useContext(SignContext);
  const [CheckupData, setCheckupData] = useState([]);

  const GetCheckupDatabyId = async () => {
    try {
      // Call the API using the id from useParams
      const data = await getCheckupDatabyId(id);
      setCheckupData(data);
      console.log("new>>>> data");

      console.log(">>name data final");

      // console.log(data.employeeData.employeeName)
      // Update the state with the retrieved data
      // setCheckupData(data);
    } catch (error) {
      console.error("Error fetching checkup data:", error);
      // Handle errors if needed
    }
  };

  // console.log(CheckupData);

  useEffect(() => {
    GetCheckupDatabyId(id);
  }, [id]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="mainDivMediclaForm">
            <div className="formTitleDiv">
              <h5 className="form32Title">FORM NO.33</h5>
            </div>
            <h5 className="form32SubTitle">
              (Prescribed under Rules 68-T and 102)
            </h5>
            <h5 className="form32SubTitle">
              Cerificate of fitnees of employment in hazardous process and
              operation
            </h5>
            <table className="mainTable">
              <tr>
                <td colSpan={2}>
                  <div className="dateDiv">
                    <p>1. Sr. No. :</p>
                    <p style={{ marginRight: "85px" }}>
                      Date: {CheckupData?.checkupname?.checkupDate || "N/A"}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  2. Name: {CheckupData?.employeeData?.employeeName || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  3.Father's Name:{" "}
                  {CheckupData?.employeeData?.employeeFatherName || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  4.Sex: {CheckupData?.employeecontactdetails?.gender || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  5.Residence:
                  {CheckupData?.employeecontactdetails?.address || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  6.Date of Birth:
                  {CheckupData?.employeecontactdetails?.dateOfBirth
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}{" "}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  7.Name & Address of the Factory:
                  {CheckupData?.employeeData?.companyLocation || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  8.Work is Employed / Proposed:{" "}
                  {CheckupData?.employeeform33?.employyedOrPrpposed || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  a:Hazardous Process :
                  {CheckupData?.employeeform33?.hazardousProcess || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  b:Dangerous Operations:{" "}
                  {CheckupData?.employeeform33?.dnagerousOperation || "N/A"}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>
                    i certify that i have personally examined the above named
                    person whose identification
                  </p>
                  <p>
                    marks are
                    {"   "}{" "}
                    {CheckupData?.employeecontactdetails?.idMark || "N/A"}
                  </p>
                  <p>
                    and who is desirous of being employed in above mentioned
                    process/operation and that
                  </p>
                  <p>
                    his/her age, as can be ascertained from my examination. is{" "}
                    {CheckupData?.employeecontactdetails?.age || "N/A"} years
                  </p>
                  <p>
                    <input
                      type="checkBox"
                      checked={
                        CheckupData?.employeeform33?.fitOrUnfit === "Fit"
                      }
                    />
                    <span style={{ marginLeft: "10px" }}>
                      in my opinion he/she is fit for employment in the said
                      manufacturing process / operation
                    </span>
                  </p>
                  <p>
                    <input
                      type="checkBox"
                      checked={
                        CheckupData?.employeeform33?.fitOrUnfit === "Unfit"
                      }
                    />
                    <span style={{ marginLeft: "10px" }}>
                      in my opinion he/she is unfit for employment in the said
                      manufacturing process / operation for the reason {"    "}{" "}
                      {CheckupData?.employeeform33?.unfitReason || "N/A"}
                    </span>
                  </p>
                  <p>
                    He/She is referred for futher examination to the certifying
                    surgeon.
                  </p>
                  <div className="signatureDiv">
                    <p>
                      Signature of left hand thumb
                      <br />
                      imperssion ogf the person examined
                    </p>
                    <p>
                      Signature with stamp of
                      <br />
                      the Factory Medical Officer
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormHelth33;
