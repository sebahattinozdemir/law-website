import React, { useState, useEffect } from "react";
import "./Referanslar.css";
import Table from "./table/Table"
import db from "./../../../../firebase";
import firebase from 'firebase'

function Referanslar() {

  const [references, setReferences] = useState([])
  const [referenceUrl, setReferenceUrl] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [referencePosition, setReferencePosition] = useState("");
  
  useEffect(() => {
    // fires once when the app loads 
    db.collection('enReferences').orderBy('timeStamp','desc').onSnapshot(snapshot =>{
      setReferences(snapshot.docs.map(doc =>(
    { 
      id:doc.id,
      referenceUrl:doc.data().reference_url,
      referenceName: doc.data().reference_name,
      referencePosition:doc.data().reference_position,
    })))
    
  })

  console.log(references)
  }, [])

  const addReference = (event)=>{
    event.preventDefault();
    db.collection('enReferences').add({
      reference_url:referenceUrl,
      reference_name:referenceName,
      reference_position:referencePosition,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
   setReferenceName("");
   setReferencePosition("");
   setReferenceUrl("");
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
          <label for="exampleFormControlInput1">Referans Foto Url</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="url"
              value = {referenceUrl}
              onChange={(event)=>{setReferenceUrl(event.target.value)}}
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

          {references.map((reference,index) => ( <Table key={reference.id} reference = {reference} index={index} />))}
          
        </table>
      </div>
    </div>
  );
}

export default Referanslar;
