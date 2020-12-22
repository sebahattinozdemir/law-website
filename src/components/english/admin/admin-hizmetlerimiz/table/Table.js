import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import db from "./../../../../../firebase";
import firebase from "firebase";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Table.css";
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

  const [urlName, setUrl] = useState(props.service.url);
  const [headingName, setHeading] = useState(props.service.heading);
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

  const handleClick = () => {
    setOpenUpdate(true);
  };
  const handleClose = () => {
    setOpenUpdate(false);
  };
  const classes = useStyles();

  

  const guncelle = (e) => {
    e.preventDefault();

    db.collection("enServices").doc(props.service.id).set(
      {
        url: urlName,
        heading: headingName,
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
                <label for="exampleFormControlInput1">Foto Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={urlName}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Baslik Ekle</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={headingName}
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
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText1(data);
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
                  onChange={(editor) => {
                    const data = editor.getData();
                    setUnderServiceText2(data);
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
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUnderServiceText3(data);
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
        <th scope="row">{props.index + 1}</th>
        <td>{props.service.heading}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) =>
              db.collection("enServices").doc(props.service.id).delete()
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClick}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
