import './SkillTag.css';
import Skills from './Skills';

function SkillTag({skill}) {
    return (
        <div className='skill-tag'>
            <button>{skill}</button>
        </div>
    )
}

export default SkillTag;