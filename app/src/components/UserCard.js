import React from "react";

const UserCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Location: {props.location}</p>
      <img src={props.avatar_url} />
      <h3>{props.name}'s Followers:</h3>
      {props.followers.map(person => {
        return (
          <div className="follower ">
            <p>Username: {person.login}</p>
            <p>URL: {person.html_url}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
