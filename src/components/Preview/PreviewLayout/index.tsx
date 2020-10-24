import React from "react"
import styled from "styled-components"

export const PreviewLayout: React.FC<{ button: React.ReactNode }> = ({
  button,
  children,
}) => (
  <Wrapper>
    {children}
    <div className="btn">{button}</div>
  </Wrapper>
)

const Wrapper = styled.div`
  overflow: auto;
  height: 100%;
  > .btn {
    bottom: 30px;
    right: 10px;
    position: fixed;
    text-align: center;
  }
`
