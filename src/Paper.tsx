import React from "react"
import styled from "styled-components"

const Name = styled.div`
  background: #000;
  color: #fff;
`

export const Paper: React.FC<{ data: any }> = ({ data }) => {
  return <Name>{data.name}</Name>
}
