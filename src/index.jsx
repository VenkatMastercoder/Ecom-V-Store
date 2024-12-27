/* eslint-disable react/prop-types */
import ReactDOM from "react-dom/client";
import "./style.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import ProductLayout from "./component/ProductLayout/ProductLayout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Counter from "./component/Counter/Counter";
// import Comment from "./component/Comment/Comment";
import Error from "./component/Error/Error";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Contact from "./component/Contact/Contact";
import DemoImages from "./component/DemoImages/DemoImages";
import { lazy, Suspense } from "react";
import Cart from "./component/Cart/Cart";
import CartProvider from "./context/cartContext";

const Comment = lazy(() => import("./component/Comment/Comment"));

// www.swiggy.com/comment
const Body = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
    </>
  );
};

const AppLayout = () => {
  // const [userData,setUserData] = useState()

  // useEffect(()=>{
  // Login API - User Data

  // setUserData({name:""})
  // },[])

  return (
    <>
      <CartProvider>
        <Header /> {/* Ram */}
        <Outlet /> {/* Sam */}
        <Footer /> {/* Johon */}
      </CartProvider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/comment",
        element: (
          <Suspense fallback={"Loading..."}>
            <Comment />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/demo-images",
        element: <DemoImages />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
