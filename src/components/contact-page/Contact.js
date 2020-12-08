import Header from "../header/Header"; 
import Client from "./avatar.jpg";
import Owner from "./narV5.jpg";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div>
            <Header
                subtitle="İletişim"
                title="İletişim"
                icon={<ContactPhoneIcon style={{fontSize:"35px"}}/>}
            />
            <div className="row" style={{ margin: "0%", padding: "5%",backgroundColor:"#FCF5F5" }}>
                <div className="col-8" style={{backgroundColor:"white",border:"1px #A4203A solid",borderRadius:"1rem",height:"auto"}}>
                    
                    <p className="message"><img className="contactor" src={Client} alt="" ></img>Adli sicil kaydı nasıl alınır veya Adli sicil kaydına nasıl bakılır?</p>
                </div>

                <hr
                    style={{height: "2px",backgroundColor: "#A42030",border: "none"}}
                />

                <div className="col-8" style={{backgroundColor:"white",border:"1px #A4203A solid",borderRadius:"1rem",height:"auto"}}>
                    
                    <p className="message"><img className="contactor" src={Owner} alt="" ></img>TC kimlik numaranız ve e-devlet şifreniz ile birlikte e-devlet sistemine giriş yaptıktan 
                    sonra arama butonunun olduğu sayfaya “adli sicil kaydı sorgulama” yazıldığı takdirde karşınıza çıkan sayfayı
                     “dosya indir” seçeneği ile indirebilirsiniz. Bu şekilde adli sicil kaydınıza ulaşmış olursunuz.</p>
                </div>
            </div>   
        </div>
    )
} 

export default Contact
