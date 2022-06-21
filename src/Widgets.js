import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets(){
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>   
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>
                    LinkedIn news
                </h2>
                <InfoIcon/>
            </div>
            {newsArticle("Test the linkedinclone", "The result is well deserved as the redux covered and provide the data that has been stored in the first authentication")}
            {newsArticle("Bitcoin price", "The price of bitcoin is skyrocketing per day")}
            {newsArticle("Redux", "Redux is a storage that save the data stored in the apps and can be called anywhere in the different locations/function")}
            {newsArticle("Firebase", "a web based database storage that stores the values and input that sent by user")}            
        </div>
    );
}

export default Widgets;