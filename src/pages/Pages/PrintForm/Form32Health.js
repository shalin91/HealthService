import React from "react";
import "./../../Pages/PrintForm/printForm.css";

const Form32Health = () => {
  return (
    <React.Fragment>
      <div className="mainDivMediclaForm">
        <div className="formTitleDiv">
          <h5 className="form32Title">FORM NO.32 HEALTH REGISTER</h5>
        </div>
        <h5 className="form32SubTitle">
          (Prescribed under Rules 68-T and 102)
        </h5>
        <div className="srNoDiv">
          Sr.No.:
          <span className="dateTitle">Date:</span>
        </div>
        <div className="srNoDiv">
          Name:
          <div className="ageSectionDiv">
            <span>Sex:</span>
            <span>Age:</span>
            <span>Yrs:</span>
          </div>
        </div>
        <table className="mainTable">
          <tr>
            <td>Department</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Hazardous Operations</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Dangerous Operation </td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Nature of job of Occupation</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Raw Materials Products or by Products</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Date of Leaving / Transfer to or Transfer</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Reasons for Discharge,Leave/or Transfer</td>
            <td colspan="2"></td>
          </tr>
        </table>
        <table className="mainTable">
          <tr>
            <td colSpan={2}>MEDICAL EXAMINATION AND THE RESULT THEREOF</td>
          </tr>
          <tr>
            <td>Date</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Sign & Symptoms </td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Nature of Tests and results thereof</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Results Fir/Unfit</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td colSpan={2}>IF DECLARED UNFIT FOR WORK</td>
          </tr>
          <tr>
            <td>Period of temporary withdrawal form that work</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Reasons for withdrawal form that work</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Date of decalring unfit</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td>Date of issuing fitness certificate</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div>
                <div className="signatureTitle">
                  Signature with stamp of the
                </div>
                <div className="signatureTitle">Factory Medical Officer/</div>
                <div className="signatureTitle">the certifying surgeon</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Form32Health;
