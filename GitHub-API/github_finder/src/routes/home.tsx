
import Search from "../components/search";
import { useState } from "react";
import { UserProps } from "../types/user";



const home = () => {

    const [user, setUser] = useState<UserProps | null>(null);
    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        const { avatar_url, login, location, followers, following } = data;
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUser(userData);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <p>{user.login}</p>}
        </div>
    );
};

export default home