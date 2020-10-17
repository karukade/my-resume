import React from "react"
import { StateType } from "~/containers/app/logics"
import { WorksVitae } from "./WorksVitae"

export const Inputs: React.FC<{ initialValue: StateType }> = ({
  initialValue,
}) => {
  return (
    <>
      <WorksVitae initialValue={initialValue.worksVitae} />
    </>
  )
}
