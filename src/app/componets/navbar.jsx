import Link from "next/link"
import styles from './navbar.module.css'

const links = [{
    label:'Home',
    route: '/',
},{
    label:'promotions',
    route:'/Promociones'

}
]

export function Navigation(){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                {links.map(({label, route})=>(
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              )
              )}
                </ul>
            </nav>
        </header>
    )
}