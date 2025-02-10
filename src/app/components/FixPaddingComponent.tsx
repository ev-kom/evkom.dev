"use client";

import React, { ComponentType } from "react";

import styled from "styled-components";

const StyledFixPaddingComponent = styled.button<{
  style?: React.CSSProperties;
}>`
  padding-inline: unset !important;
  ${({ style }) => style && { ...style }}
`;

const FixPaddingComponent = ({
  onClick,
  style,
  Component,
  ...props
}: {
  onClick?: () => void;
  style?: React.CSSProperties;
  Component?: ComponentType;
}) => {
  return (
    <StyledFixPaddingComponent
      as={Component}
      onClick={onClick}
      style={style}
      {...props}
    />
  );
};

FixPaddingComponent.displayName = "FixPaddingComponent";

export default FixPaddingComponent;
