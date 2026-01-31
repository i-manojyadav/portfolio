import './Resume.css';
import Skills from '../UI/Skills';
import Education from './Education';

function Resume() {
    return (
        <div className='resume'>
            <div className='education'>
                <Education />
            </div>
            <div className='skills'>
                <Skills />
            </div>
        </div>
    )
}

export default Resume