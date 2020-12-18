import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
function BlogInterior(props) {
  return (
    
      <div
        className="col-lg-3 col-md-6 col-sm-6 col-12"
        style={{ border: "1px #A4203A solid", borderRadius: "1em",margin:"1%" }}
      >
        <img
          src={"https://drive.google.com/uc?export=view&id="+props.photo}
          className="card"
          alt="..."
          style={{ width: "100%", height: "25rem", padding: "1%" }}
        ></img>
        <Link
          className="b_title"
          to={{
            pathname: props.uzanti,
            state: props.content,
          }}
          style={{ paddingLeft: "1%" }}
        >
          {props.title}
        </Link>
      </div>
    
  );
}

export default BlogInterior;
