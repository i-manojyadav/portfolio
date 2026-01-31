import './Projects.css'
import { useState } from 'react'
import ProjectCard from '../UI/ProjectCard';
import AssetMitraIMG from '../../assets/AssetMitraIMG.png'

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
                {activeTab === "AssetMitra" && <div>{<ProjectCard img={AssetMitraIMG} title={"AssetMitra"} desc={"It offers a free all-in-one virtual portfolio to track stocks, FDs, and crypto, along with a built-in trading journal to manage and analyze investments and trades efficiently."} techUsed={["React", "Tailwind"]} gitLink={"https://github.com/i-manojyadav/assetmitra"} demoLink={"https://assetmitra.vercel.app/"} />}</div>}
                <button className={activeTab === "Project2" ? "activeTab" : "tab"} onClick={() => setActiveTab("Project2")}>Project 2</button>
                {activeTab === "Project2" && <p>Soon...</p>}
                <button className={activeTab === "Project3" ? "activeTab" : "tab"} onClick={() => setActiveTab("Project3")}>Project 3</button>
                {activeTab === "Project3" && <p>Soon...</p>}
            </div>
        </div>
    )
}

export default Projects