import './Header.css';

function Header({ isLight, toggleTheme }) {
    return(
        <header>
            <nav>
                <a href="#home"><i className="fa-solid fa-house"></i></a>
                <a href="#projects"><i className="fa-regular fa-file-code"></i> <span>Projects</span></a>
                <a href="https://www.linkedin.com/in/imanojyadav"><i className="fa-brands fa-linkedin"></i> <span>LinkedIn</span></a>
                <a href="https://github.com/i-manojyadav"><i className="fa-brands fa-github"></i> <span>GitHub</span></a>
                <a onClick={toggleTheme}>{isLight? <i class="fa-solid fa-moon"></i> : <i class="fa-regular fa-sun"></i>}</a>
            </nav>
        </header>
    )
}

export default Header;