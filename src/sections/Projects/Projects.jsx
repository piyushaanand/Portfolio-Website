// import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id = "projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        {/* <a 
        href="https://github.com/piyushaanand/Real-Time-Chat-App" target='_blank'>
        <img className = "hover" src={viberr} alt="viberr logo" />
        <h3>Viber</h3>
        <p>Streaming App</p>
        </a> */}
        <ProjectCard link = "https://github.com/piyushaanand/Real-Time-Chat-App" src = {viberr} h3 = 'Viber'
        p='Streaming App'
         />

<ProjectCard link = "https://github.com/piyushaanand/Responsive_Food_Delivery_website_Project-2" src = {freshBurger} h3 = 'Fresh Burger'
        p='Hamburger Resturent'
         />
         <ProjectCard link = "https://github.com/piyushaanand/Watch_Website" src = {hipsster} h3 = 'Hipsster'
        p='Watch and Glass shop'
         />
         <ProjectCard link = "https://github.com/piyushaanand/Gym-Training_Project-1" src = {fitlift} h3 = 'Fitlift'
        p='Fitness Gym'
         />
        
    </div>
    </section>
  )
}

export default Projects
