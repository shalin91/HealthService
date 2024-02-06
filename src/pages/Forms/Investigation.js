import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext,useEffect,useState} from "react";

const Investigation = (props) => {
  const [otherinv,setotherinv]=useState({
    labReports: "",
    xRayReport: "",
    ecgReport: "",
    spirometry: "",
    audiometry: "",
    remarks: "",
  }

  );
  console.log(">>>other",props.otherinv);
  const { setInvestigation,GetSpecificOtherDetail } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setInvestigation(data);

    console.log(response);
  };

  const validationSchema = Yup.object().shape({
    labReports: Yup.string().required("lab reports  is required"),
    xRayReports: Yup.string().required("x ray reports is required"),
    ecgReports: Yup.string().required("ecgReports is required"),
    spirometry: Yup.string().required("spirometry is required"),
    autometry: Yup.string().required("autometry is required"),
    remarks: Yup.string().required("remarks is required"),
  });
  const gettingid = async () => {
    if(props.otherinv!==null)
    {
    const res = await GetSpecificOtherDetail(props.otherinv);
    console.log(">>>other", res.data);
    setotherinv(res.data);
    }
    // console.log(vital.temperature);
  };
  useEffect(() => {
    gettingid();
  }, [props.otherinv]);
  return (
    <>
      {props.otherinv!==null?(
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              otherinv
            }}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              // alert(JSON.stringify(values));
              handleSubmitData(values);
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
                                name="labReports"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      labReports: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.labReports !== null &&
                                        otherinv.labReports !== ""
                                        ? otherinv.labReports
                                        : ""
                                      : ""
                                  }
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
                                name="xRayReport"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      xRayReport: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.xRayReport !== null &&
                                        otherinv.xRayReport !== ""
                                        ? otherinv.xRayReport
                                        : ""
                                      : ""
                                  }
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
                                name="ecgReport"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      ecgReport: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.ecgReport !== null &&
                                        otherinv.ecgReport !== ""
                                        ? otherinv.ecgReport
                                        : ""
                                      : ""
                                  }
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
                                name="spirometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      spirometry: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.spirometry !== null &&
                                        otherinv.spirometry !== ""
                                        ? otherinv.spirometry
                                        : ""
                                      : ""
                                  }
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
                              Audiometry
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="autometry"
                                name="audiometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      audiometry: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.audiometry !== null &&
                                        otherinv.audiometry !== ""
                                        ? otherinv.audiometry
                                        : ""
                                      : ""
                                  }
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
                                name="remarks"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setotherinv({
                                      ...otherinv,
                                      remarks: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    otherinv
                                      ? otherinv.remarks !== null &&
                                        otherinv.remarks !== ""
                                        ? otherinv.remarks
                                        : ""
                                      : ""
                                  }
                              />
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
      ):(
        <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              labReports: "",
              xRayReport: "",
              ecgReport: "",
              spirometry: "",
              audiometry: "",
              remarks: "",

            }}
            // validationSchema={validationSchema}
            onSubmit={(values ,{ resetForm }) => {
              
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
                                name="labReports"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.labReports}
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
                                name="xRayReport"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.xRayReport}
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
                                name="ecgReport"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ecgReport}
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
                                name="spirometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.spirometry}
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
                                name="audiometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.audiometry}
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
                                name="remarks"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.remarks}
                              />
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

export default Investigation;
