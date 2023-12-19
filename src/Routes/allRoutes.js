import React from "react";
import { SignState } from "../contextAPI/State/SignState";

//Dashboard

// Project
import CreateProject from "../pages/Projects/CreateProject";
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";

// //Ecommerce Pages
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
// import EcommerceOrderDetail from "../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";

//AuthenticationInner pages
import BasicSignIn from "../pages/AuthenticationInner/Login/BasicSignIn";
import CoverSignIn from "../pages/AuthenticationInner/Login/CoverSignIn";
import BasicPasswReset from "../pages/AuthenticationInner/PasswordReset/BasicPasswReset";
import BasicSignUp from "../pages/AuthenticationInner/Register/BasicSignUp";
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
//pages
import ComingSoon from "../pages/Pages/ComingSoon/ComingSoon";
import Faqs from "../pages/Pages/Faqs/Faqs";
import Gallery from "../pages/Pages/Gallery/Gallery";
import Maintenance from "../pages/Pages/Maintenance/Maintenance";
import Pricing from "../pages/Pages/Pricing/Pricing";
import Settings from "../pages/Pages/Profile/Settings/Settings";
import SimplePage from "../pages/Pages/Profile/SimplePage/SimplePage";
import SearchResults from "../pages/Pages/SearchResults/SearchResults";
import SiteMap from "../pages/Pages/SiteMap/SiteMap";
import Starter from "../pages/Pages/Starter/Starter";
import Timeline from "../pages/Pages/Timeline/Timeline";

import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import CoverLockScreen from "../pages/AuthenticationInner/LockScreen/CoverLockScr";
import BasicLogout from "../pages/AuthenticationInner/Logout/BasicLogout";
import CoverLogout from "../pages/AuthenticationInner/Logout/CoverLogout";
import CoverPasswReset from "../pages/AuthenticationInner/PasswordReset/CoverPasswReset";
import BasicSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg";
import CoverSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg";
import BasicTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify";
import CoverTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify";

import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";
import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";

//login
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import NewTeam from "../pages/Pages/Team/NewTeam";
// import NewCutomer from "../pages/Ecommerce/EcommerceCustomers/NewCutomer";
// import AddContent from "../pages/ContentManagement/AddContent";
// import Content from "../pages/ContentManagement/Content";
// import EditContent from "../pages/ContentManagement/EditContent";
// import NewCustomer from "../pages/Ecommerce/EcommerceCustomers/NewCustomer";
// import AddGalleryCat from "../pages/GalleryManagement/AddGalleryCat";
// import AddGalleryDetails from "../pages/GalleryManagement/AddGalleryDetails";
// import EditGalleryCat from "../pages/GalleryManagement/EditGalleryCat";
// import EditGalleryDetails from "../pages/GalleryManagement/EditGalleryDetails";
// import ManageGallery from "../pages/GalleryManagement/ManageGallery";
// import ManageGalleryCat from "../pages/GalleryManagement/ManageGalleryCat";
// import CategoryMaster from "../pages/manageCategory/Category";
// import SubCategoryMaster from "../pages/manageCategory/subCategory";
// import SubSubCategoryMaster from "../pages/manageCategory/subSubCategory";
// import EcommerceNewAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceNewAddProduct";
// import AddCoupons from "../pages/Coupon Management/AddCoupons";
// import Coupons from "../pages/Coupon Management/Coupons";
// import EditCoupons from "../pages/Coupon Management/EditCoupons";
// import AddUser from "../pages/Pages/Team/AddUser";
// import AddStocks from "../pages/Stocks Management/AddStocks";
// import EditStocks from "../pages/Stocks Management/EditStocks";
// import Stocks from "../pages/Stocks Management/Stocks";
// import ProductMaster from "../pages/products/product";

// import AddProduct from "../pages/products/addProduct";

// import BannerMaster from "../pages/BannerMaster/bannerMaster.js";
// import BlogMaster from "../pages/BlogMaster/BlogsMaster";
// import DailyPriceRates from "../pages/DailyGoldSilverPrice/DailyPriceRates";
// import AllOrders from "../pages/Order Managemenr/AllOrders";

// import InvoiceDetails from "../pages/Order Managemenr/inVoice";

// import BlogCategory from "../pages/BlogMaster/BlogCategory.js";
// import AddColor from "../pages/ColorMaster/AddColor";
// import AllColors from "../pages/ColorMaster/AllColors";
// import Contact from "../pages/Contact/Contact.js";
// import CustomerOrders from "../pages/Ecommerce/EcommerceCustomers/CustomerOrders";
// import CustomerReports from "../pages/Reports/CustomerReports";
// import CustomersByDate from "../pages/Reports/CustomersByDate.js";
// import ProductsReports from "../pages/Reports/ProductsReports";
// import StockReports from "../pages/Reports/StockReports.js";
// import AddSize from "../pages/SizeMaster/AddSize";
// import AllSize from "../pages/SizeMaster/AllSize";
// import SubScribe from "../pages/Subscribe/SubScribe.js";
// import AddVariation from "../pages/products/AddVariation";

import AddCompany from "../pages/CompanyMaster/AddCompany.js";
import AddCheckuptype from "../pages/Forms/AddCheckuptype.js";
import BloodInvestigation from "../pages/Forms/BloodInvestigation.js";
import CheckupForm from "../pages/Forms/CheckupForm.js";
import Eye from "../pages/Forms/Eye.js";
import Form33 from "../pages/Forms/Form33.js";
import GeneralExam from "../pages/Forms/GeneralExam.js";
import Investigation from "../pages/Forms/Investigation.js";
import NewForm from "../pages/Forms/NewForm.js";
import OtherDetails from "../pages/Forms/OtherDetails.js";
import VitalsandHistory from "../pages/Forms/VitalsandHistory.js";
import Form32Health from "../pages/Pages/PrintForm/Form32Health.js";
import FormHelth33 from "../pages/Pages/PrintForm/Form33Health.js";
import HelthCard from "../pages/Pages/PrintForm/HelthCard.js";
import MediclaCheckUp from "../pages/Pages/PrintForm/MediclaCheckUp.js";
import MedicalReports from "../pages/Reports/MedicalReports.js";

// import customerNew from "../pages/Ecommerce/EcommerceCustomers/customerNew";
const authProtectedRoutes = [
  // { path: "/dashboard", component: <NewDashboard /> },

  {
    path: "/newform",
    component: (
      <SignState>
        <NewForm />
      </SignState>
    ),
  },
  {
    path: "/form",
    component: (
      <SignState>
        <CheckupForm />
      </SignState>
    ),
  },
  {
    path: "/addcompany",
    component: (
      <SignState>
        <AddCompany />
      </SignState>
    ),
  },
  {
    path: "/checkuptype",
    component: (
      <SignState>
        <AddCheckuptype />
      </SignState>
    ),
  },
  {
    path: "/vitalsandhistory",
    component: (
      <SignState>
        <VitalsandHistory />
      </SignState>
    ),
  },
  {
    path: "/generalexam",
    component: (
      <SignState>
        <GeneralExam />
      </SignState>
    ),
  },
  {
    path: "/eye",
    component: (
      <SignState>
        <Eye />
      </SignState>
    ),
  },
  {
    path: "/investigation",
    component: (
      <SignState>
        <Investigation />
      </SignState>
    ),
  },
  {
    path: "/otherdetails",
    component: (
      <SignState>
        <OtherDetails />
      </SignState>
    ),
  },
  {
    path: "/bloodinvestigation",
    component: (
      <SignState>
        <BloodInvestigation />
      </SignState>
    ),
  },
  {
    path: "/form33",
    component: (
      <SignState>
        <Form33 />
      </SignState>
    ),
  },

  { path: "/apps-ecommerce-orders", component: <EcommerceOrders /> },
  // { path: "/apps-ecommerce-order-details", component: <EcommerceOrderDetail /> },
  { path: "/apps-ecommerce-customers", component: <EcommerceCustomers /> },

  // {
  //   path: "/customers",
  //   component: (
  //     <SignState>
  //       <NewCustomer />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/customerorder/:id",
  //   component: (
  //     <SignState>
  //       <CustomerOrders />
  //     </SignState>
  //   ),
  // },
  {
    path: "/form32",
    component: (
      <SignState>
        <Form32Health />
      </SignState>
    ),
  },
  {
    path: "/form-helth33",
    component: (
      <SignState>
        <FormHelth33 />
      </SignState>
    ),
  },
  {
    path: "/helth-card",
    component: (
      <SignState>
        <HelthCard />
      </SignState>
    ),
  },
  {
    path: "/medical-checkup",
    component: (
      <SignState>
        <MediclaCheckUp />
      </SignState>
    ),
  },
  {
    path: "/medical-report",
    component: (
      <SignState>
        <MedicalReports />
      </SignState>
    ),
  },

  // {
  //   path: "/customers",
  //   component: (
  //     <SignState>
  //       <NewCustomer />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/customerorder/:id",
  //   component: (
  //     <SignState>
  //       <CustomerOrders />
  //     </SignState>
  //   ),
  // },

  { path: "/apps-ecommerce-cart", component: <EcommerceCart /> },
  { path: "/apps-ecommerce-checkout", component: <EcommerceCheckout /> },

  // category Master
  // { path: "/category-master", component: <CategoryMaster /> },
  // { path: "/sub-category-master", component: <SubCategoryMaster /> },
  // { path: "/sub-sub-category-master", component: <SubSubCategoryMaster /> },

  // product master
  // { path: "/allproducts", component: <ProductMaster /> },
  // { path: "/product-form", component: <ProductForm /> },
  // { path: "/add-product", component: <AddProduct /> },
  // { path: "/add-product/:id", component: <AddProduct /> },
  // { path: "/addvariation/:id", component: <AddVariation /> },
  // {
  //   path: "/addcolor",
  //   component: (
  //     <SignState>
  //       <AddColor />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/allcolors",
  //   component: (
  //     <SignState>
  //       <AllColors />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/addsize",
  //   component: (
  //     <SignState>
  //       <AddSize />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/allsizes",
  //   component: (
  //     <SignState>
  //       <AllSize />
  //     </SignState>
  //   ),
  // },

  // bannner master
  // { path: "/banner-master", component: <BannerMaster /> },

  // Content
  // {
  //   path: "/contentmanage",
  //   component: (
  //     <SignState>
  //       <Content />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/addcontent",
  //   component: (
  //     <SignState>
  //       <AddContent />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/updatecontent/:id",
  //   component: (
  //     <SignState>
  //       <EditContent />
  //     </SignState>
  //   ),
  // },

  // Gallery Content
  // {
  //   path: "/gallerycontent",
  //   component: (
  //     <SignState>
  //       <ManageGallery />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/gallerycatcontent",
  //   component: (
  //     <SignState>
  //       <ManageGalleryCat />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/creategallery",
  //   component: (
  //     <SignState>
  //       <AddGalleryCat />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/editgallerycat/:id",
  //   component: (
  //     <SignState>
  //       <EditGalleryCat />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/creategallerydet",
  //   component: (
  //     <SignState>
  //       <AddGalleryDetails />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/editgallerydet/:id",
  //   component: (
  //     <SignState>
  //       <EditGalleryDetails />
  //     </SignState>
  //   ),
  // },

  // Stocks
  // {
  //   path: "/stocks",
  //   component: (
  //     <SignState>
  //       <Stocks />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/addstocks",
  //   component: (
  //     <SignState>
  //       <AddStocks />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/editstocks/:id",
  //   component: (
  //     <SignState>
  //       <EditStocks />
  //     </SignState>
  //   ),
  // },

  // Coupons
  // {
  //   path: "/coupons",
  //   component: (
  //     <SignState>
  //       <Coupons />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/addcoupon",
  //   component: (
  //     <SignState>
  //       <AddCoupons />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/editcoupon/:id",
  //   component: (
  //     <SignState>
  //       <EditCoupons />
  //     </SignState>
  //   ),
  // },

  // Orders
  // {
  //   path: "/orders",
  //   component: (
  //     <SignState>
  //       <AllOrders />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/vieworder/:id",
  //   component: (
  //     <SignState>
  //       <EcommerceOrderDetail />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/invoice/:id",
  //   component: (
  //     <SignState>
  //       <InvoiceDetails />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/customerreports",
  //   component: (
  //     <SignState>
  //       <CustomerReports />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/customerbydatereport",
  //   component: (
  //     <SignState>
  //       <CustomersByDate />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/productreport",
  //   component: (
  //     <SignState>
  //       <ProductsReports />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/stockreport",
  //   component: (
  //     <SignState>
  //       <StockReports />
  //     </SignState>
  //   ),
  // },

  //Daily Price
  // {
  //   path: "/dailyrates",
  //   component: (
  //     <SignState>
  //       <DailyPriceRates />
  //     </SignState>
  //   ),
  // },

  // Blogs
  // { path: "/editcoupon/:id", component: <SignState><EditCoupons/></SignState> },

  //Projects
  { path: "/apps-projects-list", component: <ProjectList /> },
  { path: "/apps-projects-overview", component: <ProjectOverview /> },
  { path: "/apps-projects-create", component: <CreateProject /> },

  // {
  //   path: "/blog-master",
  //   component: (
  //     <SignState>
  //       <BlogMaster />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/blog-category",
  //   component: (
  //     <SignState>
  //       <BlogCategory />
  //     </SignState>
  //   ),
  // },

  // {
  //   path: "/subscription",
  //   component: (
  //     <SignState>
  //       <SubScribe />
  //     </SignState>
  //   ),
  // },
  // {
  //   path: "/contactus",
  //   component: (
  //     <SignState>
  //       <Contact />
  //     </SignState>
  //   ),
  // },

  //Pages
  { path: "/pages-starter", component: <Starter /> },
  {
    path: "/pages-profile",
    component: (
      <SignState>
        {" "}
        <SimplePage />{" "}
      </SignState>
    ),
  },
  {
    path: "/pages-profile-settings/:id",
    component: (
      <SignState>
        {" "}
        <Settings />{" "}
      </SignState>
    ),
  },
  // { path: "/pages-team", component: <SignState><Team /></SignState> },
  {
    path: "/newteam",
    component: (
      <SignState>
        <NewTeam />
      </SignState>
    ),
  },
  // {
  //   path: "/adduser",
  //   component: (
  //     <SignState>
  //       <AddUser />
  //     </SignState>
  //   ),
  // },
  { path: "/pages-timeline", component: <Timeline /> },
  { path: "/pages-faqs", component: <Faqs /> },
  { path: "/pages-gallery", component: <Gallery /> },
  { path: "/pages-pricing", component: <Pricing /> },
  { path: "/pages-sitemap", component: <SiteMap /> },
  { path: "/pages-search-results", component: <SearchResults /> },

  //User Profile
  {
    path: "/profile/:id",
    component: (
      <SignState>
        <UserProfile />
      </SignState>
    ),
  },
];

const publicRoutes = [
  // Authentication Page
  {
    path: "/logout",
    component: (
      <SignState>
        <Logout />
      </SignState>
    ),
  },
  {
    path: "/login",
    component: (
      <SignState>
        <Login />
      </SignState>
    ),
  },
  {
    path: "/",
    component: (
      <SignState>
        <Login />
      </SignState>
    ),
  },
  {
    path: "/forgot-password",
    component: (
      <SignState>
        <ForgetPasswordPage />
      </SignState>
    ),
  },
  // { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-coming-soon", component: <ComingSoon /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },
];

export { authProtectedRoutes, publicRoutes };
