import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp/SignUp"

function Pages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>

        </>
    )
}

export default Pages