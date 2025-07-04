import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp/SignUp";
import Journal from "./Journal/Journal";
// import Signup from "../SignUp/SignUp";
// import SignIn from "../signin/SignIn";
import Page1 from "../flashscreen/Page1";
import Page2 from "../flashscreen/Page2";
import Page3 from "../flashscreen/Page3";
import Page4 from "../flashscreen/Page4";
import Page5 from "../flashscreen/Page5";
import AnimatedButton from "../Components/AnimatedButton";
import Page6 from "../flashscreen/Page6";
import Page7 from "../flashscreen/Page7";
import SignIn from "../SigIn/SignIn";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<AnimatedButton />} />
        <Route path="/splash" element={<Page1 />} />
        <Route path="/splash2" element={<Page2 />} />
        <Route path="/splash3" element={<Page3 />} />
        <Route path="/splash4" element={<Page4 />} />
        <Route path="/splash5" element={<Page5 />} />
        <Route path="/splash6" element={<Page6 />} />
        <Route path="/splash7" element={<Page7 />} />
        {/* <Route path="/sign-up" element={<Signup />} /> */}
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
      </Routes>
    </>
  );
}
export default Pages;
