import './Education.css'
import AKTULogo from '../../assets/AKTU.png'
import UoALogo from '../../assets/UoA.png'
import EducationItem from '../UI/EducationItem';

function Education() {
    return (
        <>
        <h2>Education</h2>
        <EducationItem logo={AKTULogo} university="Dr. A. P. J. Abdul Kalam Technical University" degree="Master of Computer Applications (MCA)"/>
        <EducationItem logo={UoALogo} university="University of Allahabad" degree="Bachelor of Computer Applications (BCA)"/>
        </>
    )
}

export default Education;