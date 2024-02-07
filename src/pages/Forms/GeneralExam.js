import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";

const GeneralExam = (props) => {
  const [examination, setexamination] = useState({
                generalExam: "",
                rs: "",
                cvs: "",
                cns: "",
                skinAndGenitals: "",
                other: "",
                abdomenAS: "",
                musculoSkeletal: "",
                ent: "",
                });
  const { GetSpecificExamination,editexamination } = useContext(SignContext);
  console.log(">>>>>", props.generalexamId);
  const { setGeneralExamination } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setGeneralExamination(data);

    console.log(response);
  };

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
  const gettingid = async () => {
    if (props.vitalid !== null) {
      const res = await GetSpecificExamination(props.generalexamId);
      console.log(">>examination", res.data);
      setexamination(res.data);
    }
  };
  useEffect(() => {
    gettingid();
  }, [props.generalexamId]);
  useEffect(() => {}, []);
  return (
    <>
      {props.generalexamId !== null ? (
        <Row>
          <Col lg={12}>
            <Formik
              initialValues={{
                  examination
              }}
              // validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                

                const data = { ...props, ...examination };
                console.log(data);
                const res = await editexamination(props.generalexamId, data);
                if (res) {
                  console.log("hello");
                }
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
                                  placeholder="General Examination"
                                  name="generalExam"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      generalExam: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.generalExam !== null &&
                                        examination.generalExam !== ""
                                        ? examination.generalExam
                                        : ""
                                      : ""
                                  }
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
                                  placeholder="rs"
                                  name="rs"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      rs: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.rs !== null &&
                                        examination.rs !== ""
                                        ? examination.rs
                                        : ""
                                      : ""
                                  }
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
                                  placeholder="abdomenAS"
                                  name="abdomenAS"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      abdomenAS: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.abdomenAS !== null &&
                                        examination.abdomenAS !== ""
                                        ? examination.abdomenAS
                                        : ""
                                      : ""
                                  }
                                />
                                <p className="error text-danger">
                                  {errors.abdomenAS &&
                                    touched.abdomenAS &&
                                    errors.abdomenAS}
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
                                  placeholder="musculoSkeletal"
                                  name="musculoSkeletal"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      musculoSkeletal: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.musculoSkeletal !== null &&
                                        examination.musculoSkeletal !== ""
                                        ? examination.musculoSkeletal
                                        : ""
                                      : ""
                                  }
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
                                  placeholder="ent"
                                  name="ent"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      ent: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.ent !== null &&
                                        examination.ent !== ""
                                        ? examination.ent
                                        : ""
                                      : ""
                                  }
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
                                  placeholder="cvs"
                                  name="cvs"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      cvs: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.cvs !== null &&
                                        examination.cvs !== ""
                                        ? examination.cvs
                                        : ""
                                      : ""
                                  }
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
                                  placeholder="cns"
                                  name="cns"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      cns: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.cns !== null &&
                                        examination.cns !== ""
                                        ? examination.cns
                                        : ""
                                      : ""
                                  }
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
                                Skin
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="skin"
                                  name="skinAndGenitals"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      skinAndGenitals: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.skinAndGenitals !== null &&
                                        examination.skinAndGenitals !== ""
                                        ? examination.skinAndGenitals
                                        : ""
                                      : ""
                                  }
                                />
                                <p className="error text-danger">
                                  {errors.skinAndGenitals &&
                                    touched.skinAndGenitals &&
                                    errors.skinAndGenitals}
                                </p>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Others & Genitals
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="Others & Genitals"
                                  name="other"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setexamination({
                                      ...examination,
                                      other: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    examination
                                      ? examination.other !== null &&
                                        examination.other !== ""
                                        ? examination.other
                                        : ""
                                      : ""
                                  }
                                />
                                <p className="error text-danger">
                                  {errors.other &&
                                    touched.other &&
                                    errors.other}
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
      ) : (
        <Row>
          <Col lg={12}>
            <Formik
              initialValues={{
                generalExam: "",
                rs: "",
                cvs: "",
                cns: "",
                skinAndGenitals: "",
                other: "",
                abdomenAS: "",
                musculoSkeletal: "",
                ent: "",
              }}
              // validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                // Alert the input values of the form that we filled
                //  alert(JSON.stringify(values));
                handleSubmitData(values);
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
                                  placeholder="General Examination"
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
                                  placeholder="rs"
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
                                  placeholder="abdomenAS"
                                  name="abdomenAS"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.abdomenAS}
                                />
                                <p className="error text-danger">
                                  {errors.abdomenAS &&
                                    touched.abdomenAS &&
                                    errors.abdomenAS}
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
                                  placeholder="musculoSkeletal"
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
                                  placeholder="ent"
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
                                  placeholder="cvs"
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
                                  placeholder="cns"
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
                                Skin
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="skin"
                                  name="skinAndGenitals"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.skinAndGenitals}
                                />
                                <p className="error text-danger">
                                  {errors.skinAndGenitals &&
                                    touched.skinAndGenitals &&
                                    errors.skinAndGenitals}
                                </p>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Others & Genitals
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="Others & Genitals"
                                  name="other"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.other}
                                />
                                <p className="error text-danger">
                                  {errors.other &&
                                    touched.other &&
                                    errors.other}
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
      )}
    </>
  );
};

export default GeneralExam;
