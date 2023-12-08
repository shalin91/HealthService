import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";

const GeneralExam = () => {
  const validationSchema = Yup.object().shape({
    generalExam: Yup.string().required("general exam  is required"),
    rs: Yup.string().required("rs is required"),
    cvs: Yup.string().required("cvs is required"),
    cns: Yup.string().required("cns is required"),
    skingenitals: Yup.string().required("skin & genitals is required"),
    abdomen: Yup.string().required("abdomen is required"),
    musculoSkeletal: Yup.string().required("musculo skeletal is required"),
    ent: Yup.string().required("ent is required"),
    other: Yup.string().required("other is required"),
  });

  return (
    <>
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              generalExam: "",
              rs: "",
              cvs: "",
              cns: "",
              skingenitals: "",
              other: "",
              abdomen: "",
              musculoSkeletal: "",
              ent: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
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
                  {/* <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Add Gallery Category</strong>
                              </h2>
                            
                            </div>
                          </Col>
                        </Row>
                      </CardHeader> */}
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              General Examination
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="generalExam"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.generalExam}
                              />
                              <p className="error text-danger">
                                {errors.generalExam &&
                                  touched.generalExam &&
                                  errors.generalExam}
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
                              RS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="rs"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.rs}
                              />
                              <p className="error text-danger">
                                {errors.rs && touched.rs && errors.rs}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              ABDOMEN (AS)
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="abdomen"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.abdomen}
                              />
                              <p className="error text-danger">
                                {errors.abdomen &&
                                  touched.abdomen &&
                                  errors.abdomen}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Musculo & Skeletal
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="musculoSkeletal"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.musculoSkeletal}
                              />
                              <p className="error text-danger">
                                {errors.musculoSkeletal &&
                                  touched.musculoSkeletal &&
                                  errors.musculoSkeletal}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              ENT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="ent"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ent}
                              />
                              <p className="error text-danger">
                                {errors.ent && touched.ent && errors.ent}
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
                              CVS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="cvs"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cvs}
                              />
                              <p className="error text-danger">
                                {errors.cvs && touched.cvs && errors.cvs}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              CNS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="cns"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cns}
                              />
                              <p className="error text-danger">
                                {errors.cns && touched.cns && errors.cns}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Skin & Genitals
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="skingenitals"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.skingenitals}
                              />
                              <p className="error text-danger">
                                {errors.skingenitals &&
                                  touched.skingenitals &&
                                  errors.skingenitals}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Other
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Enter Title"
                                name="other"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.other}
                              />
                              <p className="error text-danger">
                                {errors.other && touched.other && errors.other}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="text-end mb-3 me-3">
                    <button className="btn btn-success w-sm" type="submit">
                      Submit
                    </button>
                  </div>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default GeneralExam;
