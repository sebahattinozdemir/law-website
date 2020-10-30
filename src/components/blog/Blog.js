import Header from "../header/Header"; 
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
            <h4>BLOG SAYFASI</h4>
        </div>
    )
}

export default Blog
