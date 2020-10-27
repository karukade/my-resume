import React, { useState } from "react"
import { InputsComponent } from "~/components/Inputs"
import { StateType } from "../app/type"

export const Inputs: React.FC<{ initialValue: StateType }> = ({
  initialValue,
}) => {
  const [state] = useState(initialValue)
  return <InputsComponent initialValue={state} />
}

export default Inputs
