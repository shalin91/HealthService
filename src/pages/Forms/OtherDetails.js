import React, { useContext, useState } from "react";
import SignContext from "../../contextAPI/Context/SignContext";
import UiContent from "../../Components/Common/UiContent";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";



const OtherDetails = () => {

    const validationSchema = Yup.object().shape({
        companyName: Yup.string().required(
          "company name  is required"
        ),
        companyLocation: Yup.string().required("Location is required"),
        companyJobCategorys: Yup.string().required("Category is required"),
        companyDepartments: Yup.string().required("Department is required"),
    
      });

  return (

    <>
       
      
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  gallaryCategoryTitle: "",
                  description: "",
                  imagePath: "",
                  active: true,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                //   await handleSavedcat(values);
                  resetForm();
                  // togglemodal();
                  
                }}
              >
                {({
                  isSubmitting,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  values,
                  handleBlur,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Card>
                      
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Col sm={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Parmanent / Temporary
                                </label>
                                <div className="mb-3">
                                <select
                                  className="form-select"
                                  name="title"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.title}
                                >
                                  <option value="">Select</option>
                                  <option value="Mr.">Mr.</option>
                                  <option value="Mrs.">Mrs.</option>
                                </select>
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle &&
                                      touched.gallaryCategoryTitle &&
                                      errors.gallaryCategoryTitle}
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Period of temporary unfit
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="period of temporary unfit"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.description &&
                                      touched.description &&
                                      errors.description}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Department
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="department"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Exposure to
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="department"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={2}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Date of Posting
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="DD/MM/YYYY"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle &&
                                      touched.gallaryCategoryTitle &&
                                      errors.gallaryCategoryTitle}
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Date of Leavinf/Transfer
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="period of temporary unfit"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.description &&
                                      touched.description &&
                                      errors.description}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Reasons for Discharge leave or transfer
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="department"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Signs and Symptoms
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="department"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Nature of Tests
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="department"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={2}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Date for declaring unfit
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="DD/MM/YYYY"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle &&
                                      touched.gallaryCategoryTitle &&
                                      errors.gallaryCategoryTitle}
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Date of issuing fitness
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="period of temporary unfit"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                  <p className="error text-danger">
                                    {errors.description &&
                                      touched.description &&
                                      errors.description}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Card>
                    
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        
    </>
  )
}

export default OtherDetails