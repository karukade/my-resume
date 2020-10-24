import React from "react"
import styled from "styled-components"
import { colors } from "~/styles"

type RowType = { [k: string]: string }

type Props<Row extends RowType> = {
  rows: Row[]
  header: ReadonlyArray<{
    key: keyof Row
    label: string
  }>
  hasHeader?: boolean
}

type TableComponent = <Row extends RowType>(
  props: Props<Row>
) => React.ReactElement<Props<Row>>

export const Table: TableComponent = ({ rows, header, hasHeader }) => (
  <StyledTable>
    {hasHeader && (
      <thead>
        <tr>
          {header.map(({ key, label }) => (
            // TODO: cellKey に Symbolが入ってくるのなんとかしたい
            <th key={key as Exclude<typeof key, symbol>}>{label}</th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          {header.map((cellKey) => (
            // TODO: cellKey に Symbolが入ってくるのなんとかしたい
            <td key={cellKey.key as Exclude<typeof cellKey.key, symbol>}>
              {row[cellKey.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
)

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 1em 0;
    border-top: 1px solid ${colors.border};
    border-bottom: 1px solid ${colors.border};
  }
`
