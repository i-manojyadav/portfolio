import './EducationItem.css';

function EducationItem({ logo, university, degree}) {
    return (
        <div className='education-item'>
            <div>
                <img src={logo} alt={university}></img>
            </div>
            <div>
                <p><b>{university}</b></p>
                <p>{degree}</p>
            </div>
        </div>
    )
}

export default EducationItem;