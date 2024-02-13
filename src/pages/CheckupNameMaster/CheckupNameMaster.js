import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UiContent from "../../Components/Common/UiContent";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { TagsInput } from "react-tag-input-component";
import SignContext from "../../contextAPI/Context/SignContext";
const CheckupNameMaster = () => {
  const {
    GetCompany,
    GetCompanybyId,
    setNewCheckupName,
    GetEmpsbyCompAndLoc,
    getCheckupData,
    getCheckupType,
    setCheckupNameMaster,
    GetContactDetailsById,
  } = useContext(SignContext);
  const [checkupType, setCheckupType] = useState(null);
  const [checkupName, setCheckupName] = useState(null);
  const getAllCheckupType = async () => {
    const responce = await getCheckupType();

    console.log(responce);

    setCheckupType(responce.data);
  };
  const addCheckupDetails = async (val) => {
    // console.log(val);

    // setCheckupType(val.checkupType);

    const data = { ...val };

    const response = await setCheckupNameMaster(data);

    console.log(response);

    // setCheckupName(response.data._id);

    console.log(response.data._id);
  };

  useEffect(() => {
    getAllCheckupType();
  }, []);

  return (
    <>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            grandParent="Setup"
            parent="Company Master"
            child="Add-Company"
          />
          <Row>
            <Col lg={12}>
              <Formik
                // validationSchema={schema}
                initialValues={{
                  checkupName: "",
                  checkupNumber: "",
                  checkupDate: "",
                  checkupType: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  addCheckupDetails(values);
                  resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="login">
                    <div className="form">
                      {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>CHECK UP DETAILS</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                                <Col sm={6}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    CheckUp Name
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupName"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupName}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupName &&
                                      touched.checkupName &&
                                      errors.checkupName}
                                  </p>
                                </Col>
                                {/* <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    checkup Number
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupNumber"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupNumber}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber}
                                  </p>
                                </Col>
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Date
                                  </label>
                                  <div className="">
                                    <Input
                                      type="date"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupDate"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupDate}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupDate &&
                                      touched.checkupDate &&
                                      errors.checkupDate}
                                  </p>
                                </Col> */}
                                <Col sm={6}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Check-up Type
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="checkupType"
                                      onBlur={handleBlur}
                                      value={values.checkupType}
                                      onChange={handleChange}
                                    >
                                      <option value=""> checkup Type</option>
                                      {checkupType && checkupType.length > 0 ? (
                                        checkupType.map((type) => (
                                          <option key={type} value={type._id}>
                                            {type.checkupType}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="" disabled>
                                          No locations available
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <div className="text-end mb-3 me-3">
                            <button
                              className="btn btn-success w-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CheckupNameMaster;
