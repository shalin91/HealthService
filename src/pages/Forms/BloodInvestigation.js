import React, { useState,useEffect } from "react";
import { Form, Formik } from "formik";

import { Card, CardHeader, Col, Input, Row } from "reactstrap";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BloodInvestigation = (props) => {
  const [bloodinfo,setbloodinfo]=useState({
              hb: "",
              rbc: "",
              wbc: "",
              differentialCount: "",
              plateletCount: "",
              esr: "",
              blGroup: "",
              blSugarFastingOrRandom: "",
              blSugarPP2BS: "",
              blUrea: "",
              bun: "",
              sCreatinine: "",
              sgpt: "",
              sgot: "",
              sBilirubinTotal: "",
              sBilirubinDirect: "",
              sBilirubinIndirect: "",
              alklinePhosphatase: "",
              sProteins: "",
              albumin: "",
              globulin: "",
              sodium: "",
              potassuim: "",
              chloride: "",
              remarks:"",
  });
  console.log("props.bllooood",props.blood);
  const { setBloodDetails,GetSpecificBlood,
    editBlood, } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    // toast.success("Data submitted successfully!", {
    //   position: "top-right",
    //   autoClose: 3000, 
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
    const data = { ...props, ...values };

    const response = await setBloodDetails(data);

    console.log(response);
  };
  const gettingid = async () => {
    if(props.blood!==null)
    {
    const res = await GetSpecificBlood(props.blood);
    console.log(">>>blood", res.data);
    setbloodinfo(res.data);
    }
    // console.log(vital.temperature);
  };
  useEffect(() => {
    gettingid();
  }, [props.blood]);
  return (
    <>
      {props.blood?(
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              bloodinfo
              
            }}
            // validationSchema={validationSchema}

            onSubmit={async (values, { resetForm }) => {
                

                const data = { ...props, ...bloodinfo };
                console.log(data);
                const res = await editBlood(props.blood, data);
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
                  <CardHeader>
                    <Row className="g-1 m-1">
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-between">
                          <h2 className="card-title mb-0 justify-content-sm-start">
                            <strong>Blood Investigation</strong>
                          </h2>
                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Hb
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Hb"
                                name="hb"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      hb: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.hb !== null &&
                                        bloodinfo.hb !== ""
                                        ? bloodinfo.hb
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              RBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="RBC"
                                name="rbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      rbc: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.rbc !== null &&
                                        bloodinfo.rbc !== ""
                                        ? bloodinfo.rbc
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              WBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="WBC"
                                name="wbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      wbc: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.wbc !== null &&
                                        bloodinfo.wbc !== ""
                                        ? bloodinfo.wbc
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Differential Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Differential Count"
                                name="differentialCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      differentialCount: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.differentialCount !== null &&
                                        bloodinfo.differentialCount !== ""
                                        ? bloodinfo.differentialCount
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Platelet Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="plateletCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      plateletCount: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.plateletCount !== null &&
                                        bloodinfo.plateletCount !== ""
                                        ? bloodinfo.plateletCount
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              ESR
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ESR"
                                name="esr"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      esr: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.esr !== null &&
                                        bloodinfo.esr !== ""
                                        ? bloodinfo.esr
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Group
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Group"
                                name="blGroup"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      blGroup: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.blGroup !== null &&
                                        bloodinfo.blGroup !== ""
                                        ? bloodinfo.blGroup
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                              style={{fontSize:'11px'}}
                            >
                              BloodSugar Fasting
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BloodSugar Fasting"
                                name="blSugarFastingOrRandom"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      blSugarFastingOrRandom: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.blSugarFastingOrRandom !== null &&
                                        bloodinfo.blSugarFastingOrRandom !== ""
                                        ? bloodinfo.blSugarFastingOrRandom
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Sugar PP2BS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Sugar PP2BS"
                                name="blSugarPP2BS"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      blSugarPP2BS: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.blSugarPP2BS !== null &&
                                        bloodinfo.blSugarPP2BS !== ""
                                        ? bloodinfo.blSugarPP2BS
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Urea
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="blUrea"
                                name="blUrea"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      blUrea: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.blUrea !== null &&
                                        bloodinfo.blUrea !== ""
                                        ? bloodinfo.blUrea
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              BUN
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BUN"
                                name="bun"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      bun: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.bun !== null &&
                                        bloodinfo.bun !== ""
                                        ? bloodinfo.bun
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S Creatine
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S Creatine"
                                name="sCreatinine"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sCreatinine: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sCreatinine !== null &&
                                        bloodinfo.sCreatinine !== ""
                                        ? bloodinfo.sCreatinine
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGPT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGPT"
                                name="sgpt"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sgpt: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sgpt !== null &&
                                        bloodinfo.sgpt !== ""
                                        ? bloodinfo.sgpt
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGOT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGOT"
                                name="sgot"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sgot: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sgot !== null &&
                                        bloodinfo.sgot !== ""
                                        ? bloodinfo.sgot
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.BilirubinTotal
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinTotal"
                                name="sBilirubinTotal"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sBilirubinTotal: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sBilirubinTotal !== null &&
                                        bloodinfo.sBilirubinTotal !== ""
                                        ? bloodinfo.sBilirubinTotal
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin Direct
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinDirect"
                                name="sBilirubinDirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sBilirubinDirect: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sBilirubinDirect !== null &&
                                        bloodinfo.sBilirubinDirect !== ""
                                        ? bloodinfo.sBilirubinDirect
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin InDirect
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="sBilirubinIndirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sBilirubinIndirect: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sBilirubinIndirect !== null &&
                                        bloodinfo.sBilirubinIndirect !== ""
                                        ? bloodinfo.sBilirubinIndirect
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col slg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                              style={{fontSize:'11px'}}
                            >
                              Alkaline Phosphatase
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Alkaline Phosphatase"
                                name="alklinePhosphatase"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      alklinePhosphatase: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.alklinePhosphatase !== null &&
                                        bloodinfo.alklinePhosphatase !== ""
                                        ? bloodinfo.alklinePhosphatase
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
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
                              S.protiens
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sprotiens"
                                name="sProteins"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sProteins: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sProteins !== null &&
                                        bloodinfo.sProteins !== ""
                                        ? bloodinfo.sProteins
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Albumin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Albumin"
                                name="albumin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      albumin: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.albumin !== null &&
                                        bloodinfo.albumin !== ""
                                        ? bloodinfo.albumin
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Globulin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Globulin"
                                name="globulin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      globulin: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.globulin !== null &&
                                        bloodinfo.globulin !== ""
                                        ? bloodinfo.globulin
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Sodium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sodium"
                                name="sodium"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      sodium: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.sodium !== null &&
                                        bloodinfo.sodium !== ""
                                        ? bloodinfo.sodium
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Potassium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Potassium"
                                name="potassuim"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      potassuim: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.potassuim !== null &&
                                        bloodinfo.potassuim !== ""
                                        ? bloodinfo.potassuim
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Chloride
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Chloride"
                                name="chloride"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      chloride: e.target.value,
                                    })
                                  }
                                onBlur={handleBlur}
                                value={
                                    bloodinfo
                                      ? bloodinfo.chloride !== null &&
                                        bloodinfo.chloride !== ""
                                        ? bloodinfo.chloride
                                        : ""
                                      : ""
                                  }
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <CardHeader>
                        <Row className="g-1">
                          <Col sm={2}>
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Urine R&M:Remarks</strong>
                              </h2>
                            </div>
                          </Col>
                          <Col sm={4} style={{ marginTop: "-2px" }}>
                            <div className="">
                              {/* <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Remarks
                            </label> */}
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="General Remark"
                                  name="remarks"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setbloodinfo({
                                      ...bloodinfo,
                                      remarks: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    bloodinfo
                                      ? bloodinfo.remarks !== null &&
                                        bloodinfo.remarks !== ""
                                        ? bloodinfo.remarks
                                        : ""
                                      : ""
                                  }
                                />
                                <p className="error text-danger">
                                  {errors.temp && touched.temp && errors.temp}
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
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
              hb: "",
              rbc: "",
              wbc: "",
              differentialCount: "",
              plateletCount: "",
              esr: "",
              blGroup: "",
              blSugarFastingOrRandom: "",
              blSugarPP2BS: "",
              blUrea: "",
              bun: "",
              sCreatinine: "",
              sgpt: "",
              sgot: "",
              sBilirubinTotal: "",
              sBilirubinDirect: "",
              sBilirubinIndirect: "",
              alklinePhosphatase: "",
              sProteins: "",
              albumin: "",
              globulin: "",
              sodium: "",
              potassuim: "",
              chloride: "",
              remarks:"",
              
            }}
            // validationSchema={validationSchema}

            onSubmit={(values,{ resetForm }) => {
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
                  <CardHeader>
                    <Row className="g-1 m-1">
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-between">
                          <h2 className="card-title mb-0 justify-content-sm-start">
                            <strong>Blood Investigation</strong>
                          </h2>
                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Hb
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Hb"
                                name="hb"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hb}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              RBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="RBC"
                                name="rbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.rbc}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              WBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="WBC"
                                name="wbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.wbc}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Differential Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Differential Count"
                                name="differentialCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.differentialCount}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Platelet Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="plateletCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.plateletCount}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              ESR
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ESR"
                                name="esr"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.esr}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Group
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Group"
                                name="blGroup"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blGroup}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                              style={{fontSize:'12px'}}
                            >
                              BloodSugar Fasting
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BloodSugar Fasting"
                                name="blSugarFastingOrRandom"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blSugarFastingOrRandom}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Sugar PP2BS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Sugar PP2BS"
                                name="blSugarPP2BS"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blSugarPP2BS}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Urea
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="blUrea"
                                name="blUrea"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blUrea}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              BUN
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BUN"
                                name="bun"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bun}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S Creatine
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S Creatine"
                                name="sCreatinine"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sCreatinine}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGPT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGPT"
                                name="sgpt"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sgpt}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGOT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGOT"
                                name="sgot"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sgot}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.BilirubinTotal
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinTotal"
                                name="sBilirubinTotal"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinTotal}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin Direct
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinDirect"
                                name="sBilirubinDirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinDirect}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin InDirect
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="sBilirubinIndirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinIndirect}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                              style={{fontSize:'11px'}}
                            >
                              Alkaline Phosphatase
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Alkaline Phosphatase"
                                name="alklinePhosphatase"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.alklinePhosphatase}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.protiens
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sprotiens"
                                name="sProteins"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sProteins}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Albumin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Albumin"
                                name="albumin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.albumin}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Globulin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Globulin"
                                name="globulin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.globulin}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Sodium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sodium"
                                name="sodium"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sodium}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Potassium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Potassium"
                                name="potassuim"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.potassuim}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2} md={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Chloride
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Chloride"
                                name="chloride"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.chloride}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <CardHeader>
                        <Row className="g-1">
                          <Col lg={2} md={5}>
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Urine R&M:Remarks</strong>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={4} md={6} style={{ marginTop: "-2px" }}>
                            <div className="">
                              {/* <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Remarks
                            </label> */}
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="General Remark"
                                  name="remarks"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                   value={values.remarks}
                                />
                                <p className="error text-danger">
                                  {errors.temp && touched.temp && errors.temp}
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      
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

export default BloodInvestigation;
