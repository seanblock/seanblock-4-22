import './Skills.css'

const Skills = () => {

    const front = [
        {
            code: `devicon-react-plain colored`,
            name: 'React'
        },
        {
            code: `devicon-html5-plain colored`,
            name: 'HTML'
        },
        {
            code: `devicon-css3-plain colored`,
            name: 'CSS'
        },
        {
            code: `devicon-javascript-plain colored`,
            name: 'Javascript'
        },
        {
            code: `devicon-typescript-plain colored`,
            name: 'typescript'
        },
        {
            code: `devicon-php-plain colored`,
            name: 'php'
        },
        {
            code: `devicon-jquery-plain colored`,
            name: 'Jquery'
        },
        {
            code: `devicon-angularjs-plain colored`,
            name: 'angularjs'
        },
        {
            code: `devicon-threejs-original`,
            name: 'threejs'
        },
        {
            code: `devicon-sass-plain colored`,
            name: 'sass'
        },
    ]

    const back = [
        {
            code: `devicon-nodejs-plain colored`,
            name: 'nodejs'
        },
        {
            code: `devicon-express-original`,
            name: 'express'
        },
        {
            code: `devicon-mysql-plain colored`,
            name: 'mysql'
        },
        {
            code: `devicon-microsoftsqlserver-plain colored`,
            name: 'MSSQL'
        },
    ]

    const programming = [
        {
            code: `devicon-python-plain colored`,
            name: 'python'
        },
        {
            code: `devicon-cplusplus-plain colored`,
            name: 'cplusplus'
        },
        {
            code: `devicon-java-plain colored`,
            name: 'java'
        },
    ]

    const software = [
        {
            code: `devicon-apache-line`,
            name: 'apache'
        },
        {
            code: `devicon-vscode-plain colored`,
            name: 'vscode'
        },
        {
            code: `devicon-filezilla-plain colored`,
            name: 'filezilla'
        },
    ]

    return ( 
        <div id="skills" className="page">
            <h1>Skills</h1>
            
            {/* Front End */}
            <div className="skill-container">
                <h4 id="skill-front">Front-End</h4>
                {front.map((item)=>{
                    return(<> 
                        <div className='skill'>
                            <i className={`${item.code} skill-logo` }></i>
                            <span className='skill-name'>{item.name}</span>
                        </div>
                    </>)
                })}
            </div>

            {/* Back End */}
            <div className="skill-container">
                <h4 id="skill-back">Back-End</h4>
                {back.map((item)=>{
                    return(<> 
                        <div className='skill'>
                            <i className={`${item.code} skill-logo` }></i>
                            <span className='skill-name'>{item.name}</span>
                        </div>
                    </>)
                })}
            </div>

            {/* Programming */}
            <div className="skill-container">
                <h4 id="skill-programming">Programming</h4>
                {programming.map((item)=>{
                    return(<> 
                        <div className='skill'>
                            <i className={`${item.code} skill-logo` }></i>
                            <span className='skill-name'>{item.name}</span>
                        </div>
                    </>)
                })}
            </div>

            {/* Software */}
            <div className="skill-container">
                <h4 id="skill-software">Software</h4>
                {software.map((item)=>{
                    return(<> 
                        <div className='skill'>
                            <i className={`${item.code} skill-logo` }></i>
                            <span className='skill-name'>{item.name}</span>
                        </div>
                    </>)
                })}
            </div>
        </div>
    );
}
 
export default Skills;