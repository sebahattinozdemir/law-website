import "./Neden.css";
import FlightRoundedIcon from '@material-ui/icons/FlightRounded';
import HowToRegRoundedIcon from '@material-ui/icons/HowToRegRounded';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF"}}>
                   <h3 style={{color:"orange",marginLeft:"1%"}}>Neden Cebeci Göç ve Danışmanlık Bürosu</h3>
                   <br/>
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><FlightRoundedIcon style={{color:"orange",fontSize:"larger"}}/> Bütün personellerimiz alanında uzman ve eğitimlidir, şirketimizde beş ayrı dil akıcı bir şekilde konuşulmakta ve yazılmaktadır.</p>
                        <br/>
                   </div>
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><HowToRegRoundedIcon style={{color:"orange",fontSize:"larger"}}/> Şirket kültürüne sahibiz, çalışanlarımıza eşit davranır, onların kişisel/mesleki eğitimini geliştirmek için özel eğitimler veririz.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><BookmarksRoundedIcon style={{color:"orange",fontSize:"larger"}}/> Uyguladığımız her karar bir iş gerekçesine bağlıdır. İşimiz gereği daha fazla öğrenir ve bu öğrendiklerimizi müşterilerimiz için uygularız.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><AccountBalanceRoundedIcon style={{color:"orange",fontSize:"larger"}}/> Kurallarımız ve prosedürlerimiz bellidir. Bu yüzden bizimle çalışanlar daima bir adım öndedir.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><CreateRoundedIcon style={{color:"orange",fontSize:"larger"}}/> Açık ve Net Olarak belirlenmiş kurallarımız vardır. Kuralların dışına çıkmayız, Deneyimli personel ve departmanlar sayesinde hızlı karar alır ve uygularız.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-neden"><EventAvailableRoundedIcon style={{color:"orange",fontSize:"larger"}}/> İşi tanımı kurgulanmıştır, ne yapacağımız, görev ve sorumluluklarımızın bilincinde çalışırız, Büyük projeleri yönetme deneyimimiz ve gücümüz Vardır.</p>
                        <br/>
                   </div>
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
