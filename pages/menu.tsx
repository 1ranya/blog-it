import { NextPage } from 'next'
import styles from '../styles/Menu.module.css'
interface Props {}

const Menu: NextPage<Props> = ({}) => {
  return (
    <div className={styles.menu}>
        <div>Articles</div>
        <div>Tricks</div>
        <div>Contact</div>
    </div>
    )
}

export default Menu