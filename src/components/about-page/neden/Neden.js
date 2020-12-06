import "./Neden.css";

import SecurityIcon from '@material-ui/icons/Security';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF"}}>
                   <h3 style={{color:"#A4203A",marginLeft:"1%"}}>Neden Nar Göç ve Danışmanlık Bürosu</h3>
                   <br/>
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><SecurityIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Güvenilirlik</p>
                        <p class="card-neden"> 
                        İş ve ticaret ilişkilerinde öncelik güvenilirliktir. İnsanlar iş yapacağı kişiye önce güvenmek ister. Bu yüzden Nar Danışmanlık Ofisinin temelini “güven” oluşturur.</p>
                        <br/>
                   </div>
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><DirectionsRunIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Kolay ve Hızlı Adımlar</p>
                        <p class="card-neden"> Asıl amacımız her zaman danışanlarımızın ve müvekkillerimizin hayatını kolaylaştırmaktır. Doğru noktalara odaklanarak karmaşık yapılardan, zorlu ve can sıkıcı süreçlerden sizleri uzak tutarız.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><HowToRegIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Saygılı Olmak</p>
                        <p class="card-neden"> Danışan ve müvekkillerimize  karşı saygılı olma en temel önceliğimizdir. Pozisyon, unvan, yaş, cinsiyet ya da diğer hiçbir farklılık bizim için ayırıcı bir özellik değildir. Her ne durum olursa olsun her zaman profesyonel bir tavırla saygı ve nezaketten yanayızdır.</p>
                        <br/>
                   </div>
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
