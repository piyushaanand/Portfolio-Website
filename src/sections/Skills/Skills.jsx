// import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id = "skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "HTML"/>
            <SkillList src = {checkMarkIcon} skill = "CSS"/>
            <SkillList src = {checkMarkIcon} skill = "JavaScript"/>
            <SkillList src = {checkMarkIcon} skill = "Node"/>
            <SkillList src = {checkMarkIcon} skill = "jQuery"/>
            <SkillList src = {checkMarkIcon} skill = "Bootstrap"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "React"/>
            <SkillList src = {checkMarkIcon} skill = "Tailwind CSS"/>
            <SkillList src = {checkMarkIcon} skill = "Mongo Db"/>
            <SkillList src = {checkMarkIcon} skill = "My Sql"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "Java"/>
            <SkillList src = {checkMarkIcon} skill = "Python"/>
            <SkillList src = {checkMarkIcon} skill = "C"/>
            <SkillList src = {checkMarkIcon} skill = "C++"/>
            <SkillList src = {checkMarkIcon} skill = "Git"/>
        </div>
    </section>
  )
}

export default Skills
