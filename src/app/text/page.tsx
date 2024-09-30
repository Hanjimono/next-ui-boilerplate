// system
import React from "react"
// ui
import Wall from "@/ui/Layout/Wall"
import Title from "@/ui/Presentation/Title"
import Text from "@/ui/Presentation/Text"
import Demo from "@/ui/Presentation/Demo"
import Beam from "@/ui/Layout/Beam"
import Pillar from "@/ui/Layout/Pillar"

export default function TextPage() {
  return (
    <Wall>
      <Title size={1}>Text Component</Title>
      <Title size={3}>Description</Title>
      <Text type="paragraph">
        This is a simple text component. It is used to display text on the
        screen.
      </Text>
      <Title size={3}>Usage</Title>
      <Title size={5}>Sizes</Title>
      <Text type="paragraph">
        Text component provides a set of predefined sizes. It depends on the
        body font size. You can select it via props.
      </Text>
      <Beam bottomGap withoutMargin>
        <Demo
          code={`
        <Beam bottomGap>
          <Text size={"extra-small"} type="plain">
            Extra-small text size
          </Text>
        </Beam>
        <Beam bottomGap>
          <Text size={"small"} type="plain">
            Small text size
          </Text>
        </Beam>
        <Beam bottomGap>
          <Text size={"default"} type="plain">
            Default text size
          </Text>
        </Beam>
        <Beam>
          <Text size={"large"} type="plain">
            Large text size
          </Text>
        </Beam>
          `}
        >
          <Beam bottomGap>
            <Text size={"extra-small"} type="plain">
              Extra-small text size
            </Text>
          </Beam>
          <Beam bottomGap>
            <Text size={"small"} type="plain">
              Small text size
            </Text>
          </Beam>
          <Beam bottomGap>
            <Text size={"default"} type="plain">
              Default text size
            </Text>
          </Beam>
          <Beam>
            <Text size={"large"} type="plain">
              Large text size
            </Text>
          </Beam>
        </Demo>
      </Beam>
      <Title size={5}>Types</Title>
      <Text type="paragraph">
        Text component provides a set of predefined types. The plain type is
        used for regular text. The paragraph type is used for text blocks,
        devided from each other by a margin. And finally the fit-line type is
        used for text, that should be displayed in one line and should not be
        wrapped.
      </Text>
      <Beam bottomGap withoutMargin>
        <Demo
          code={`
          <Beam>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="plain">
                First row of the plain text type.&nbsp;
              </Text>
              <Text size={"default"} type="plain">
                Second row of the plain text type.
              </Text>
            </Pillar>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="paragraph">
                First block of paragraph text type
              </Text>
              <Text size={"default"} type="paragraph">
                Second block of paragraph text type
              </Text>
            </Pillar>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="fit-line">
                Fit-line text type with a very long text that should not be wrapped
              </Text>
            </Pillar>
          </Beam>
          `}
        >
          <Beam>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="plain">
                First row of the plain text type.&nbsp;
              </Text>
              <Text size={"default"} type="plain">
                Second row of the plain text type.
              </Text>
            </Pillar>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="paragraph">
                First block of paragraph text type
              </Text>
              <Text size={"default"} type="paragraph">
                Second block of paragraph text type
              </Text>
            </Pillar>
            <Pillar sm={12} md={4}>
              <Text size={"default"} type="fit-line">
                Fit-line text type with a very long text that should not be wrapped
              </Text>
            </Pillar>
          </Beam>
        </Demo>
      </Beam>
    </Wall>
  )
}
