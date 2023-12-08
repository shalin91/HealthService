import React, { useContext, useState } from "react";
import SignContext from "../../contextAPI/Context/SignContext";
import UiContent from "../../Components/Common/UiContent";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form33 = () => {

    
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
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Employed/Propose
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="employed/propose"
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
                                 Hazardous Process
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="hazardous process"
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
                                 Dangerous operation
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="hazardous process"
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
                            <Col sm={3}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                 FIT/UNFIT
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
                                    {errors.imagePath &&
                                      touched.imagePath &&
                                      errors.imagePath}
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
                                 Reason for Unfit
                                </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="reason"
                                    name="description"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                  />
                                <div className="mb-3">
                                
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
                                 Reffered to
                                </label>
                                <div className="mb-3">
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="referred to"
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

export default Form33