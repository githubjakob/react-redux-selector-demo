import styles from './styles.module.scss'

const Section = ({children}) => {
    console.log("children", children)
    return (<div className={`${styles.sectionContainer} ${styles.backgroundColor}`}>
        {children}
    </div>)
}

export default Section