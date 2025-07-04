import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Signup from "../SignUp/SignUp";
// import SignIn from "../signin/SignIn";
import Page1 from "../flashscreen/Page1";
import Page2 from "../flashscreen/Page2";
import Page3 from "../flashscreen/Page3";
import Page4 from "../flashscreen/Page4";
import Page5 from "../flashscreen/Page5";
// import Page6 from "../flashscreen/Page6";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splash" element={<Page1 />} />
        <Route path="/splash2" element={<Page2 />} />
        <Route path="/splash3" element={<Page3 />} />
        <Route path="/splash4" element={<Page4 />} />
        <Route path="/splash5" element={<Page5 />} />
        {/* <Route path="/splash6" element={<Page6 />} /> */}
        {/* <Route path="/sign-up" element={<Signup />} /> */}
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}
export default Pages;
