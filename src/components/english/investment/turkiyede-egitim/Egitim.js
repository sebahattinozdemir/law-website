import React from 'react';
import "./Egitim.css";
import SchoolIcon from '@material-ui/icons/School';
import Header from "../../header/Header"; 

export default function Egitim() {
    return (
        <div>
           <Header
                subtitle="Education in Turkey"
                title="Education in Turkey"
                icon={<SchoolIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                     
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Turkey Education System consists of two main parts, including formal education and non-formal education. Formal education; pre-primary education, primary education, secondary education and higher education institutions, non-formal education; It covers all educational activities organized alongside or outside formal education. Educational institutions are open to everyone, regardless of language, race, gender or religion. No privileges are granted to any person, family, group or class in education. To take advantage of the right to education in Turkey is compulsory in Turkey you are legally able.
No person shall be denied the right to education in Turkey taken under constitutional guarantee. In addition, education is provided free of charge in public schools. It is a crime to prevent a person's right to education.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Higher Education / University</h3>
                           <p class="card-text1">Higher education institutions consist of universities, faculties, institutes, schools, conservatories, vocational schools and application and research centers. To be a secondary education graduate and to enroll in higher education institutions
must be successful in the exam. Students who gain the right to choose in the university exam will be placed in one of the universities they prefer in the central preference system, according to their success ranking.
Since there is a difference between the number of students who have the right to choose in the exam and university quotas, it will contribute to you to be more realistic in the selection process. For more detailed information, you can take a look at the university preference guide published by OSYM every year or visit www.osym.gov.tr.
Higher education services are provided in state and foundation universities. While state universities provide free service, foundation universities determine their own annual fees. However, state universities may charge fees for foreign students. You can apply for higher education programs to Turkey Bursa in Turkey. You can visit Turkey www.turkiyeburslari.gov.t address to get more detailed information about scholarships.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Master and Doctorate</h3>
                           <p class="card-text1">Turkey, as in all areas of education, also offers you numerous opportunities for an academic career. 
                           After having a bachelor's degree, the demand for masters (master) and doctorate education is increasing day by day. 
                           Turkey, to meet this demand and is among the few countries in the world with the quality of education. After graduating, you must first decide on the department and university you want to do a master's degree. 
                           Do not forget that each department and university has its own specific admission requirements. 
                           Although there are differences between the university and the program in terms of admission to the program, success points are required from exams such as the basic sciences exam (ALES, GRA, etc.) for master's and doctoral degrees. 
                           You can visit www.osym.gov.tr ​​or visit the student affairs office of the university you intend to apply for to get more detailed information about the exams you need to take and qualification requirements for master's and doctoral programs. If you need to make of your undergraduate diploma equivalency procedures before applying to graduate degree you have completed your education outside Turkey. The same is true for your master's outside Turkey during the doctor. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Open Education</h3>
                           <p class="card-text1" >Those who do not complete their formal education can enroll in open education schools in order to complete their compulsory secondary education, if they wish. If the same is true for you, you can register by applying to the Public Education Center Directorate after the equivalence certificate you will receive from the National Education Directorate in your province. Open education units are as follows;</p>
                        <ul className="card-list">
                                <li>Open Education Secondary School; It provides the opportunity to complete primary education for primary school graduates and those who leave any level of primary education. </li>
                                <li>Open Education High School; It provides the opportunity to receive education for people who have completed primary education but do not continue secondary education or who have left secondary education. Those who have studied abroad are open if they show the education levels specified in their equivalence documents.
They can enroll in teaching high schools.</li>
                                <li>Teaching Imam Hatip High School; Those who have completed primary education, do not continue secondary education or graduates of higher education can also apply. </li>

​
                        </ul>
                   </div>
                  
                   
             

       </div>
        </div>
    )
}
