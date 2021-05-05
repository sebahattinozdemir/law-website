import Header from "../header/Header"; 
import GroupIcon from '@material-ui/icons/Group';
import RefComponent from "../Reference-compo/RefComponent";
import React, { useEffect, useState } from 'react'
import "./Reference.css"
import db from "./../../../firebase";
import useDocumentTitle from '../../../useDocumentTitle';
function Reference() {
  useDocumentTitle('References - Nar Law and Consultancy');
    const [references, setReferences] = useState([]);
    useEffect(() => {
        // fires once when the app loads
        db.collection("enReferences")
          .orderBy("timeStamp", "desc")
          .onSnapshot((snapshot) => {
            setReferences(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                referenceUrl: doc.data().reference_url.substring(doc.data().reference_url.lastIndexOf('file')+7, doc.data().reference_url.lastIndexOf('/')),
                referenceName: doc.data().reference_name,
                referencePosition: doc.data().reference_position,
              }))
            );
          });
       
      }, []);

    return (
        <div>
            <Header
                subtitle="References"
                title="References"
                icon={<GroupIcon style={{fontSize:"35px"}}/>}
            />
                <br/>
                <div className="quality" style={{padding:"1%",width:"90%",backgroundColor:"#EFEFEF",borderRadius:"1rem",margin:"auto"}}>
                        <p style={{fontSize:"larger",fontStyle:"normal"}}>Bir memlekette, namuslular, namussuzlar kadar cesur olmadıkça, o memlekette kurtuluş yoktur.</p>
                </div>
                <br/>
                <div className="row" style={{padding:"1%",width:"90%",backgroundColor:"#EFEFEF",borderRadius:"1rem",margin:"auto"}}>
                   

                 {references.map((reference,index) => (     
                 <RefComponent
                 key={reference.id}
                 index={index}
                 refphoto={reference.referenceUrl}
                 refname={reference.referenceName}
                 refjob={reference.referencePosition}
           />
                 ))}
                </div>
                <br/>

        </div>
    )
}

export default Reference
