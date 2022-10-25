import React from "react";
import Card from 'react-bootstrap/Card';

const CommitCard = ({ data }) => {
    return (
        <div>
            <Card>
                <Card.Header>Commit author: {data.author.login} <span><img className="avatar-img" src={data.author.avatar_url} alt='avatar' /></span></Card.Header>
                <Card.Body>
                    <Card.Title>{data.commit.message}</Card.Title>
                    <Card.Text>
                        Fecha:{data.commit.committer.date}
                    </Card.Text>
                    <a href={data.commit.url} target='_blanck'>Go to commit</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommitCard;