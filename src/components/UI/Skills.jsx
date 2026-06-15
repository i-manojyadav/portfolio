import './Skills.css';
import SkillTag from './SkillTag';

function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div className='skills-tag'>
                <SkillTag skill="HTML"/>
                <SkillTag skill="CSS"/>
                <SkillTag skill="JavaScript"/>
            </div>
            <h3>Frameworks & Libraries</h3>
            <div className='skills-tag'>
                <SkillTag skill="React.js"/>
                <SkillTag skill="Express.js"/>
                <SkillTag skill="Bootstrap"/>
                <SkillTag skill="Tailwind CSS"/>
            </div>
            <h3>Runtime Environment</h3>
            <div className='skills-tag'>
                <SkillTag skill="Node.js"/>
            </div>
            <h3>Database</h3>
            <div className='skills-tag'>
            <SkillTag skill="MongoDB"/>
            </div>
        </div>
    )
}

export default Skills;