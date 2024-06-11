type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setuserName] = useState("");


    return (
        <div>
            <h2>Busque por um usuario:</h2>
            <p>conheça seus melhores retositorios</p>
            <div>
                <input type="text" placeholder="Digite o nome do usuario" onChange={(e) => setuserName(e.target.value)} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search