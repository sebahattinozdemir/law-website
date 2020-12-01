import React from 'react'
import "./Hakkimizda.css"
function hakkimizda() {
    return (
        <div className="hakkimizda" style={{height:'100%',border:"2px solid transparent"}}>
            <h1 style={{ textAlign: "center",color:"white" }}> Hakkimizda Sayfasi Guncelleme</h1>
            <div className="container">
            <div className="hakkimizda-main-content">
              <form style={{color:'white'}}>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Hakkimizda Ana Icerik Duzenle
                  </label>
                  <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Hakkimizda Yan Icerik Duzenle
                  </label>
                  <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea2">Vizyonumuz Duzenle</label>
                  <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea2"
                    rows="6"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea3">Misyonumuz Duzenle</label>
                  <textarea style={{maxWidth:"100%",minWidth:"100%",maxHeight:"15vh",minHeight:"15vh",overflowY:'scroll'}}
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    rows="6"
                  ></textarea>
                </div>
                <button type ='submit' className="btn btn-primary mt-2">Guncelle</button>
              </form>
            </div>
            </div>
           
        </div>
    )
}

export default hakkimizda
