import Header from "../header/Header"; 
import "./Altblog.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react'
import html from 'react-inner-html';

function Altblog(props) {
    return (
        <div>
            <Header
                subtitle={props.location.state.heading}
                title="Blok İçerikleri"
                icon={<AssignmentIcon style={{fontSize:"35px"}} />}
            />
                   <div className="row" style={{margin:"0%",padding:"1%"}}>
                        <div className="col-12" style={{margin:"3%"}} > 
                            <h1 className="blogtitle" {...html(props.location.state.heading)}></h1>
                            <p class="blogtext" {...html(props.location.state.content)}></p>

                        </div>
                   </div>
        </div>
    )
}
export default Altblog
