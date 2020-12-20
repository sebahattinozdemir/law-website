import "./Basic.css";
import Player from "../player/Player";
import React from "react";

function Basic() {
  return (
    <div className="row" style={{ margin: "0%", padding: "1%" }}>
      <br />
      <div className="col-md-6 col-sm-6 col-12">
        <p className="card-basic">
          {" "}
          NAR Consulting is a consultancy firm based in Ankara with partners and lawyers in general, except in Turkey and abroad within the domestic and international airports Consult offers commercial and legal advisory services. Our Consultancy office, which follows current legal and commercial issues; The Constitutional Court reviews the current precedent decisions, commercial and financial changes made by the Court of Cassation and the Council of State in the light of scientific studies with a revisionist perspective and puts them into practice. Our office is based on the principles of mutual trust between client-proxy, client-consultant, respect for human and confidentiality, and in this context, our office has been in continuous development in order to increase and maximize the quality of the service we provide in accordance with changing time conditions.
        </p>
        <br />
       
      </div>

      <div className="col-md-6 col-sm-6 col-12">
        <Player />
      </div>
    </div>
  );
}
export default Basic;
