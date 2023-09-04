import { useContext } from "react";
import { UserContext } from "../context";

const Login = () => {
    const ctx = useContext(UserContext);
    return (
        <h1>Login<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
};

export default Login;