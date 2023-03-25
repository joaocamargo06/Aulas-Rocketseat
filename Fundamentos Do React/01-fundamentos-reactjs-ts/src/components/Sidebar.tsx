import styles from './Sidebar.module.css'

import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
   <aside className={styles.sidebar}>
    <img className={styles.cover} src="https://images.unsplash.com/photo-1599626269540-6a5077872a4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
    <div className={styles.profile}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/38479702?v=4"
      />
      <strong>João Vitor Camargo de Almeida</strong>
      <span>Full-Stack Developer</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar Seu Perfil
      </a>
    </footer>
   </aside>
  )
}

