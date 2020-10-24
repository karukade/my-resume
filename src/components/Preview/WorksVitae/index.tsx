import React from "react"
import { WorksVitaeType } from "~/containers/app/type"

import { Header } from "./Header"
import { Item } from "./Item"

export const WorksVitae: React.FC<{ data: WorksVitaeType }> = ({ data }) => {
  return (
    <>
      <Header name={data.company} period={data.enrollmentPeriod} />
      {data.works.map((work, i) => (
        <Item work={work} key={i} />
      ))}
    </>
  )
}
