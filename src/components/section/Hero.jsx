import './Hero.css';

function Hero() {
    const styles = {
        codeLine: {
            fontSize: "17px",
            lineHight: "1.6",
            color: "#ffffff"
        },
        color1: {color: "#569cd6"},
        color2: {color: "#9cdcfe"},
        color3: {color: "#d4d4d4"},
        color4: {color: "#ce9178"},
    }
    return (
        <section id='home' className='hero'>
            <div className='hero-left'>
                <div className='hero-content'>
                    <p className='highlight'>Hello, I'm</p>
                    <h1>Manoj Yadav</h1>
                    <p>MERN STACK DEVELOPER</p>
                    <p>I'm a MERN Stack Developer specializing in building modern, responsive, and high-performance web applications. I work with <b>React, Express.js, JavaScript, Tailwind CSS, Node.js,</b> and more...</p>
                </div>
                <div className='hero-btn'>
                    <a><button><i class="fa-solid fa-download"></i> Resume</button></a>
                    <a><button><i class="fa-brands fa-linkedin"></i></button></a>
                    <a><button><i class="fa-brands fa-github"></i></button></a>
                </div>
            </div>

            <div className='hero-right'>
                <div style={styles.codeLine}>
                    <span style={styles.color1}>const</span> {" "}
                    <span style={styles.color2}>learning</span> {" "}
                    <span style={styles.color3}>=</span> {" "}
                    <span style={styles.color1}>true</span> 
                    <span style={styles.color2}>;</span>
                </div>
                <div style={styles.codeLine}>
                    <span style={styles.color2}>learning</span> {" "}
                    <span style={styles.color3}>?</span> {" "}
                    <span style={styles.color4}>"Leveling up 💪"</span> {" "}
                    <span style={styles.color3}>:</span> {" "}
                    <span style={styles.color4}>"Taking rest 😴"</span> {" "}
                    <span style={styles.color3}>;</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;