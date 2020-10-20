import React from "react"
import { Section } from "../../Section"
import { WorksVitaeType } from "~/containers/app/type"

import { Header } from "./Header"
import { Item } from "./Item"

export const WorksVitae: React.FC<{ data: WorksVitaeType }> = ({ data }) => {
  return (
    <Section title="職務経歴">
      {data.company && (
        <Header name={data.company} period={data.enrollmentPeriod} />
      )}
      {data.works && data.works.map((work, i) => <Item work={work} key={i} />)}
    </Section>
  )
}
