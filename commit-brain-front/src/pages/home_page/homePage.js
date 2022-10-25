import React, { useState, useEffect } from "react";
import s_getCommits from "../../services/commits.service";


const HomePage = () => {
    const [commits, setCommits] = useState([]);
    useEffect(() => {
        setCommits(s_getCommits());
    }, [])
    return (
        <>

        </>
    );
}

export default HomePage;