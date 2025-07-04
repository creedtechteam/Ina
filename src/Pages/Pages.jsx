import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp/SignUp"
import Journal from "./Journal/Journal"

function Pages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/journal" element={<Journal />} />
            </Routes>

        </>
    )
}

export default Pages