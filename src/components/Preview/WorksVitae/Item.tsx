import React, { memo } from "react"
import styled from "styled-components"

import { colors, fontSize } from "~/styles"
import { MDPreview } from "../MDPreview"
import { WorksVitaeType } from "~/containers/app/type"

type Props = {
  work: WorksVitaeType["works"][number]
}

export const Item: React.FC<Props> = memo(function Item({ work }) {
  return (
    <Wrapper>
      <div className="period">{work.period}</div>
      <ul className="title-list">
        {work.workName.map((name, i) => (
          <li key={i} className="title">
            {name}
          </li>
        ))}
      </ul>
      {work.comment && <p className="comment">{work.comment}</p>}
      <div className="box-row">
        <dl className="box">
          <dt className="box-title">担当フェーズ</dt>
          <MDPreview mdString={work.charge} tag="dd" />
        </dl>
        <dl className="box">
          <dt className="box-title">使用ツール</dt>
          <MDPreview mdString={work.tool} tag="dd" />
        </dl>
      </div>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  padding: 1.5em 0 1.5em 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: ${colors.accent};
    top: 0.4em;
    left: 10px;
  }
  > .period {
    font-weight: bold;
    color: ${colors.accent};
    position: relative;
    &::before {
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: -9px;
      transform: translateX(-50%);
      content: "";
      width: 8px;
      height: 8px;
      background-color: ${colors.accent};
    }
  }
  > .title-list {
    list-style: none;
    > .title {
      font-size: ${fontSize.large};
      font-weight: bold;
      margin-bottom: 0.3em;
    }
    margin-bottom: 1em;
  }
  > .box-row {
    display: flex;
    > * {
      flex-basis: 49%;
    }
    > * + * {
      margin-left: 2%;
    }
  }
  .box {
    background-color: ${colors.grayL};
    padding: 1em;
    border-radius: 4px;
    > .box-title {
      font-weight: bold;
      margin-bottom: 0.5em;
    }
    ul {
      list-style: none;
      > li {
        padding-left: 1em;
        text-indent: -1em;
        &::before {
          content: "・";
        }
      }
      > li + li {
        margin-top: 0.3em;
      }
    }
  }
  > .comment {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 0;
  }
`
