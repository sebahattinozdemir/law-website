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
  const [referenceUrl, setReferenceUrl] = useState(
    props.reference.referenceUrl
  );
  const [referenceName, setReferenceName] = useState(
    props.reference.referenceName
  );
  const [referencePosition, setReferencePosition] = useState(
    props.reference.referencePosition
  );
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();
    db.collection("references").doc(props.reference.id).set(
      {
        reference_url:referenceUrl,
        reference_name: referenceName,
        reference_position: referencePosition,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
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
            <h3 style={{ marginLeft: "5%" }}>Referans Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 referans-pop">
          <div className="container" style={{ marginTop: "10%" }}>
            <form>
              <div class="form-group">
              <label for="exampleFormControlInput1">Referans Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Url"
                  value={referenceUrl}
                  onChange={(event) => setReferenceUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Referans Ismi</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Referans Ismi"
                  value={referenceName}
                  onChange={(event) => setReferenceName(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Referans Pozisyonu</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Referans Pozisyonu"
                  value={referencePosition}
                  onChange={(event) => setReferencePosition(event.target.value)}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={guncelle}
              >
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.reference.referenceName}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) =>
              db.collection("references").doc(props.reference.id).delete()
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
