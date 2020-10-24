import React from "react"
import styled from "styled-components"

export const Layout: React.FC<{
  preview: React.ReactNode
  inputs: React.ReactNode
}> = ({ preview, inputs }) => (
  <Wrapper>
    <div className="item-input">{inputs}</div>
    <div className="item-preview">{preview}</div>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  > * {
    overflow: auto;
    flex: 50% 1 0;
    padding: 20px;
  }
  > .item-input {
    background-color: #efefef;
  }
`
