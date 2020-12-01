import React from "react";
import "./Blog.css"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

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

function Blog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };


  const kaydet = (e)=>{
    e.preventDefault();
  }

  const sil = ()=>{

  }

  const guncelle =(e)=>{
      e.preventDefault();
  }

  
  return (
    <div className="blog" style={{border:"2px solid transparent"}}>
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
            <h3 style={{marginLeft:"5%"}}>Blog Sayfasi Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 blog-pop">
          <div className="container" style={{ marginTop: "10%" }}>
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
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Blog Yazisi Ekle
                </label>
                <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
              </div>
              <button className="btn btn-primary" type="submit" onClick={kaydet} >Kaydet</button>
            </form>
          </div>
        </div>
      </Dialog>

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
            <h3 style={{marginLeft:"5%"}}>Blog Sayfasini Guncelle</h3>
          </Toolbar>
        </AppBar>
        <div className="col-12 blog-pop">
          <div className="container" style={{ marginTop: "10%" }}>
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
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Blog Yazisi Ekle
                </label>
                <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
              </div>
              <button className="btn btn-primary" type="submit" onClick={guncelle} >Guncelle</button>
            </form>
          </div>
        </div>
      </Dialog>
      <h1 style={{ textAlign: "center",color:"white" }}> Blog Sayfasi Guncelleme</h1>
      <div
        class="dropdown btn btn-outline"
        style={{
          fontSize: "16px",
          display: "block",
          width: "20%",
        }}
      ></div>

      <div className="container">
        <h2 style={{color:"white"}}>Bloglar</h2>
        <button className="btn btn-primary" onClick={handleClickOpen}>
          Blog Sayfasi Ekle
        </button>
        <table class="table" style={{color:"white"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Blog Sayfa Adi</th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <button className="btn btn-danger" onClick={sil} >Sil</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={handleClickOpenUpdate} >Guncelle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blog;
