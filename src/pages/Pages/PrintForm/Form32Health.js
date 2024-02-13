import React, { useContext, useEffect, useState } from "react";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactDOMServer from "react-dom/server";

const Form32Health = () => {
  const { id } = useParams();
  const { getCheckupDatabyId } = useContext(SignContext);
  const [CheckupData, setCheckupData] = useState([]);

  const GetCheckupDatabyId = async () => {
    try {
      const data = await getCheckupDatabyId(id);
      setCheckupData(data);
      console.log("new>>>> data");

      console.log(">>name data final");
    } catch (error) {
      console.error("Error fetching checkup data:", error);
    }
  };

  // console.log(CheckupData);
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    GetCheckupDatabyId(id);
  }, [id]);
  const printStyles = `
    @media print {
      .print-button-container {
        display: none;
      }
    }
  `;
  const printButtonStyles = {
    display: "block", // Show the button by default
  };

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
              Sr.No.:{CheckupData?.employeeData?.srNo}
              <span className="dateTitle">
                Date: {CheckupData?.checkupDate
                    ? CheckupData.checkupDate
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")
                    : "N/A"}
              </span>
            </div>
            <div className="srNoDiv">
              Name:{" "}
              {CheckupData?.employeeData?.employeeNameAbbrevation || "N/A"}{" "}
              {CheckupData?.employeeData?.employeeName || "N/A"}{" "}
              {CheckupData?.employeeData?.employeeFatherName || "N/A"}{" "}
              {CheckupData?.employeeData?.employeeSurname || "N/A"}
              <div className="ageSectionDiv">
                <span>
                  Sex: {CheckupData?.employeecontactdetails?.gender || "N/A"}
                </span>
                <span>
                  Age:{CheckupData?.employeecontactdetails?.age || "N/A"}
                </span>
                <span style={{ marginLeft: "-15px" }}>Yrs</span>
              </div>
            </div>
            <table id="customers">
              <tr>
                <td id="abc">1</td>
                <td style={{ width: "60%" }}>Department</td>
                <td>
                  {CheckupData?.employeeData?.companyDepartments || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">2.</td>
                <td>Hazardous Operations</td>
                <td>
                  {CheckupData?.employeeform33?.hazardousProcess || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">3</td>
                <td>Dangerous Operation </td>
                <td>
                  {CheckupData?.employeeform33?.dnagerousOperation || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">4</td>
                <td>Nature of job of Occupation</td>
                <td>
                  {CheckupData?.employeecontactdetails?.natureOfJob || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">5</td>
                <td>
                  Raw Materials Products or by Products likely to be exposed to
                </td>
                <td>{CheckupData?.employeeform32?.exposureTo || "N/A"}</td>
              </tr>
              <tr>
                <td id="abc">6</td>
                <td>Date of Posting</td>
                <td>
                  {CheckupData?.employeeform32?.dateOFPosting
                    ? CheckupData.employeeform32.dateOFPosting
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">7</td>
                <td>Date of Leaving / Transfer to or Transfer</td>
                <td>
                  {CheckupData?.employeeform32?.dateOfLeaving
                    ? CheckupData.employeeform32.dateOfLeaving
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">8</td>
                <td>Reasons for Discharge,Leave/or Transfer</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.reasons || "N/A"}
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div style={{ marginLeft: "10%" }}>
                    MEDICAL EXAMINATION AND THE RESULT THEREOF
                  </div>
                </td>
              </tr>

              <tr>
                <td id="abc">9</td>
                <td>Date</td>
                <td></td>
              </tr>
              <tr>
                <td id="abc">10</td>
                <td>Sign & Symptoms </td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.signs || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">11</td>
                <td>Nature of Tests and results thereof</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.natureOfTests || "N/A"}
                </td>
              </tr>

              <tr>
                <td id="abc">12</td>
                <td>Results Fit/Unfit</td>
                <td colspan="2">
                  {CheckupData?.employeeform33?.fitOrUnfit || "N/A"}
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <div style={{ marginLeft: "2%" }}>
                    If declared unfit for work:
                    <span style={{ fontSize: "15px" }}>
                      {CheckupData?.employeeform33?.unfitReason}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td id="abc">13</td>
                <td>Period of temporary withdrawal form that work</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.periodOfTemporaryUnfit || "N/A"}
                </td>
              </tr>
              <tr>
                <td id="abc">14</td>
                <td>Reasons for withdrawal form that work</td>
                <td> {CheckupData?.employeeform32?.reasons || "N/A"}</td>
              </tr>
              <tr>
                <td id="abc">15</td>
                <td>Date of decalring unfit</td>
                <td>
                  {" "}
                  {CheckupData?.employeeform32?.dateOfDeclaringUnfit
                    ? CheckupData.employeeform32.dateOfDeclaringUnfit
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")
                    : "N/A"}
                </td>
              </tr>

              <tr>
                <td id="abc">16</td>
                <td>Date of issuing fitness certificate</td>
                <td colspan="2">
                  {CheckupData?.employeeform32?.dateOfissuingFitness
                    ? CheckupData.employeeform32.dateOfissuingFitness
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")
                    : "N/A"}
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <div style={{ marginTop: "60px" }}>
                    <div className="signatureTitle">
                      Signature with stamp of the
                    </div>
                    <div className="signatureTitle">
                      Factory Medical Officer
                    </div>
                  </div>
                </td>
              </tr>
            </table>

            <div></div>

            <div className="hstack gap-2 justify-content-end d-print-none mt-4">
              <Link to="#" onClick={handlePrint} className="btn btn-success">
                <i className="ri-printer-line align-bottom me-1"></i> Print
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Form32Health;
