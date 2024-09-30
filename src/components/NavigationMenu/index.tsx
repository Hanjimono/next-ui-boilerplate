"use client"
// ui
import Menu, { MenuCategory, MenuItem } from "@/ui/Navigation/Menu"
// styles and types
import styles from "./styles.module.scss"
import dynamic from "next/dynamic"

const MENU = [
  {
    title: "Presentation",
    items: [
      {
        title: "Text",
        link: "/text"
      }
    ]
  },
  {
    title: "Actions",
    items: [
      {
        title: "Button"
      }
    ]
  }
]

const MenuProvider = dynamic(() => import("@/ui/Navigation/Menu"), {
  ssr: false
})

// component with main navigation menu on the left side of every page
function NavigationMenu() {
  return <MenuProvider className={styles["main-menu"]} items={MENU} />
}
export default NavigationMenu
