import React from "react";
import "./../../Pages/PrintForm/printForm.css";

const FormHelth33 = () => {
  return (
    <React.Fragment>
      <div className="mainDivMediclaForm">
        <div className="formTitleDiv">
          <h5 className="form32Title">FORM NO.32</h5>
        </div>
        <h5 className="form32SubTitle">
          (Prescribed under Rules 68-T and 102)
        </h5>
        <h5 className="form32SubTitle">
          Cerificate of fitnees of employment in hazardous process and operation
        </h5>
        <table className="mainTable">
          <tr>
            <td colSpan={2}>
              <div className="dateDiv">
                <p>1. Sr. No. :</p>
                <p style={{ marginRight: "85px" }}>Date:</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>2. Name:</td>
          </tr>
          <tr>
            <td colSpan={2}>3.Father's Name: </td>
          </tr>
          <tr>
            <td colSpan={2}>4.Sex:</td>
          </tr>
          <tr>
            <td colSpan={2}>5.Residence:</td>s{" "}
          </tr>
          <tr>
            <td colSpan={2}>6.Date of Birth:</td>
          </tr>
          <tr>
            <td colSpan={2}>7.Name & Address of the Factory:</td>
          </tr>
          <tr>
            <td colSpan={2}>8.Work is Employed / Proposed:</td>
          </tr>
          <tr>
            <td colSpan={2}>a)Hazardous Process</td>
          </tr>
          <tr>
            <td colSpan={2}>b)Dangerous Operations</td>
          </tr>
          <tr>
            <td colspan="2">
              b
              <p>
                i certify that i have personally examined the above named person
                whose identification
              </p>
              <p>
                marks are
                ____________________________________________________________
              </p>
              <p>
                and who is desirous of being employed in above mentioned
                process/operation and that
              </p>
              <p>
                his/her age, as can be ascertained from my examination. is
                ______________ yesars
              </p>
              <p>
                <input type="checkBox" />
                <span style={{ marginLeft: "10px" }}>
                  in my opinion he/she is fit for employment in the said
                  manufacturing process / operation
                </span>
              </p>
              <p>
                <input type="checkBox" />
                <span style={{ marginLeft: "10px" }}>
                  in my opinion he/she is unfit for employment in the said
                  manufacturing process / operation for the
                  reason___________________________________
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
    </React.Fragment>
  );
};

export default FormHelth33;
