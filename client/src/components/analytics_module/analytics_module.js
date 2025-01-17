import { useState, useEffect } from "react"

import AnalyticsModuleSection from "./analytics_module_section"
// import images
import search_icon from "../../images/search_FILL0_wght400_GRAD0_opsz48.png"
import abm_image from "../../images/abm_strand_image.jpg"
import tvl_image from "../../images/tvl_strand_image.jpg"
import stem_image from "../../images/stem_strand_image.jpg"
import humms_image from "../../images/humms_strand_image.jpg"

const AnalyticsModule = ({ idNumber, setClassID, setClassSection, setSubjectID }) => {

    var root = document.querySelector(":root");

    const openAnalyticsSection = () => {
        root.style.setProperty('--windowAnalyticsSection-display', "block")
        root.style.setProperty('--windowAnalytics-display', "none")
    }

    const [classData, setClassData] = useState([]);

    useEffect(() => {
        const fetchClassData = async () => {
        const response = await fetch(`http://localhost:5000/api/subject/teacher/${idNumber}`);
        const data = await response.json();
        setClassData(data);
        };
        fetchClassData();
    }, [idNumber]);

    const getImage = (sectionStrand) => {
        if (sectionStrand === "STEM"){
            return stem_image
        }
        else if (sectionStrand === "HUMMS"){
            return humms_image
        }
        else if (sectionStrand === "ABM"){
            return abm_image
        }
        else {
            return tvl_image
        }
    }

    const [classQuery, setClassQuery] = useState('')
    const classKeys = ["class_glvl", "class_strand", "class_section", "subject_name"]
    

  return (
    <>
        <div className="assessment_module_main_wrap">
            <div className="assessment_module_topwrap">
                <div className="assessment_module_topwrap_text">
                    ANALYTICS
                </div>
                <div className="assessment_module_search_wrap">
                    <img src={search_icon} alt="search" className="assessment_module_search_icon"/>
                    <input 
                        type="text" 
                        className="assessment_module_search_input"
                        placeholder="Search Class and Section"
                        onChange={e=> setClassQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="assessment_module_subjcards_wrap">
                {/* make this a map later that generate subject*/}
                {classData && classData.filter
                        (classdata=>
                            classKeys.some(key=> classdata[key].toLowerCase().includes(classQuery.toLowerCase()))
                        ).map(classdata => (
                    <div 
                        key={classdata.class_id+classdata.subject_id+"-ana"} 
                        className="assessment_module_subjcards"
                        onClick={() => {
                            openAnalyticsSection();
                            setClassID(classdata.class_id);
                            setSubjectID(classdata.subject_id);
                            setClassSection(classdata.class_glvl + " " + classdata.class_strand + " " + classdata.class_section)
                          }}>
                        <div className="assessment_module_subjcards_cover"></div>
                        <img className="assessment_module_subjcards_img" src={getImage(classdata.class_strand)} alt="course_image" />
                            <div className="assessment_module_subjcards_text_wrap">
                                <span className="assessment_module_subjcards_text_a">
                                    {
                                        classdata.class_glvl + " " + classdata.class_strand + " " + classdata.class_section
                                    }
                                </span>
                                <span className="assessment_module_subjcards_text_b">{classdata.subject_name}</span>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default AnalyticsModule