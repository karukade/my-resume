import React, { memo } from "react"
import styled from "styled-components"
import { colors, fontSize, space } from "~/styles"

export const Section: React.FC<{ title: string }> = memo(function Section({
  title,
  children,
}) {
  return (
    <StyledSection>
      <H2>{title}</H2>
      {children}
    </StyledSection>
  )
})

const H2 = styled.h2`
  font-size: ${fontSize.h2};
  font-weight: bold;
  margin-bottom: 1.5em;
`

const StyledSection = styled.section`
  padding: ${space.large} ${space.medium};
  border-top: solid 1px ${colors.border};
  &::first-child {
    border-top: none;
  }
`
