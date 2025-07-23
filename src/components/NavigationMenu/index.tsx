"use client"
// ui
import Menu from "@/ui/Navigation/Menu"
import Beam from "@/ui/Layout/Beam"

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
  return (
    <Beam withoutWrap className="w-48">
      <Menu className="w-full" items={MENU} />
    </Beam>
  )
}
export default NavigationMenu
