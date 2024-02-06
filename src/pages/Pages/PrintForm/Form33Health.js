import React, { useContext, useEffect, useState } from "react";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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

                <td colSpan={3}  >
                 <div style={{display:'flex'}}>  
                 <p>1.{" "}Sr No: </p>

                 <p style={{marginLeft:'auto'}}>Date:02-01-2024</p>
                 </div>
                </td>
                {/* <td>
                  Date:
                </td> */}
              </tr>
              <tr>

                <td style={{width:'40%'}}>
                  2. {" "}Name

                </td>
                <td>
                 {CheckupData?.employeeData?.employeeName || "N/A"}
                </td>
              </tr>
              <tr>
                <td>

                  3.{" "}Father's Name:{" "}

                  
                </td>
                <td>
                {CheckupData?.employeeData?.employeeFatherName || "N/A"}
                </td>
              </tr>
              <tr>
                <td >

                  4. {" "}Sex: 

                </td>
                <td>
                {CheckupData?.employeecontactdetails?.gender || "N/A"}
                </td>
              </tr>
              <tr>
                <td >

                  5.{" "}Residence:

                 
                </td>
                <td>
                {CheckupData?.employeecontactdetails?.address || "N/A"}
                </td>
              </tr>
              <tr>
                <td >

                  6. {" "}Date of Birth:

                  
                </td>
                <td>
                {CheckupData?.employeecontactdetails?.dateOfBirth
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-") || "N/A"}{" "}
                </td>
              </tr>
              <tr>
                <td >

                  7.{" "}Name & Address of the Factory:

                  
                </td>
                <td>
                {CheckupData?.employeeData?.companyLocation || "N/A"}
                </td>
              </tr>
              <tr>
                <td >

                  8.{" "}Work is Employed / Proposed:{" "}

                 
                </td>
                <td>
                {CheckupData?.employeeform33?.employyedOrPrpposed || "N/A"}
                </td>
              </tr>
              <tr>
                <td >

                  a:{" "}Hazardous Process :

                  
                </td>
               <td>
               {CheckupData?.employeeform33?.hazardousProcess || "N/A"}
               </td>
              </tr>
              <tr>
                <td >

                  b:{" "}Dangerous Operations:{" "}

                 
                </td>
                <td>
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
                    <span style={{textDecoration:'underline '}}>
                    {CheckupData?.employeecontactdetails?.idMark || "N/A"}
                    </span>
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
                      imperssion of the person examined
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

            <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Link
                        to="#"
                        onClick={handlePrint}
                        className="btn btn-success"
                      >
                        <i className="ri-printer-line align-bottom me-1"></i>{" "}
                        Print
                      </Link>
           </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormHelth33;