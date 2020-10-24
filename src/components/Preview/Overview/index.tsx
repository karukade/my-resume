import React from "react"
import { OverviewType } from "~/containers/app/type"
import { MDPreview } from "../MDPreview"

export const OverView: React.FC<{ data: OverviewType }> = ({ data }) => {
  return <MDPreview mdString={data.overview} />
}
