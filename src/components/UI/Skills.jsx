import './Skills.css';
import SkillTag from './SkillTag';

function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-tag'>
                <SkillTag skill="HTML"/>
                <SkillTag skill="CSS"/>
                <SkillTag skill="JavaScript (ES6+)"/>
                <SkillTag skill="React.js"/>
                <SkillTag skill="Material UI"/>
                <SkillTag skill="Bootstrap"/>
                <SkillTag skill="Tailwind CSS"/>
                <SkillTag skill="EJS"/>
                <SkillTag skill="Node.js"/>
                <SkillTag skill="Express.js"/>
                <SkillTag skill="REST APIs"/>
                <SkillTag skill="MongoDB"/>
                <SkillTag skill="Mongoose"/>
                <SkillTag skill="SQL (Basics)"/>
                <SkillTag skill="Psssport.js"/>
                <SkillTag skill="Session-based Authentication"/>
                <SkillTag skill="Authorization"/>
                <SkillTag skill="Git" />
                <SkillTag skill="GitHub" />
                <SkillTag skill="Vercel" />
                <SkillTag skill="Render" />
                <SkillTag skill="VS Code" />
            </div>
        </div>
    )
}

export default Skills;