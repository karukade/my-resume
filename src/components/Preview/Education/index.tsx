import React from "react"
import { EducationsType } from "~/containers/app/type"
import { Table } from "../Table"

const header = [
  {
    key: "name",
    label: "学校名",
  },
  {
    key: "major",
    label: "専攻",
  },
  {
    key: "graduation",
    label: "卒業・修了年",
  },
] as const

export const Education: React.FC<{ data: EducationsType }> = ({ data }) => {
  return <Table rows={data.educations} header={header} />
}
