import { Redirect } from "react-router-dom";

const Home = () => {
    const loggedIn = false;

    if(!loggedIn) {
        return <Redirect to={'/login'} />;
    }
    return null;
};

export default Home;