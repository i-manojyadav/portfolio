import './Projects.css'
import { useState } from 'react'
import ProjectCard from '../UI/ProjectCard';
import TradeverseIMG from '../../assets/TradeverseIMG.png';
import AssetMitraIMG from '../../assets/AssetMitraIMG.png'
import LuxeNestIMG from '../../assets/LuxeNestIMG.png'

function Projects() {

    const [activeTab, setActiveTab] = useState("Tradeverse");

    return(
        <div id="projects" className='projects'>
            <div className='projects-info'>
                <p className='highlight'>My Projects</p>
                <h2>Featured Projects</h2>
                <p>I've worked on a wide range of projects, from basic websites to full-scale web applications. Here are some of my favorites.</p>
            </div>
            <div className='project-list'>
                <button className={activeTab === "Tradeverse" ? "activeTab" : "tab"} onClick={() => setActiveTab("Tradeverse")}>Tradeverse</button>
                {activeTab === "Tradeverse" && <div> <ProjectCard img={TradeverseIMG} title={"Tradeverse"} desc={"Developed a cryptocurrency trading and portfolio management platform. Built Watchlist, Holdings, Positions, and Order Management modules with pending, executed, and cancelled order tracking. Implemented WebSocket-based order matching using live cryptocurrency price updates, supporting leveraged trading up to 100x with target, stop-loss, and liquidation price handling."} techUsed={["MERN Stack", "Socket.IO", "Material UI"]} gitLink={"https://github.com/i-manojyadav/tradeverse"} demoLink={"https://tradeverse-fg4e.onrender.com/"} /> </div>}

                <button className={activeTab === "LuxeNest" ? "activeTab" : "tab"} onClick={() => setActiveTab("LuxeNest")}>LuxeNest</button>
                {activeTab === "LuxeNest" && <div> <ProjectCard img={LuxeNestIMG} title={"LuxeNest"} desc={"LuxeNest is a full-stack web application that allows users to create, manage, and explore property listings. Users can sign up, sign in, add new listings, and leave reviews with rating."} techUsed={["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap", "JavaScript"]} gitLink={"https://github.com/i-manojyadav/luxenest"} demoLink={"https://luxenest-jv5n.onrender.com/"} /> </div>}
                
                <button className={activeTab === "AssetMitra" ? "activeTab" : "tab"} onClick={() => setActiveTab("AssetMitra")}>AssetMitra</button>
                {activeTab === "AssetMitra" && <div> <ProjectCard img={AssetMitraIMG} title={"AssetMitra"} desc={"It offers a free all-in-one virtual portfolio to track stocks, FDs, and crypto, along with a built-in trading journal to manage and analyze investments and trades efficiently."} techUsed={["React.js", "JavaScript"]} gitLink={"https://github.com/i-manojyadav/assetmitra"} demoLink={"https://assetmitra.vercel.app/"} /> </div>}
            </div>
        </div>
    )
}

export default Projects