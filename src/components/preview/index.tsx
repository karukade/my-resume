import React from "react"
import { WorksVitae } from "./WorksVitae"
import styled from "styled-components"

// @ts-ignore
import ress from "!!raw-loader!ress"

import { fontSize, colors } from "~/styles/"
import { StateType } from "~/containers/app/logics"

const Wrapper = styled.div`
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", sans-serif;
  font-size: ${fontSize.base};
  color: ${colors.font};
`

export const PreviewComponent: React.FC<{ data: StateType }> = ({ data }) => (
  <Wrapper>
    <style>{ress}</style>
    <WorksVitae data={data.worksVitae} />
  </Wrapper>
)