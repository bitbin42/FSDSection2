import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  const { title, domain, photoPath, startDate, endDate, description, location, price, organizerName } = props.location.state.event;
  let pic=(photoPath.length>0)?photoPath:user;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={pic} alt="user" />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{domain}  ${price}</div>
          <div className="description">Start: {startDate} End: {endDate}</div>
          <div className="description">Location: {location}</div>
          <div className="description">{description}</div>
          <div className="description">Organizer: {organizerName}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
