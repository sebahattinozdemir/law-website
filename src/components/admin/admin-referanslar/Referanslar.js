import React, { useState, useEffect } from "react";
import "./Referanslar.css";
import Table from "./table/Table"
import db from "./../../../firebase";
import firebase from 'firebase'

function Referanslar() {

  const [references, setReferences] = useState([])
  const [referenceName, setReferenceName] = useState("");
  const [referencePosition, setReferencePosition] = useState("");
  
  useEffect(() => {
    // fires once when the app loads 
    db.collection('references').orderBy('timeStamp','desc').onSnapshot(snapshot =>{
      setReferences(snapshot.docs.map(doc =>(
    { 
      id:doc.id, 
      referenceName: doc.data().reference_name,
      referencePosition:doc.data().reference_position,
    })))
    
  })

  console.log(references)
  }, [])

  const addReference = (event)=>{
    event.preventDefault();
    db.collection('references').add({
      reference_name:referenceName,
      reference_position:referencePosition,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
   
  }

  return (
    <div
      className="referanslar"
      style={{ height: "100vh", border: "2px solid transparent" }}
    >
     
      <h1 style={{ textAlign: "center", color: "white" }}>
        Referans Sayfasi Guncelleme
      </h1>

      <div className="container">
        <h2 style={{ color: "white" }}>Referans Ekle</h2>
        <form style={{ color: "white" }}>
          <div class="form-group">
            <label for="exampleFormControlFile1">Referans Logo</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Referansin Ismi</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="BMC / Berati Sahin"
              value = {referenceName}
              onChange={(event)=>{setReferenceName(event.target.value)}}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Referansin Pozisyonu</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Bilgisayar Muhendisi"
              value = {referencePosition}
              onChange={(event)=>{setReferencePosition(event.target.value)}}
            />
          </div>
          <button className="btn btn-primary" onClick={addReference} > Referans Ekle</button>
        </form>

        <h2 style={{ color: "white" }}>Referans Sil</h2>
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Referance Adi </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {references.map((reference) => ( <Table key={reference.id} reference = {reference}/>))}
          
        </table>
      </div>
    </div>
  );
}

export default Referanslar;
