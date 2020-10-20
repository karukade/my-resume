import React, { useState } from "react"
import { InputsComponent } from "~/components/Inputs"
import { StateType } from "../app/type"
import config from "./config"

export const Inputs: React.FC<{ initialValue: StateType }> = ({
  initialValue,
}) => {
  const [state] = useState(initialValue)
  return <InputsComponent initialValue={state} configs={config} />
}
