import React from "react"
import { PrType } from "~/containers/app/type"
import { MDPreview } from "../MDPreview"

export const Pr: React.FC<{ data: PrType }> = ({ data }) => {
  return <MDPreview mdString={data.pr} />
}
