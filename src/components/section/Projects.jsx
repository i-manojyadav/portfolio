import './Projects.css'
import { useState } from 'react'
import ProjectCard from '../UI/ProjectCard';
import AssetMitraIMG from '../../assets/AssetMitraIMG.png'
import LuxeNestIMG from '../../assets/LuxeNestIMG.png'

function Projects() {

    const [activeTab, setActiveTab] = useState("AssetMitra");

    return(
        <div id="projects" className='projects'>
            <div className='projects-info'>
                <p className='highlight'>My Projects</p>
                <h2>Featured Projects</h2>
                <p>I've worked on a wide range of projects, from basic websites to full-scale web applications. Here are some of my favorites.</p>
            </div>
            <div className='project-list'>
                <button className={activeTab === "AssetMitra" ? "activeTab" : "tab"} onClick={() => setActiveTab("AssetMitra")}>AssetMitra</button>
                {activeTab === "AssetMitra" && <div>{<ProjectCard img={AssetMitraIMG} title={"AssetMitra"} desc={"It offers a free all-in-one virtual portfolio to track stocks, FDs, and crypto, along with a built-in trading journal to manage and analyze investments and trades efficiently."} techUsed={["React.js", "JavaScript"]} gitLink={"https://github.com/i-manojyadav/assetmitra"} demoLink={"https://assetmitra.vercel.app/"} />}</div>}
                <button className={activeTab === "LuxeNest" ? "activeTab" : "tab"} onClick={() => setActiveTab("LuxeNest")}>LuxeNest</button>
                {activeTab === "LuxeNest" && <div>{<ProjectCard img={LuxeNestIMG} title={"LuxeNest"} desc={"LuxeNest is a full-stack web application that allows users to create, manage, and explore property listings. Users can sign up, sign in, add new listings, and leave reviews with rating."} techUsed={["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap", "JavaScript"]} gitLink={"https://github.com/i-manojyadav/luxenest"} demoLink={"https://luxenest-jv5n.onrender.com/"} />}</div>}
                <button className={activeTab === "Project3" ? "activeTab" : "tab"} onClick={() => setActiveTab("Project3")}>Project 3</button>
                {activeTab === "Project3" && <p>Soon...</p>}
            </div>
        </div>
    )
}

export default Projects