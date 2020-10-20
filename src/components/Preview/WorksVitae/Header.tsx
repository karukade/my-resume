import React from "react"
import styled from "styled-components"

import { colors, fontSize } from "~/styles"
import { WorksVitaeType } from "~/containers/app/type"

type Props = {
  name: WorksVitaeType["company"]
  period: WorksVitaeType["enrollmentPeriod"]
}

const StyledHeader = styled.header`
  margin-bottom: 12px;
  padding: 1em;
  color: #fff;
  background-color: ${colors.font};
  font-size: ${fontSize.large};
  font-weight: bold;
  > .period {
    margin-left: 1em;
    font-size: ${fontSize.base};
  }
`

export const Header: React.FC<Props> = ({ name, period }) => {
  return (
    <StyledHeader>
      {name}
      <span className="period">{period}</span>
    </StyledHeader>
  )
}
