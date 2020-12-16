import React, { useState, useEffect } from "react";
import "./Hizmetlerimiz.css";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import db from "./../../../firebase";
import Table from "./table/Table";
import firebase from "firebase";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Hizmetlerimiz() {
  const [open, setOpen] = React.useState(false);

  const [services, setServices] = useState([]);

  const [heading, setHeading] = useState("");
  const [url, setUrl] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [underServiceText1, setUnderServiceText1] = useState("");
  const [underServiceText2, setUnderServiceText2] = useState("");
  const [underServiceText3, setUnderServiceText3] = useState("");
  const [underServiceHead1, setUnderServiceHead1] = useState("");
  const [underServiceHead2, setUnderServiceHead2] = useState("");
  const [underServiceHead3, setUnderServiceHead3] = useState("");

  useEffect(() => {
    // fires once when the app loads
    db.collection("services")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:doc.data().url,
            heading: doc.data().heading,
            serviceContent: doc.data().service_content,
            underServiceHead1: doc.data().under_service_head1,
            underServiceHead2: doc.data().under_service_head2,
            underServiceHead3: doc.data().under_service_head3,
            underServiceText1: doc.data().under_service_text1,
            underServiceText2: doc.data().under_service_text2,
            underServiceText3: doc.data().under_service_text3,
          }))
        );
      });

    console.log(services);
  }, []);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const kaydet = (e) => {

    e.preventDefault();
    
    db.collection("services").add({
      url:url,
      heading: heading,
      service_content: serviceContent,
      under_service_head1: underServiceHead1,
      under_service_head2: underServiceHead2,
      under_service_head3: underServiceHead3,
      under_service_text1: underServiceText1,
      under_service_text2: underServiceText2,
      under_service_text3: underServiceText3,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setHeading("");
    setUrl("");
    setServiceContent("");
    setUnderServiceHead1("");
    setUnderServiceHead2("");
    setUnderServiceHead3("");
    setUnderServiceText1("");
    setUnderServiceText2("");
    setUnderServiceText3("");

    setOpen(false);
  };

  return (
    <div
      style={{ height: "100vh", border: "2px solid transparent" }}
      className="hizmetlerimiz"
    >
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <h3 style={{ marginLeft: "5%" }}>Hizmet Sayfasi Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 hizmetlerimiz-pop">
          <div
            className="container"
            style={{ marginTop: "1%", marginBottom: "2%" }}
          >
            <form>
              <div class="form-group">
              <label for="exampleFormControlInput1">Foto Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput2">Baslik Ekle</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Sayfa Adi"
                  value={heading}
                  onChange={(event) => setHeading(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Hizmet Yazisi Ekle
                </label>

                <CKEditor
                  editor={ClassicEditor}
                  data={serviceContent}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setServiceContent(data);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput3">
                  Hizmet Alt Yazisi 1 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Sayfa Adi"
                  value={underServiceHead1}
                  onChange={(event) => setUnderServiceHead1(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea8">
                  Hizmet Alt Yazisi 1
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText1}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText1(data);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput4">
                  Hizmet Alt Yazisi 2 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput4"
                  placeholder="Sayfa Adi"
                  value={underServiceHead2}
                  onChange={(event) => setUnderServiceHead2(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea5">
                  Hizmet Alt Yazisi 2
                </label>

                <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText2}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText2(data);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput6">
                  Hizmet Alt Yazisi 3 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput6"
                  placeholder="Sayfa Adi"
                  value={underServiceHead3}
                  onChange={(event) => setUnderServiceHead3(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea7">
                  Hizmet Alt Yazisi 3
                </label>

                <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText3}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText3(data);
                  }}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={kaydet}
              >
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <h1 style={{ textAlign: "center", color: "white" }}>
        Hizmetler Sayfasi Guncelleme
      </h1>

      <div
        class="dropdown btn btn-outline"
        style={{
          fontSize: "16px",
          display: "block",
          width: "20%",
        }}
      ></div>

      <div className="container">
        <h2 style={{ color: "white" }}>Hizmetlerimiz</h2>
        <button
          style={{ color: "white" }}
          className="btn btn-primary"
          onClick={handleClickOpen}
        >
          Hizmet Sayfasi Ekle
        </button>

        <table style={{ color: "white" }} class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hizmet Sayfa Adi</th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {services.map((service,index) => (
            <Table key={service.id} service={service} index = {index} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Hizmetlerimiz;
