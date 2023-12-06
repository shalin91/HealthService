import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UiContent from '../../Components/Common/UiContent';
import { Card, CardHeader, Col, Container, Input, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const Investigation = () => {

    const validationSchema = Yup.object().shape({
        height: Yup.string().required(
          "height  is required"
        ),
        weight: Yup.string().required("weight is required"),
        bmi: Yup.string().required("bmi is required"),
        pulse: Yup.string().required("pulse is required"),
        bp: Yup.string().required("bp is required"),
        temp: Yup.string().required("temp is required"),
      });

  return (
    <>
    
    
    
      
        
        <Row>
          <Col lg={12}>
            <Formik
              initialValues={{
                height: "",
                weight: "",
                bmi: "",
                pulse: "",
                bp: "",
                temp:"",
                complaints: "",
                pastHistory:"",
                personalHistory:"",
                familyHistory : "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                // await handleSavedcat(values);
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
                      <Row className=" m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Lab Reports
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="lab reports"
                                  name="complaints"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.complaints}
                                />
                              </div>
                            </div>
                          </Col>
                      </Row>
                      <Row className="m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                X-Ray Reports
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="X-Ray reports"
                                  name="pastHistory"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.pastHistory}
                                />
                              </div>
                            </div>
                          </Col>
                      </Row>
                      <Row className="m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                ECG Reports
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="ECG reports"
                                  name="personalHistory"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.personalHistory}
                                />
                              </div>
                            </div>
                          </Col>
                      </Row>
                      <Row className="m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Spirometry
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="spirometry"
                                  name="familyHistory"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.familyHistory}
                                />
                              </div>
                            </div>
                          </Col>
                      </Row>
                      <Row className="m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Autometry
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="autometry"
                                  name="familyHistory"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.familyHistory}
                                />
                              </div>
                            </div>
                          </Col>
                      </Row>
                      <Row className="m-1">
                      <Col sm={4}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Remarks
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="remarks"
                                  name="familyHistory"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.familyHistory}
                                />
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

export default Investigation