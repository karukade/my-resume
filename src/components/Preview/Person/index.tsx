import React from "react"
import styled from "styled-components"
import { PersonType } from "~/containers/app/type"
import { SnsItem } from "./SnsItem"

import { colors, fontSize, space } from "~/styles"

export const Person: React.FC<{ data: PersonType }> = ({ data }) => {
  return (
    <Wrapper>
      <div className="inner">
        <div>
          <h1 className="name">{data.name}</h1>
          <span className="born">{data.born}</span>
        </div>
        <ul className="sns">
          {data.sns.map((snsInfo) => (
            <SnsItem key={snsInfo.serviceName} snsInfo={snsInfo} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: ${space.medium} ${space.medium} 1em;
  background-color: ${colors.font};
  color: #fff;
  > .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    color: #fff;
    font-size: ${fontSize.h2};
    line-height: 1;
    margin-bottom: 0.2em;
  }
  .sns {
    list-style: none;
    > * + * {
      margin-top: 0.8em;
    }
  }
`
