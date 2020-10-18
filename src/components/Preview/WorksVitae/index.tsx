import React from "react"
import styled from "styled-components"
import { Section } from "../../Section"
import { StateType } from "~/containers/app/logics"

import { Header } from "./Header"
import { Item } from "./Item"

export type WorksVitaeData = StateType["worksVitae"]

export const WorksVitae: React.FC<{ data: WorksVitaeData }> = ({ data }) => {
  return (
    <Section title="職務経歴">
      {data.company && <Header name={data.company} period={data.period} />}
      {data.works.length &&
        data.works.map((work, i) => <Item work={work} key={i} />)}
    </Section>
  )
}
