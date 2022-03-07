import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientContext";
import { motion } from "framer-motion";

const ButtonLink = ({name, page}) => {
    const navigate = useNavigate();

    const { open, setOpen } = useContext(ClientContext);

    const variants = {
        open: {width: '20vh'}, 
        close: {width: '30vh'}
    }

    useEffect(()=>{
        switch(window.location.pathname){
      
            case '/portfolio':
                setOpen(true)
                window.scrollTo(0, window.innerHeight * 1)
                document.getElementById('homepage').style.overflow = 'hidden'
                document.getElementById(`portfolio`).scrollTo(0, 0)
                document.documentElement.style.overflowY = 'hidden'
                document.getElementById(`portfolio-button`).style.width = '10vw'
                document.getElementById(`portfolio`).style.width ='90vw';
                break
            
            case '/skills':
                setOpen(true)
                window.scrollTo(0, window.innerHeight * 2)
                document.getElementById('homepage').style.overflow = 'hidden'
                document.getElementById(`skills`).scrollTo(0, 0)
                document.documentElement.style.overflowY = 'hidden'
                document.getElementById(`skills-button`).style.width = '10vw'
                document.getElementById(`skills`).style.width ='90vw';
                break
            
            case '/about':
                setOpen(true)
                window.scrollTo(0, window.innerHeight * 3)
                document.getElementById('homepage').style.overflow = 'hidden'
                document.getElementById(`about`).scrollTo(0, 0)
                document.documentElement.style.overflowY = 'hidden'
                document.getElementById(`about-button`).style.width = '10vw'
                document.getElementById(`about`).style.width ='90vw';
                break
        }
        
    },[])

    return ( 
        <motion.div 
            className="button-link"
            id={`${name}-button`}
            onClick={()=>{
                const goto = window.innerHeight * page
                window.scrollTo(0, goto)
                document.getElementById('homepage').style.overflow = 'hidden'
                document.getElementById(`${name}`).scrollTo(0, 0)
                {open ? 
                    document.documentElement.style.overflowY = 'auto' :
                    document.documentElement.style.overflowY = 'hidden'
                }
                {open ?
                    setTimeout(()=>{
                        document.getElementById(`${name}-button`).style.width = '30vw'
                        document.getElementById(`${name}`).style.width ='70vw';
                        document.getElementById(`${name}`).style.overflowY = 'hidden'
                        navigate(`/`)
                        setOpen(false)
                    }, 500)
                    :
                    setTimeout(()=>{
                        document.getElementById(`${name}-button`).style.width = '10vw'
                        document.getElementById(`${name}`).style.width ='90vw';
                        document.getElementById(`${name}`).style.overflowY = 'auto'

                        navigate(`/${name}`)
                        setOpen(true)
                    }, 500)
                }
                
            }}
        >
          <span>{open ? 'Back' : name}</span>  
        </motion.div>
    );
}
 
export default ButtonLink;