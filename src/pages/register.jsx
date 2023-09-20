import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="text-xm mt-5 text-center">Have an account? <Link  to="/login" className="font-bold text-blue-600">Sign in</Link></p>
        </AuthLayout>
    );
};

export default RegisterPage;