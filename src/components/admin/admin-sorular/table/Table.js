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
import html from 'react-inner-html';

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
  const [open, setOpen] = React.useState(false);
  const [isim, setIsim] = useState(props.question.isim);
  const [email, setEmail] = useState(props.question.email);
  const [soru, setSoru] = useState(props.question.soru);

  const [cevap, setCevap] = useState(props.question.cevap);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();
    db.collection("questions").doc(props.question.id).set(
      {
        answer: cevap,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <tbody>
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
                <label for="exampleFormControlTextarea1">Cevap</label>

                <CKEditor
                  editor={ClassicEditor}
                  data={cevap}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setCevap(data);
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
        <td>{props.question.isim}</td>
        <td>{props.question.email}</td>
        <td>{props.question.soru}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) =>
              db.collection("questions").doc(props.question.id).delete()
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Cevapla
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
