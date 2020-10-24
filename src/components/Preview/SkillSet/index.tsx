import React from "react"
import styled from "styled-components"
import { SkillSetsType, SkillSetType } from "~/containers/app/type"
import { Table } from "../Table"
import { MDPreview } from "../MDPreview"
import { fontSize } from "~/styles"

const header = [
  {
    key: "name",
    label: "スキル名",
  },
  {
    key: "period",
    label: "使用期間",
  },
  {
    key: "desc",
    label: "",
  },
] as const

export const SkillSet: React.FC<{ data: SkillSetsType }> = ({ data }) => {
  return (
    <>
      {data.skillSets.map(({ lang, langPeriod, overview, skills }) => (
        <LangItem key={lang}>
          <div className="header">
            <header className="head-col">
              <h3 className="lang">{lang}</h3>
              <span className="period">{langPeriod}</span>
            </header>
            <MDPreview className="overview" mdString={overview} />
          </div>
          <Skills skills={skills} />
        </LangItem>
      ))}
    </>
  )
}

const LangItem = styled.section`
  .header {
    display: flex;
    margin-bottom: 1.5em;
    line-height: 1;
    .head-col {
      font-size: ${fontSize.large};
      font-weight: bold;
      display: flex;
    }
    .lang {
      margin-bottom: 0;
    }
    .period {
      padding-top: 0.1em;
      margin-left: 0.5em;
    }
    .overview {
      margin-left: 2em;
      > p {
        margin-bottom: 0.2em;
      }
    }
  }
`

const Skills: React.FC<{
  skills: SkillSetType["skills"]
}> = ({ skills }) => (
  <section>
    <TableTitle>フレームワーク・周辺技術</TableTitle>
    <Table rows={skills} header={header} />
  </section>
)

const TableTitle = styled.h4`
  font-weight: bold;
`
