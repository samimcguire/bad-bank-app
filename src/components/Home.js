import { useContext } from "react";
import { UserContext } from "../context";


const Home = () => {
    const ctx = useContext(UserContext);
    return (
        <h1>Home<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Home;