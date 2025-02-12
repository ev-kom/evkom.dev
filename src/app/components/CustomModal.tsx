"use client";

import { Modal } from "@react95/core";
import { ModalProps } from "@react95/core/Modal";
import React from "react";
import { styled } from "styled-components";

const breakpoints = {
  mobile: "325px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
};

// @ts-expect-error @react95/core/Modal is valid WebTarget
export const StyledModal = styled(Modal).attrs((props) => ({ ...props }))`
  max-height: 80vh;
  @media ${device.mobile} {
    margin: 5px;
    top: 0;
  }
  @media ${device.tablet} {
    max-width: 600px;
    left: 80px;
    top: 80px;
  }
`;

const CustomModalFrame = styled(Modal.Content)`
  padding: 16px;
  overflow-y: auto;
`;

interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
}

const CustomModal = ({ children, ...props }: CustomModalProps) => {
  return (
    <StyledModal
      {...props}
      dragOptions={{
        ...props.dragOptions,
        legacyTranslate: false,
        gpuAcceleration: false,
        applyUserSelectHack: true,
        cancel: ".draggable-cancel",
      }}
    >
      {children}
    </StyledModal>
  );
};

CustomModal.displayName = "CustomModal";

export { CustomModal, CustomModalFrame };
