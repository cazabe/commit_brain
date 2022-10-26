import React from "react";
import Card from 'react-bootstrap/Card';

const CommitCard = ({ data }) => {
    const date = data.commit.committer.date.split('T')
    console.log(date);
    return (
        <div>
            <Card>
                <Card.Header><strong>Commit author:</strong> {data.author.login} <span><img className="avatar-img" src={data.author.avatar_url} alt='avatar' /></span></Card.Header>
                <Card.Body>
                    <Card.Title>{data.commit.message}</Card.Title>
                    <Card.Text>
                        <strong>Fecha: </strong> {data.commit.committer.date.split('T')[0]}
                    </Card.Text>
                    <div className="action-btn">
                        <a href={data.commit.url} target='_blanck'><strong>Go to commit</strong></a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommitCard;