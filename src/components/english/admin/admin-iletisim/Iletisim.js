import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Iletisim.css";
import Input from "@material-ui/core/Input";
import db from "./../../../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "white",
    },
  },
}));
function Iletisim() {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);
  const [facebook, setFacebook] = useState("");
  const [telefon, setTelefon] = useState("");
  const [whatsapp, setWhatsapp] = useState("");


  useEffect(() => {
    // fires once when the app loads
    db.collection("enContacts").onSnapshot((snapshot) => {
      setContacts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          facebook: doc.data().facebook,
          whatsapp: doc.data().whatsapp,
          telefon: doc.data().telefon,
          gmail: doc.data().gmail,
        }))
      );
    });
  }, []);

  const facebookGuncelle = (e) => {
    e.preventDefault();
    db.collection("enContacts").doc(contacts[0].id).set(
      {
        facebook: facebook,
      },
      { merge: true }
    );
  };
  const telefonGuncelle = (e) => {
    e.preventDefault();
    db.collection("enContacts").doc(contacts[0].id).set(
      {
        telefon: telefon,
      },
      { merge: true }
    );
  };
  const whatsappGuncelle = (e) => {
    e.preventDefault();
    db.collection("enContacts").doc(contacts[0].id).set(
      {
        whatsapp: whatsapp,
      },
      { merge: true }
    );
  };
  return (
    <div
      style={{ height: "100vh", border: "2px solid transparent" }}
      className="iletisim"
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        Iletisim Bilgilerini Guncelle
      </h1>

      <div className="container">
        <h2 style={{ color: "white" }}>Iletisim Bilgileri</h2>
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr style={{ color: "white" }}>
              <th scope="col">#</th>
              <th scope="col">Iletisim Adi </th>
              <th scope="col">Deger </th>
              <th scope="col">Guncellenecek Deger </th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "white" }}>
              <th style={{ paddingTop: "2%" }} scope="row">
                1
              </th>
              <td style={{ paddingTop: "2%" }}>Facebook</td>
              <td style={{ paddingTop: "2%" }}>
                {contacts.map((contact) => contact.facebook)}
              </td>
              <td>
                <form className={classes.root} noValidate autoComplete="off">
                  <Input
                    placeholder="Facebook Adres"
                    inputProps={{ "aria-label": "description" }}
                    value={facebook}
                    onChange={(event) => setFacebook(event.target.value)}
                  />
                </form>
              </td>
              <td style={{ paddingTop: "2%" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={facebookGuncelle}
                >
                  Guncelle
                </button>
              </td>
            </tr>
            <tr>
              <th style={{ paddingTop: "2%" }} scope="row">
                2
              </th>
              <td style={{ paddingTop: "2%" }}>WhatsApp</td>
              <td style={{ paddingTop: "2%" }}>
                {contacts.map((contact) => contact.whatsapp)}
              </td>
              <td>
                <form className={classes.root} noValidate autoComplete="off">
                  <Input
                    placeholder="WhatsApp Adres"
                    inputProps={{ "aria-label": "description" }}
                    value={whatsapp}
                    onChange={(event) => setWhatsapp(event.target.value)}
                  />
                </form>
              </td>
              <td style={{ paddingTop: "2%" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={whatsappGuncelle}
                >
                  Guncelle
                </button>
              </td>
            </tr>
            <tr>
              <th style={{ paddingTop: "2%" }} scope="row">
                3
              </th>
              <td style={{ paddingTop: "2%" }}>Telefon</td>
              <td style={{ paddingTop: "2%" }}>
                {" "}
                {contacts.map((contact) => contact.telefon)}
              </td>
              <td>
                <form className={classes.root} noValidate autoComplete="off">
                  <Input
                    placeholder="Telefon Adress"
                    inputProps={{ "aria-label": "description" }}
                    value={telefon}
                    onChange={(event) => setTelefon(event.target.value)}
                  />
                </form>
              </td>
              <td style={{ paddingTop: "2%" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={telefonGuncelle}
                >
                  Guncelle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Iletisim;
