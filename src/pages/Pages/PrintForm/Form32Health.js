import React, { useContext, useEffect, useState } from "react";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


const Form32Health = () => {
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
  const handlePrint = () => {
    window.print();
  };

  
  useEffect(() => {
    GetCheckupDatabyId(id);
  }, [id]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="mainDivMediclaForm">
            <div className="formTitleDiv">
              <h5 className="form32Title">FORM NO.32 HEALTH REGISTER</h5>
            </div>
            <h5 className="form32SubTitle">
              (Prescribed under Rules 68-T and 102)
            </h5>
            <div className="srNoDiv">
              Sr.No.:
              <span className="dateTitle">
                Date: {CheckupData?.checkupname?.checkupDate || "N/A"}
              </span>
            </div>
            <div className="srNoDiv">
              Name:{" "}
              {CheckupData?.employeeData?.employeeNameAbbrevation || "N/A"}{" "}
              {CheckupData?.employeeData?.employeeName || "N/A"}{" "}
              {CheckupData?.employeeData?.employeeFatherName || "N/A"}
              <div className="ageSectionDiv">
                <span>
                  Sex: {CheckupData?.employeecontactdetails?.gender || "N/A"}
                </span>
                <span>
                  Age:{CheckupData?.employeecontactdetails?.age || "N/A"}
                </span>
                <span>Yrs</span>
              </div>
            </div>
            <table className="mainTable">
              <tr>
                <td>Department</td>
                <td colspan="2">
                  {CheckupData?.employeeData?.companyDepartments || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Hazardous Operations</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.hazardousProcess || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Dangerous Operation </td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.dnagerousOperation || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Nature of job of Occupation</td>
                <td colspan="2">
                  {CheckupData?.employeecontactdetails?.natureOfJob || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Raw Materials Products or by Products</td>
                <td colspan="2">
                  {CheckupData?.employeeData?.rawMaterialsProducts || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Date of Leaving / Transfer to or Transfer</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.dateOfLeaving
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Reasons for Discharge,Leave/or Transfer</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.reasons || "N/A"}
                </td>
              </tr>
            </table>
            <table className="mainTable">
              <tr>
                <td colSpan={2}>MEDICAL EXAMINATION AND THE RESULT THEREOF</td>
              </tr>
              <tr>
                <td>Date</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.dateOFPosting
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Sign & Symptoms </td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.signs || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Nature of Tests and results thereof</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.natureOfTests || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Results Fit/Unfit</td>
                <td colspan="2">
                  {CheckupData?.employeeform33?.fitOrUnfit || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>IF DECLARED UNFIT FOR WORK</td>
              </tr>
              <tr>
                <td>Period of temporary withdrawal form that work</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.periodOfTemporaryUnfit || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Reasons for withdrawal form that work</td>
                <td colspan="2">
                  {" "}
                  {CheckupData?.employeeform32?.reasons || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Date of decalring unfit</td>
                <td colspan="2">
                  {" "}
                  {CheckupData?.employeeform32?.dateOfDeclaringUnfit
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}
                </td>
              </tr>
              <tr>
                <td>Date of issuing fitness certificate</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.dateOfissuingFitness
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div>
                    <div className="signatureTitle">
                      Signature with stamp of the
                    </div>
                    <div className="signatureTitle">
                      Factory Medical Officer/
                    </div>
                    <div className="signatureTitle">the certifying surgeon</div>
                  </div>
                </td>
              </tr>
            </table>
            <div></div>
            <button type="button" class="btn btn-primary" onClick={handlePrint}>
              Print
            </button>
           
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Form32Health;
