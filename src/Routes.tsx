import { Route, Routes as RoutesCustom } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RecoverPassword } from "./pages/RecoverPassword";
import { CreateAccount } from "./pages/CreateAccount";
import { CreatePassword } from "./pages/CreatePassword";
import { Briefing } from "./pages/Briefing";


const Routes = () => {
    return (
        <RoutesCustom>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/createpassword" element={<CreatePassword />} />
            <Route path="/briefing" element={<Briefing />} />
            {/* <Route path="/editCall/:id" element={<EditCall />} /> */}
        </RoutesCustom>
    )
}

export default Routes;