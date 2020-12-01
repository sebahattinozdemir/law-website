import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "./Iletisim.css"
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color:"white"
    },
  },
}));
function Iletisim() {
  const classes = useStyles();
  const guncelle = ()=>{

  }
  return (
    <div style={{ height: "100vh",border:"2px solid transparent" }} className="iletisim">
      <h1 style={{ textAlign: "center",color:'white' }}>Iletisim Bilgilerini Guncelle</h1>

      <div className="container">
        <h2 style={{color:'white'}}>Iletisim Bilgileri</h2>
        <table class="table" style={{color:'white'}}>
          <thead>
            <tr style={{color:'white'}}>
              <th scope="col">#</th>
              <th scope="col">Iletisim Adi </th>
              <th scope="col">Deger </th>
              <th scope="col">Guncellenecek Deger </th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{color:'white'}}>
              <th style={{paddingTop:"2%"}} scope="row">1</th>
              <td style={{paddingTop:"2%"}}>Facebook</td>
              <td style={{paddingTop:"2%"}}>Facebook Adress</td>
              <td>
              <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Facebook Adres" inputProps={{ 'aria-label': 'description' }} />
              </form>
              </td>
              <td style={{paddingTop:"2%"}}>
                <button type="submit" className="btn btn-primary" onClick={guncelle}>Guncelle</button>
              </td>
            </tr>
            <tr>
              <th style={{paddingTop:"2%"}} scope="row">2</th>
              <td style={{paddingTop:"2%"}}>WhatsApp</td>
              <td style={{paddingTop:"2%"}}>WhatsApp Adress</td>
              <td>
              <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="WhatsApp Adres" inputProps={{ 'aria-label': 'description' }} />
              </form>
              </td>
              <td style={{paddingTop:"2%"}}>
                <button type="submit" className="btn btn-primary" onClick={guncelle}>Guncelle</button>
              </td>
            </tr>
            <tr>
              <th style={{paddingTop:"2%"}} scope="row">3</th>
              <td style={{paddingTop:"2%"}}>Telefon</td>
              <td style={{paddingTop:"2%"}}>Telefon Adress</td>
              <td>
              <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Telefon Adress" inputProps={{ 'aria-label': 'description' }} />
              </form>
              </td>
              <td style={{paddingTop:"2%"}}>
                <button type="submit" className="btn btn-primary" onClick={guncelle}>Guncelle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Iletisim;
