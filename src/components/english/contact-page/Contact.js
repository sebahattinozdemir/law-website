import Header from "../header/Header";
import Client from "./avatar.jpg";
import Owner from "./narV5.jpg";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import React, { useEffect, useState } from "react";
import db from "./../../../firebase";
import firebase from "firebase";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import "./Contact.css";
import html from "react-inner-html";

function Contact() {
  const [questions, setQuestions] = useState([]);
  const [isim, setIsim] = useState("");
  const [mail, setMail] = useState("");
  const [soru, setSoru] = useState("");

  useEffect(() => {
    // fires once when the app loads
    db.collection("questions")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setQuestions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            isim: doc.data().name,
            email: doc.data().email,
            soru: doc.data().question,
            cevap: doc.data().answer,
          }))
        );
      });

    console.log(questions);
  }, []);

  const addQuestion = (event) => {
    event.preventDefault();
    db.collection("questions").add({
      name: isim,
      email: mail,
      question: soru,
      answer: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setIsim("");
    setMail("");
    setSoru("");
  };
  return (
    <div>
      <Header
        subtitle="İletişim"
        title="İletişim"
        icon={<ContactPhoneIcon style={{ fontSize: "35px" }} />}
      />

      <div
        className="row"
        style={{
          margin: "0%",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "1%",
          backgroundColor: "#FCF5F5",
        }}
      >

        {questions.map((question, index) => (

            question.cevap !=="" ? (
                <div className="row" style={{marginTop:'1%',backgroundColor:'#333'}}>
                <div
                  className="row"
                  style={{
                    backgroundColor: "white",
                    border: "1px #A4203A solid",
                    borderRadius: "1rem",
                    padding: "0%",
                    margin: "0%",
                  }}
                >
                  <b
                    style={{ marginLeft: "5%", marginTop: ".5%", display: "block" }}
                  >
                    {question.isim}
                  </b>
                  <p className="message">
                    <img
                      className="contactor"
                      src={Client}
                      alt=""
                      style={{ marginRight: "2%", padding: "0%" }}
                    ></img>
                    <label style={{ marginTop: "1%", color: "black" }}>
                      {question.soru}
                    </label>
                  </p>
                </div>
                <ImportExportIcon
                  style={{ fontSize: "32px", margin: "0%", padding: "0%",color:'white' }}
                />
                <div
                  className="row"
                  style={{
                    backgroundColor: "white",
                    border: "1px #A4203A solid",
                    borderRadius: "1rem",
                    padding: "0%",
                    margin: "0%",
                  }}
                >
                  <b
                    style={{ marginLeft: "5%", marginTop: ".5%", display: "block" }}
                  >
                    Nar Hukuk
                  </b>
                  <p className="message">
                    <img
                      className="contactor"
                      src={Owner}
                      alt=""
                      style={{ marginRight: "2%", marginTop: "1%", padding: "0%" }}
                    ></img>
                    <label
                      {...html(question.cevap)}
                      style={{ marginTop: "1%", color: "black" }}
                    ></label>
                  </p>
                </div>
              </div>
            ) : null
  
        ))}



        <div className="row" style={{ marginTop: "5%" }}>
          <p
            style={{ fontWeight: "bolder", fontSize: "22px", marginLeft: "3%" }}
          >
            Bir Soru Sorun
          </p>
          <form style={{ marginLeft: "2%" }}>
            <div class="form-row">
              <div class="form-group col-md-4">
                <input
                  type="text"
                  class="form-control"
                  required
                  id="inputAddress"
                  placeholder="Isim*"
                  value={isim}
                  onChange={(event) => setIsim(event.target.value)}
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  required
                  placeholder="Email*"
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                />
              </div>
              <div class="form-group col-md-8">
                <textarea
                  class="form-control"
                  required
                  placeholder="Sorunuz*"
                  style={{
                    minHeight: "20%",
                    maxHeight: "20%",
                    resize: "none",
                    overflowY: "scroll",
                  
                  }}
                  value={soru}
                  onChange={(event) => setSoru(event.target.value)}
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <button type="submit" class="btn btn-primary" onClick={addQuestion}>
                  Soru Sor
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
