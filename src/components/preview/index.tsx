/* eslint-disable react/display-name */
import React from "react"
import styled from "styled-components"
// @ts-ignore
import ress from "!!raw-loader!ress"

import { Section } from "../Section"
import { Person } from "./Person"
import { OverView } from "./Overview"
import { WorksVitae } from "./WorksVitae"
import { Education } from "./Education"
import { SkillSet } from "./SkillSet"
import { Pr } from "./Pr"

import { config } from "~/config/preview"
import { fontSize, colors } from "~/styles/"
import { StateType } from "~/containers/app/type"

type ComponentsMapPropsType<T extends keyof StateType> = {
  type: T
  initialValue: any // TODO: StateType[T]
}

const ComponentsMap: React.FC<ComponentsMapPropsType<keyof StateType>> = ({
  type,
  initialValue,
}) => {
  switch (type) {
    case "person":
      return <Person data={initialValue} />
    case "worksVitae":
      return <WorksVitae data={initialValue} />
    case "overview":
      return <OverView data={initialValue} />
    case "education":
      return <Education data={initialValue} />
    case "skillSet":
      return <SkillSet data={initialValue} />
    case "pr":
      return <Pr data={initialValue} />
  }
}

export const PreviewComponent: React.FC<{ data: StateType }> = ({ data }) => (
  <Wrapper>
    <style>{ress}</style>
    {config.map((_config) =>
      _config.title ? (
        <Section key={_config.name} title={_config.title}>
          <ComponentsMap
            type={_config.name}
            initialValue={data[_config.name]}
          />
        </Section>
      ) : (
        <ComponentsMap
          key={_config.name}
          type={_config.name}
          initialValue={data[_config.name]}
        />
      )
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: "Noto Sans JP", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", sans-serif;
  font-size: ${fontSize.base};
  color: ${colors.font};
  a {
    color: inherit;
    text-decoration: none;
  }
`
