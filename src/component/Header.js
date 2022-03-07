import { Container, Button, Row, Col} from "react-bootstrap";
import './Header.css';
import MainNav from "./MainNav";
import 'css-doodle';

const Header = () => {
    return ( 
        <div id="header">
            <MainNav />
            <div id="header-container" className="m-5">
                <div id="header-content">
                    <h1>SEAN BLOCK</h1>
                    <h5 className="mb-5">
                        Full Stack Developer  
                        <small> (Site Under Construction!)</small>
                    </h5>
                    <Button href="#contact-link" className="me-2">Contact</Button>
                    <Button href="#portfolio-link" variant>Portfolio</Button>
                </div>
                <div id="header-img">
                    {/* <div id="header-circle"></div> */}
                </div>
                <css-doodle id="header-doodle">
                    {`
                        @grid: 16 / 320px;

                        @size: 1px calc(141.4% + 1px);
                        transform: rotate(@p(±45deg));
                        background: linear-gradient(
                            135deg,
                            var(--primary), 
                            var(--secondary), 
                            var(--alternate)
                        );
                        margin: auto;
                    `}
                </css-doodle>
            </div>
            
            <div id="experience">
                <div className="exp">
                    <span><i class="devicon-html5-plain colored"></i></span>
                    <div><div>HTML / CSS</div></div>
                </div>
                <div className="exp">
                    <span><i class="devicon-react-plain colored"></i></span>
                    <div><div>REACT</div></div>
                </div>
                <div className="exp">
                    <span><i class="devicon-nodejs-plain colored"></i></span>
                    <div><div>NODEJS</div></div>
                </div>
                <div className="exp">
                    <span><i class="devicon-mysql-plain colored"></i></span>
                    <div><div>MYSQL</div></div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;