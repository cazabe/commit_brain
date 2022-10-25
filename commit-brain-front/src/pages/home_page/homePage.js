import React, { useState, useEffect } from "react";
import s_getCommits from "../../services/commits.service";
import { ReactComponent as HomePageImg } from '../../assets/commits.svg';
import CommitCard from "./components/commitCard";

const HomePage = () => {
    const [commits, setCommits] = useState([]);
    useEffect(() => {
        getCommit();
    }, []);

    const getCommit = async () => {
        const res = await s_getCommits();
        console.log('Res en la funcion', res.data);
        if (!res) {
            alert('There was an unexpexted error, please try again')
        }
        setCommits(res.data);
    }
    return (
        <div>
            <h1>Commmit Brain</h1>
            <div className="row col-md-6">
                {commits.map((commit) => { return (<div className="col-md-4"><CommitCard data={commit} /></div>) })}
            </div>

        </div>
    );
}

export default HomePage;