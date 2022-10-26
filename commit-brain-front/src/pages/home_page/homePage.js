import React, { useState, useEffect } from "react";
import s_getCommits from "../../services/commits.service";
import { ReactComponent as HomePageImg } from '../../assets/commits.svg';
import CommitCard from "./components/commitCard";
import Octocat from "../../assets/Octocat.png";
import './homePage.css';

const HomePage = () => {
    const [commits, setCommits] = useState([]);
    useEffect(() => {
        getCommit();
    }, []);

    const getCommit = async () => {
        const res = await s_getCommits();
        console.log(res);
        if (!res) {
            alert('There was an unexpected error, please try again');
        }
        setCommits(res.data);
    }
    return (
        <div style={{ padding: 50 }}>
            <h1>Commit Brain</h1><img style={{ height: 50 }} src={Octocat} alt='octo cat github' />
            <div className="row" style={{ width: '50%' }}>
                {commits.map((commit) => { return (<div className="col-md-6 mt-3" key={commit.sha}><CommitCard data={commit} /></div>) })}
            </div>
            <div className="hp-image">
                <HomePageImg />
            </div>
        </div>
    );
}

export default HomePage;