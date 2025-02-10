"use client";

import React from "react";

import { Frame, Modal, TitleBar } from "@react95/core";
import { User } from "@react95/icons";
import Image from "next/image";
import egor_compressed_for_web from "../../../public/egor_compressed_for_web.jpeg";
import FixPaddingButton from "./FixPaddingComponent";
import { StyledModal } from "./StyledModal";

interface PhotoModalProps {
  onClose: () => void;
}

const PhotoModal = ({ onClose }: PhotoModalProps) => {
  return (
    <StyledModal
      key="photo"
      title={"egor_compressed_for_web.jpeg"}
      titleBarOptions={[
        <FixPaddingButton
          key="minimize"
          onClick={() => {}}
          Component={Modal.Minimize}
        />,
        <FixPaddingButton
          key="close"
          Component={TitleBar.Close}
          onClick={onClose}
        />,
      ]}
      icon={<User variant="16x16_4" />}
    >
      <Frame key="frame_egor_compressed_for_web" boxShadow="none">
        <Image
          key="egor_compressed_for_web"
          src={egor_compressed_for_web.src}
          aria-hidden
          alt="Egor as a pixelated image"
          width={400}
          height={596}
        />
      </Frame>
    </StyledModal>
  );
};

PhotoModal.displayName = "PhotoModal";

export default PhotoModal;
