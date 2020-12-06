import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import db from "./../../../../firebase";
import firebase from "firebase";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function Table(props) {
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const classes = useStyles();
  const sil = () => {};

  const [heading, setHeading] = useState(props.service.heading);
  const [serviceContent, setServiceContent] = useState(props.service.heading);
  const [underServiceText1, setUnderServiceText1] = useState(
    props.service.underServiceText1
  );
  const [underServiceText2, setUnderServiceText2] = useState(
    props.service.underServiceText2
  );
  const [underServiceText3, setUnderServiceText3] = useState(
    props.service.underServiceText3
  );
  const [underServiceHead1, setUnderServiceHead1] = useState(
    props.service.underServiceHead1
  );
  const [underServiceHead2, setUnderServiceHead2] = useState(
    props.service.underServiceHead2
  );
  const [underServiceHead3, setUnderServiceHead3] = useState(
    props.service.underServiceHead3
  );

  const guncelle = (e) => {
    e.preventDefault();
    db.collection("services").doc(props.service.id).set(
      {
        heading: heading,
        service_content: serviceContent,
        under_service_head1: underServiceHead1,
        under_service_head2: underServiceHead2,
        under_service_head3: underServiceHead3,
        under_service_text1: underServiceText1,
        under_service_text2: underServiceText2,
        under_service_text3: underServiceText3,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpenUpdate(false);
  };
  return (
    <tbody>
      <Dialog
        fullScreen
        open={openUpdate}
        onClose={handleCloseUpdate}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseUpdate}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <h3 style={{ marginLeft: "5%" }}>Hizmet Sayfasini Guncelle</h3>
          </Toolbar>
        </AppBar>
        <div className="col-12 hizmetlerimiz-pop">
          <div
            className="container"
            style={{ marginTop: "1%", marginBottom: "2%" }}
          >
            <form>
              <div class="form-group">
                <label for="exampleFormControlFile1">Fotograf Ekle</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Baslik Ekle</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
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
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setServiceContent(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Hizmet Alt Yazisi 1 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={underServiceHead1}
                  onChange={(event) => setUnderServiceHead1(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Hizmet Alt Yazisi 1
                </label>
            
                <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText1}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText1(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Hizmet Alt Yazisi 2 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={underServiceHead2}
                  onChange={(event) => setUnderServiceHead2(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Hizmet Alt Yazisi 2
                </label>
                  <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText2}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText2(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Hizmet Alt Yazisi 3 Baslik Ekle
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={underServiceHead3}
                  onChange={(event) => setUnderServiceHead3(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Hizmet Alt Yazisi 3
                </label>
                  <CKEditor
                  editor={ClassicEditor}
                  data={underServiceText3}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText3(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={guncelle}
              >
                Guncelle
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <tr>
        <th scope="row">{props.service.index}</th>
        <td>{props.service.heading}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) =>
              db.collection("services").doc(props.service.id).delete()
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpenUpdate}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
