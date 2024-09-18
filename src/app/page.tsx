"use client"
import Button from "@/ui/Actions/Button"
import Beam from "@/ui/Layout/Beam"
import Brick from "@/ui/Layout/Brick"
import Foundation from "@/ui/Layout/Foundation"
import Pillar from "@/ui/Layout/Pillar"
import Wall from "@/ui/Layout/Wall"
import Code from "@/ui/Presentation/Code"
import Note from "@/ui/Presentation/Note"
import Text from "@/ui/Presentation/Text"
import Title from "@/ui/Presentation/Title"

export default function MainPage() {
  return (
    <Wall>
      <Title size={1} uppercase>
        Ui-boilerplate
      </Title>
      <Title>This is a ui-boilerplate for NEXT.js with some ui-kit</Title>
      <Brick>
        hjfkgjdkflhkj
        <Beam>
          <Pillar md={2} mdOffset={2}>
            <Button>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button blue>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button success>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button cancel>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button remove>Button</Button>
          </Pillar>
        </Beam>
        <Beam>
          <Pillar md={2} mdOffset={2}>
            <Button transparent>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button blue transparent>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button success transparent>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button cancel transparent>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button remove transparent>
              Button
            </Button>
          </Pillar>
        </Beam>
        <Beam>
          <Pillar md={2} mdOffset={2}>
            <Button text>Button</Button>
          </Pillar>
          <Pillar md={2}>
            <Button blue text>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button success text>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button cancel text>
              Button
            </Button>
          </Pillar>
          <Pillar md={2}>
            <Button remove text>
              Button
            </Button>
          </Pillar>
        </Beam>
      </Brick>
      <Note type="info" onClose={() => {}} title="Info">
        Make sure to review the details carefully before proceeding.
      </Note>
      <Code
        code={`
        <Beam>
          <Pillar md={2} mdOffset={2}><Button>Button</Button></Pillar>
          <Pillar md={2}><Button blue>Button</Button></Pillar>
          <Pillar md={2}><Button success>Button</Button></Pillar>
          <Pillar md={2}><Button cancel>Button</Button></Pillar>
          <Pillar md={2}><Button remove>Button</Button></Pillar>
        </Beam>`}
      />
      <Text type="paragraph">
        Excepteur reprehenderit nostrud ipsum veniam mollit non. Dolor
        exercitation elit Lorem sint velit ullamco ullamco. Anim dolor anim id
        reprehenderit sunt veniam ea reprehenderit dolore. Tempor esse proident
        quis tempor laborum minim sit exercitation amet pariatur veniam
        deserunt. Commodo deserunt mollit cillum nisi esse id sit incididunt
        duis consequat. Nostrud nostrud commodo consectetur et excepteur do aute
        et ipsum consequat eu excepteur consequat. Irure nisi proident dolor
        dolore qui nostrud qui consectetur tempor excepteur duis commodo
        ullamco. Elit do cupidatat culpa esse id aute culpa commodo ut tempor.
        Laborum culpa officia ipsum ad do anim ullamco. Commodo in adipisicing
        ipsum sit cillum commodo nulla deserunt enim consectetur non ex ut
        culpa. Irure nisi ut eu ullamco eu pariatur do aute incididunt nulla
        adipisicing duis consectetur nisi. Ad enim sit fugiat adipisicing fugiat
        incididunt culpa dolor elit anim esse. Non in labore pariatur sint
        exercitation voluptate nulla. Voluptate cupidatat enim Lorem
        reprehenderit anim occaecat laborum exercitation eu irure pariatur anim
        veniam. Sit nostrud officia id do ipsum consequat. Mollit consequat do
        labore velit ea ut nisi dolore sunt duis id ipsum pariatur incididunt.
        Ipsum Lorem incididunt velit do amet pariatur eu cupidatat irure dolor
        esse amet veniam id. Ullamco duis ipsum commodo Lorem elit Lorem. Non ut
        voluptate aute in cillum velit. Ullamco occaecat cillum nostrud irure
        exercitation est. Eiusmod adipisicing culpa anim culpa deserunt ad
        officia eu amet aute. Veniam Lorem exercitation duis esse laborum
        exercitation aliqua nulla eu anim dolore sunt non. Culpa sint nisi ad
        ipsum dolor irure qui eu anim occaecat cillum. Sunt aute magna irure qui
        ut ipsum mollit anim veniam esse. Et officia eu non nisi duis. Fugiat
        nostrud in laborum elit consectetur non minim. Qui eu incididunt
        occaecat deserunt fugiat consectetur excepteur proident Lorem. Anim
        ipsum in sint aliquip eu laboris duis laboris pariatur. Proident elit
        aliquip irure labore ut consectetur est. Labore aute do sit irure dolor
        nostrud Lorem non. Laborum sint irure consectetur eiusmod. Labore magna
        deserunt ex est fugiat amet exercitation dolore aliqua commodo deserunt
        velit officia consectetur. Eu ipsum id dolor cupidatat laborum esse
        duis. Dolor ex qui labore labore sint ex duis sit ea nulla. Ad commodo
        Lorem adipisicing nulla aute ipsum ullamco consectetur minim anim.
        Aliquip fugiat ullamco id fugiat. Velit magna cillum veniam elit culpa
        ullamco ex veniam minim dolor commodo. Id eiusmod officia do cillum
        laborum esse fugiat mollit. Aute velit adipisicing ullamco fugiat et
        anim sunt. Aliqua dolore est deserunt ea deserunt cupidatat. Elit id
        excepteur fugiat consectetur pariatur cillum aliqua ea. Fugiat ipsum
        commodo ullamco aliquip sit exercitation veniam minim non irure ad
        consectetur. Nulla aliqua eiusmod culpa pariatur consequat.
      </Text>
      <Text type="paragraph">
        Excepteur reprehenderit nostrud ipsum veniam mollit non. Dolor
        exercitation elit Lorem sint velit ullamco ullamco. Anim dolor anim id
        reprehenderit sunt veniam ea reprehenderit dolore. Tempor esse proident
        quis tempor laborum minim sit exercitation amet pariatur veniam
        deserunt. Commodo deserunt mollit cillum nisi esse id sit incididunt
        duis consequat. Nostrud nostrud commodo consectetur et excepteur do aute
        et ipsum consequat eu excepteur consequat. Irure nisi proident dolor
        dolore qui nostrud qui consectetur tempor excepteur duis commodo
        ullamco. Elit do cupidatat culpa esse id aute culpa commodo ut tempor.
        Laborum culpa officia ipsum ad do anim ullamco. Commodo in adipisicing
        ipsum sit cillum commodo nulla deserunt enim consectetur non ex ut
        culpa. Irure nisi ut eu ullamco eu pariatur do aute incididunt nulla
        adipisicing duis consectetur nisi. Ad enim sit fugiat adipisicing fugiat
        incididunt culpa dolor elit anim esse. Non in labore pariatur sint
        exercitation voluptate nulla. Voluptate cupidatat enim Lorem
        reprehenderit anim occaecat laborum exercitation eu irure pariatur anim
        veniam. Sit nostrud officia id do ipsum consequat. Mollit consequat do
        labore velit ea ut nisi dolore sunt duis id ipsum pariatur incididunt.
        Ipsum Lorem incididunt velit do amet pariatur eu cupidatat irure dolor
        esse amet veniam id. Ullamco duis ipsum commodo Lorem elit Lorem. Non ut
        voluptate aute in cillum velit. Ullamco occaecat cillum nostrud irure
        exercitation est. Eiusmod adipisicing culpa anim culpa deserunt ad
        officia eu amet aute. Veniam Lorem exercitation duis esse laborum
        exercitation aliqua nulla eu anim dolore sunt non. Culpa sint nisi ad
        ipsum dolor irure qui eu anim occaecat cillum. Sunt aute magna irure qui
        ut ipsum mollit anim veniam esse. Et officia eu non nisi duis. Fugiat
        nostrud in laborum elit consectetur non minim. Qui eu incididunt
        occaecat deserunt fugiat consectetur excepteur proident Lorem. Anim
        ipsum in sint aliquip eu laboris duis laboris pariatur. Proident elit
        aliquip irure labore ut consectetur est. Labore aute do sit irure dolor
        nostrud Lorem non. Laborum sint irure consectetur eiusmod. Labore magna
        deserunt ex est fugiat amet exercitation dolore aliqua commodo deserunt
        velit officia consectetur. Eu ipsum id dolor cupidatat laborum esse
        duis. Dolor ex qui labore labore sint ex duis sit ea nulla. Ad commodo
        Lorem adipisicing nulla aute ipsum ullamco consectetur minim anim.
        Aliquip fugiat ullamco id fugiat. Velit magna cillum veniam elit culpa
        ullamco ex veniam minim dolor commodo. Id eiusmod officia do cillum
        laborum esse fugiat mollit. Aute velit adipisicing ullamco fugiat et
        anim sunt. Aliqua dolore est deserunt ea deserunt cupidatat. Elit id
        excepteur fugiat consectetur pariatur cillum aliqua ea. Fugiat ipsum
        commodo ullamco aliquip sit exercitation veniam minim non irure ad
        consectetur. Nulla aliqua eiusmod culpa pariatur consequat.
      </Text>
      <Text type="paragraph">
        Excepteur reprehenderit nostrud ipsum veniam mollit non. Dolor
        exercitation elit Lorem sint velit ullamco ullamco. Anim dolor anim id
        reprehenderit sunt veniam ea reprehenderit dolore. Tempor esse proident
        quis tempor laborum minim sit exercitation amet pariatur veniam
        deserunt. Commodo deserunt mollit cillum nisi esse id sit incididunt
        duis consequat. Nostrud nostrud commodo consectetur et excepteur do aute
        et ipsum consequat eu excepteur consequat. Irure nisi proident dolor
        dolore qui nostrud qui consectetur tempor excepteur duis commodo
        ullamco. Elit do cupidatat culpa esse id aute culpa commodo ut tempor.
        Laborum culpa officia ipsum ad do anim ullamco. Commodo in adipisicing
        ipsum sit cillum commodo nulla deserunt enim consectetur non ex ut
        culpa. Irure nisi ut eu ullamco eu pariatur do aute incididunt nulla
        adipisicing duis consectetur nisi. Ad enim sit fugiat adipisicing fugiat
        incididunt culpa dolor elit anim esse. Non in labore pariatur sint
        exercitation voluptate nulla. Voluptate cupidatat enim Lorem
        reprehenderit anim occaecat laborum exercitation eu irure pariatur anim
        veniam. Sit nostrud officia id do ipsum consequat. Mollit consequat do
        labore velit ea ut nisi dolore sunt duis id ipsum pariatur incididunt.
        Ipsum Lorem incididunt velit do amet pariatur eu cupidatat irure dolor
        esse amet veniam id. Ullamco duis ipsum commodo Lorem elit Lorem. Non ut
        voluptate aute in cillum velit. Ullamco occaecat cillum nostrud irure
        exercitation est. Eiusmod adipisicing culpa anim culpa deserunt ad
        officia eu amet aute. Veniam Lorem exercitation duis esse laborum
        exercitation aliqua nulla eu anim dolore sunt non. Culpa sint nisi ad
        ipsum dolor irure qui eu anim occaecat cillum. Sunt aute magna irure qui
        ut ipsum mollit anim veniam esse. Et officia eu non nisi duis. Fugiat
        nostrud in laborum elit consectetur non minim. Qui eu incididunt
        occaecat deserunt fugiat consectetur excepteur proident Lorem. Anim
        ipsum in sint aliquip eu laboris duis laboris pariatur. Proident elit
        aliquip irure labore ut consectetur est. Labore aute do sit irure dolor
        nostrud Lorem non. Laborum sint irure consectetur eiusmod. Labore magna
        deserunt ex est fugiat amet exercitation dolore aliqua commodo deserunt
        velit officia consectetur. Eu ipsum id dolor cupidatat laborum esse
        duis. Dolor ex qui labore labore sint ex duis sit ea nulla. Ad commodo
        Lorem adipisicing nulla aute ipsum ullamco consectetur minim anim.
        Aliquip fugiat ullamco id fugiat. Velit magna cillum veniam elit culpa
        ullamco ex veniam minim dolor commodo. Id eiusmod officia do cillum
        laborum esse fugiat mollit. Aute velit adipisicing ullamco fugiat et
        anim sunt. Aliqua dolore est deserunt ea deserunt cupidatat. Elit id
        excepteur fugiat consectetur pariatur cillum aliqua ea. Fugiat ipsum
        commodo ullamco aliquip sit exercitation veniam minim non irure ad
        consectetur. Nulla aliqua eiusmod culpa pariatur consequat.
      </Text>
      <Text type="paragraph">
        Excepteur reprehenderit nostrud ipsum veniam mollit non. Dolor
        exercitation elit Lorem sint velit ullamco ullamco. Anim dolor anim id
        reprehenderit sunt veniam ea reprehenderit dolore. Tempor esse proident
        quis tempor laborum minim sit exercitation amet pariatur veniam
        deserunt. Commodo deserunt mollit cillum nisi esse id sit incididunt
        duis consequat. Nostrud nostrud commodo consectetur et excepteur do aute
        et ipsum consequat eu excepteur consequat. Irure nisi proident dolor
        dolore qui nostrud qui consectetur tempor excepteur duis commodo
        ullamco. Elit do cupidatat culpa esse id aute culpa commodo ut tempor.
        Laborum culpa officia ipsum ad do anim ullamco. Commodo in adipisicing
        ipsum sit cillum commodo nulla deserunt enim consectetur non ex ut
        culpa. Irure nisi ut eu ullamco eu pariatur do aute incididunt nulla
        adipisicing duis consectetur nisi. Ad enim sit fugiat adipisicing fugiat
        incididunt culpa dolor elit anim esse. Non in labore pariatur sint
        exercitation voluptate nulla. Voluptate cupidatat enim Lorem
        reprehenderit anim occaecat laborum exercitation eu irure pariatur anim
        veniam. Sit nostrud officia id do ipsum consequat. Mollit consequat do
        labore velit ea ut nisi dolore sunt duis id ipsum pariatur incididunt.
        Ipsum Lorem incididunt velit do amet pariatur eu cupidatat irure dolor
        esse amet veniam id. Ullamco duis ipsum commodo Lorem elit Lorem. Non ut
        voluptate aute in cillum velit. Ullamco occaecat cillum nostrud irure
        exercitation est. Eiusmod adipisicing culpa anim culpa deserunt ad
        officia eu amet aute. Veniam Lorem exercitation duis esse laborum
        exercitation aliqua nulla eu anim dolore sunt non. Culpa sint nisi ad
        ipsum dolor irure qui eu anim occaecat cillum. Sunt aute magna irure qui
        ut ipsum mollit anim veniam esse. Et officia eu non nisi duis. Fugiat
        nostrud in laborum elit consectetur non minim. Qui eu incididunt
        occaecat deserunt fugiat consectetur excepteur proident Lorem. Anim
        ipsum in sint aliquip eu laboris duis laboris pariatur. Proident elit
        aliquip irure labore ut consectetur est. Labore aute do sit irure dolor
        nostrud Lorem non. Laborum sint irure consectetur eiusmod. Labore magna
        deserunt ex est fugiat amet exercitation dolore aliqua commodo deserunt
        velit officia consectetur. Eu ipsum id dolor cupidatat laborum esse
        duis. Dolor ex qui labore labore sint ex duis sit ea nulla. Ad commodo
        Lorem adipisicing nulla aute ipsum ullamco consectetur minim anim.
        Aliquip fugiat ullamco id fugiat. Velit magna cillum veniam elit culpa
        ullamco ex veniam minim dolor commodo. Id eiusmod officia do cillum
        laborum esse fugiat mollit. Aute velit adipisicing ullamco fugiat et
        anim sunt. Aliqua dolore est deserunt ea deserunt cupidatat. Elit id
        excepteur fugiat consectetur pariatur cillum aliqua ea. Fugiat ipsum
        commodo ullamco aliquip sit exercitation veniam minim non irure ad
        consectetur. Nulla aliqua eiusmod culpa pariatur consequat.
      </Text>
    </Wall>
  )
}
