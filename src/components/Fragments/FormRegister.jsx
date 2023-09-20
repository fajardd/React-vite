import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () =>{
    return(
        <form action="">
            <InputForm 
                label="Fullname" 
                type="text" 
                placeholder="insert fullname" 
                name="fullname"
            />
            <InputForm 
                label="Email" 
                type="email" 
                placeholder="example.com" 
                name="email"
            />
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="****" 
                name="password"
            />
            <InputForm 
                label="Confirm Password" 
                type="password" 
                placeholder="****" 
                name="confirmPassword"
            />
            <Button 
                classname="bg-blue-600 w-full">
                Login
            </Button>
        </form>
    );
};

export default FormRegister;
