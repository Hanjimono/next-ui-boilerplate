// components
import NavigationMenu from "@/components/NavigationMenu"
import Initializer from "@/components/Helpers/Initializer"
// constants
import { openSans } from "@/constants/fonts"
// ui
import Foundation from "@/ui/Layout/Foundation"
import Beam from "@/ui/Layout/Beam"
import Frame from "@/ui/Layout/Frame"
// types and styles
import "./global.css"

export const metadata = {
  title: "ui-boilerplate",
  description: "Boilerplate for Next.js development with ui-kit"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/fontawesome.min.css"
          integrity="sha512-B46MVOJpI6RBsdcU307elYeStF2JKT87SsHZfRSkjVi4/iZ3912zXi45X5/CBr/GbCyLx6M1GQtTKYRd52Jxgw=="
        />
      </head>
      <body className={openSans.className}>
        <Foundation>
          <Beam withoutWrap whole withoutGap>
            <NavigationMenu />
            <Frame className="main-content">{children}</Frame>
          </Beam>
        </Foundation>
        <Initializer />
      </body>
    </html>
  )
}
