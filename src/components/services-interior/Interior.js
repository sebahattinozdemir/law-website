import "./Interior.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";

function Interior(props) {

 
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6 col-12"
      style={{ float: "left", paddingBottom: "1%" }}
    >
      <img
        src={props.photo}
        className="card_int"
        alt="..."
        style={{ width: "100%", height: "25rem", padding: "1%" }}
      ></img>

      <Link
        className="h_title"
        to={{ 
            pathname: props.uzanti, 
            state: props.content 
           }}
        style={{ padding: "1%" }}
      >
        {props.title}
      </Link>
      <br />

      <Link className="an" to={props.divert} style={{ padding: "1%" }}>
        <ArrowForwardIcon style={{ color: "#A4203A" }} />
        {props.more}
      </Link>
      <p style={{ padding: "1%", textAlign: "justify" }}>{props.explain}</p>
    </div>
  );
}

export default Interior;
