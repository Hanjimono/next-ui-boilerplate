"use client"
// system
import { useState } from "react"
import clsx from "clsx"
// ui
import Menu from "@/ui/Navigation/Menu"
import Beam from "@/ui/Layout/Beam"
// styles and types
import Button from "@/ui/Actions/Button"
import Title from "@/ui/Presentation/Title"
import Logo from "../Logo"

const MENU = [
  {
    title: "Presentation",
    items: [
      {
        title: "Home",
        link: "/"
      },
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
        title: "Button",
        link: "/button"
      }
    ]
  }
]

// component with main navigation menu on the left side of every page
function NavigationMenu() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <div>
        <Button
          onClick={() => setOpenMenu(true)}
          icon="menu"
          text
          iconSize={30}
        />
        <Logo />
      </div>
      <div>
        <Button
          onClick={() => setOpenMenu(false)}
          icon="close"
          text
          iconSize={22}
        />
        <Logo />
        <Beam withoutWrap whole>
          <Menu className="w-full" items={MENU} />
        </Beam>
      </div>
    </>
  )
}
export default NavigationMenu
