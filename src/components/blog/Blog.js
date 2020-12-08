import Header from "../header/Header"; 
import Bphoto from "./nar21.jpg";
import { Link } from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react'
import "./Blog.css"
function Blog() {
    return (
        <div>
            <Header
                subtitle="Blog"
                title="Blog"
                icon={<AssignmentIcon style={{fontSize:"35px"}} />}
            />
                   <div className="row" style={{margin:"0%",padding:"1%"}}>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{border:"1px #A4203A solid",borderRadius:"1em"}}>  
                                <img src={Bphoto} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%"}}></img>
                        
                                <Link className="b_title" to="/altblog" style={{paddingLeft:"1%"}} >
                                        3 Yılda 7 Bin Yabancı Türk Vatandaşı Oldu
                                        
                                </Link>
                        </div>
                   </div>
        </div>
    )
}

export default Blog
