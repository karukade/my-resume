import React from "react"
import styled from "styled-components"
import { SnsType } from "~/containers/app/type"
import { iconPath } from "../SnsIcons"

import { fontSize } from "~/styles"

const Item: React.FC<{ className?: string; snsInfo: SnsType }> = ({
  className,
  snsInfo,
}) => (
  <li className={className} key={snsInfo.serviceName}>
    <a className="sns-item-link" href={snsInfo.url}>
      <Icon iconPath={iconPath(snsInfo.serviceName)} />
      <span className="service-name">{snsInfo.serviceName}</span>
      <span className="url">{snsInfo.url}</span>
    </a>
  </li>
)

export const SnsItem = styled(Item)`
  .sns-item-link {
    display: flex;
    align-items: center;
  }
  .service-name {
    font-size: ${fontSize.large};
    font-weight: bold;
  }
  .url {
    margin-left: 0.5em;
    color: #8e8e8e;
  }
`

const Icon = styled.span<{ iconPath?: string }>`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
  border-radius: 50%;
  background: ${({ iconPath }) =>
    iconPath ? `url(${iconPath}) no-repeat center/ cover` : "#ffffff"};
`
