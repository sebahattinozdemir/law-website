import React, { useState, useEffect } from "react";
import "./Questions.css";
import Table from "./table/Table"
import db from "./../../../../firebase";
import firebase from 'firebase'

function Questions() {

  const [questions, setQuestions] = useState([])
 
  useEffect(() => {
    // fires once when the app loads 
    db.collection('enQuestions').orderBy('timeStamp','desc').onSnapshot(snapshot =>{
      setQuestions(snapshot.docs.map(doc =>(
    { 
      id:doc.id,
      isim:doc.data().name,
      email: doc.data().email,
      soru:doc.data().question,
      cevap:doc.data().answer
    })))
    
  })

  console.log(questions)
  }, [])

  return (
    <div
      className="Questions"
      style={{ height: "100vh", border: "2px solid transparent" }}
    >
     
      <h1 style={{ textAlign: "center", color: "white" }}>
        Sorular Sayfasi
      </h1>

      <div className="container">
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Isim</th>
              <th scope="col">Mail</th>
              <th scope="col">Soru</th>
              <th scope="col">Sil</th>
              <th scope="col">Cevapla</th>
            </tr>
          </thead>

          {questions.map((question,index) => ( <Table key={question.id} question = {question} index={index} />))}
          
        </table>
      </div>
    </div>
  );
}

export default Questions;
