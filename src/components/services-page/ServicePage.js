import React from "react";
import Altheader from "../altheader/Altheader";
import WorkIcon from "@material-ui/icons/Work";
import "./Calisma.css";
import html from 'react-inner-html';

function ServicePage(props) {
  return (
    <div>
      <Altheader
        subtitle="Hizmetlerimiz"
        title={props.location.state.heading}
        alttitle={props.location.state.heading}
        icon={<WorkIcon style={{ fontSize: "35px" }} />}
      />

      <div className="row" style={{ margin: "0%", padding: "1%" }}>
        <div className="col-12" style={{ marginLeft: "1%", marginRight: "1%" }}>
          <p
            class="card-text1"  {...html(props.location.state.serviceContent)}
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <h3 style={{ color: "orange" }}>
            <WorkIcon style={{ fontSize: "x-large", color: "black" }} />{" "}
            {props.location.state.underServiceHead1}
          </h3>
          <p  class="card-text1"  {...html(props.location.state.underServiceText1)}/>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <h3 style={{ color: "orange" }}>
            <WorkIcon style={{ fontSize: "x-large", color: "black" }} />{" "}
            {props.location.state.underServiceHead2}
          </h3>
          <p class="card-text1"  {...html(props.location.state.underServiceText2)}/>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <h3 style={{ color: "orange" }}>
            <WorkIcon style={{ fontSize: "x-large", color: "black" }} />{" "}
            {props.location.state.underServiceHead3}
          </h3>
          <p class="card-text1"  {...html(props.location.state.underServiceText3)}/>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
