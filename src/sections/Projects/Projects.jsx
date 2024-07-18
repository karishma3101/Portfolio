import styles from './ProjectsStyles.module.css';
import cafe from '../../assets/cafe.png';
import crypto from '../../assets/crypto.jpeg';
import student from '../../assets/student.png';
import payroll from '../../assets/payroll.png';
import task from '../../assets/task.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cafe}
          link="https://github.com/karishma3101/Cafe-Website"
          h3="Cafe Website"
          p="HTML | CSS | Javascript "
        />
        <ProjectCard
          src={crypto}
          link="https://github.com/karishma3101/crypto_Api"
          h3="Crypto API"
          p="NodeJs | MongoDb"
        />
        <ProjectCard
          src={student}
          link="https://github.com/karishma3101/Student_Management"
          h3="Student Management System"
          p="C++ | DSA"
        />
        <ProjectCard
          src={payroll}
          link="https://github.com/karishma3101/Payroll-Management-System"
          h3="Payroll Management System"
          p="SQL | MySQL Server | Python"
        />
        <ProjectCard
          src={task}
          link="https://github.com/karishma3101/Task_Management"
          h3="Task Management"
          p="ReactJs | NodeJs | CSS | MongoDB"
        />
      </div>
    </section>
  );
}

export default Projects;
