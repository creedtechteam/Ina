import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp/SignUp";
import Page1 from "../flashscreen/Page1";
import Page2 from "../flashscreen/Page2";
import Page3 from "../flashscreen/Page3";
import Page4 from "../flashscreen/Page4";
import Page5 from "../flashscreen/Page5";
import AnimatedButton from "../Components/AnimatedButton";
import Page6 from "../flashscreen/Page6";
import Page7 from "../flashscreen/Page7";
import SignIn from "../SigIn/SignIn";
import Account from "./Journal/Account";
import UserCircles from "./Journal/Resources/UserCircles";
import NewJournal from "./Journal/Resources/NewJournal";
import Mint from "./Journal/Resources/Mint";

import Circle from "../circle-component/Circle";
import ChooseStyle from "../Choose/ChooseStyle";
import Profile from "../profile/Profile";


import UserStreak from "./Journal/Resources/UserStreak";
import Error from "./Error";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/account" element={<Account />} />
        {/* <Route path="/newjournal" element={<NewJournal />} /> */}
        <Route path="/users" element={<Profile />} />

        <Route path="/circle" element={<Circle />} />
        <Route path="/chooseStyle" element={<ChooseStyle />} />

        <Route path="/userstreak" element={<UserStreak />} />
        <Route path="/newjournal" element={<NewJournal />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/choose" element={<AnimatedButton />} />
        <Route path="/splash" element={<Page1 />} />
        <Route path="/splash2" element={<Page2 />} />
        <Route path="/splash3" element={<Page3 />} />
        <Route path="/splash4" element={<Page4 />} />
        <Route path="/splash5" element={<Page5 />} />
        <Route path="/splash6" element={<Page6 />} />
        <Route path="/splash7" element={<Page7 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default Pages;
