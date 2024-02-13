import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UiContent from "../../Components/Common/UiContent";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { TagsInput } from "react-tag-input-component";
import SignContext from "../../contextAPI/Context/SignContext";

const AddCompany = () => {

  const { AddComapany } = useContext(SignContext);

  const handleSaveCompanyData = async (Values) => {
    const res = await AddComapany(Values);
    console.log(res);
  };



  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("company name  is required"),
    companyLocation: Yup.array()
      .min(1, "At least one location is required")
      .required("Location is required"),
    companyJobCategorys: Yup.array()
      .min(1, "At least one category is required")
      .required("Category is required"),
    companyDepartments: Yup.array()
      .min(1, "At least one department is required")
      .required("Department is required"),
  });

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
                initialValues={{
                  companyName: "",
                  companyLocation: [],
                  companyJobCategorys: [],
                  companyDepartments: [],
                  name1 : "",
                  name2 : "",
                  name3 : "",
                  designation1 : "",
                  designation2 : "",
                  designation3 : "",
                  mobile1 : "",
                  mobile2 : "",
                  mobile3 : "",
                  email1 : "",
                  email2 : "",
                  email3 : "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    await handleSaveCompanyData(values);
                  console.log(values);
                  resetForm();
                  
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
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Add Company</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Col lg={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Comapany Name
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="Enter company"
                                    name="companyName"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.companyName}
                                  />
                                </div>
                                  <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Locations
                                </label>
                                <div className="mb-3">
                                  <TagsInput
                                    value={values.companyLocation}
                                    onChange={(newValues) =>
                                      setFieldValue(
                                        "companyLocation",
                                        newValues
                                      )
                                    }
                                    name="companyLocation"
                                    placeHolder="Enter location"
                                  />
                                </div>
                                  <p className="error text-danger">
                                    {errors.companyLocation &&
                                      touched.companyLocation &&
                                      errors.companyLocation}
                                  </p>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col lg={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Job Categories
                                </label>
                                <div className="mb-3">
                                  <TagsInput
                                    value={values.companyJobCategorys}
                                    onChange={(newValues) =>
                                      setFieldValue(
                                        "companyJobCategorys",
                                        newValues
                                      )
                                    }
                                    name="companyJobCategorys"
                                    placeHolder="enter category"
                                  />
                                </div>
                                  <p className="error text-danger">
                                    {errors.companyJobCategorys &&
                                      touched.companyJobCategorys &&
                                      errors.companyJobCategorys}
                                  </p>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Job Departments
                                </label>
                                <div className="mb-3">
                                  <TagsInput
                                    value={values.companyDepartments}
                                    onChange={(newValues) =>
                                        setFieldValue(
                                          "companyDepartments",
                                          newValues
                                        )
                                      }
                                    name="companyDepartments"
                                    placeHolder="enter departments"
                                  />
                                </div>
                                  <p className="error text-danger">
                                    {errors.companyDepartments &&
                                      touched.companyDepartments &&
                                      errors.companyDepartments}
                                  </p>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3 mt-3">
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Contact Person 1
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="name"
                                    name="name1"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name1}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Designation
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="designation"
                                    name="designation1"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.designation1}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Mobile NO.
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="phone"
                                    name="mobile1"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile1}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Email Id
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="email"
                                    name="email1"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email1}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Contact Person 2
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="name"
                                    name="name2"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name2}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Designation
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="designation"
                                    name="designation2"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.designation2}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Mobile NO.
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="phone"
                                    name="mobile2"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile2}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Email Id
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="email"
                                    name="email2"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email2}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Contact Person 3
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="name"
                                    name="name3"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name3}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Designation
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="designation"
                                    name="designation3"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.designation3}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Mobile NO.
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="phone"
                                    name="mobile3"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile3}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                            <Col lg={3} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Email Id
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="email"
                                    name="email3"
                                    aria-label="companyName"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email3}
                                  />
                                </div>
                                  {/* <p className="error text-danger">
                                    {errors.companyName &&
                                      touched.companyName &&
                                      errors.companyName}
                                  </p> */}
                              </div>
                            </Col>
                          </Row>
                        
                        </div>
                      </div>
                    </Card>
                    <div className="text-end mb-3">
                      <button
                        type="submit"
                        className="btn btn-success w-sm"
                        //   onClick={togglesuccessmodal}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddCompany;
