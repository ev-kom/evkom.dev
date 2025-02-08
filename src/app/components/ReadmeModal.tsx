"use client";

import { Cursor, Modal, TitleBar } from "@react95/core";
import { FileText } from "@react95/icons";
import FixPaddingButton from "./FixPaddingComponent";
import { StyledModal, StyledModalFrame } from "./StyledModal";

import React from "react";

interface ReadmeModalProps {
  onClose: () => void;
}

const ReadmeModal = ({ onClose }: ReadmeModalProps) => {
  return (
    <StyledModal
      key="readme"
      icon={<FileText variant="16x16_4" />}
      title="README.txt"
      titleBarOptions={[
        <FixPaddingButton key="minimize" Component={Modal.Minimize} />,
        <FixPaddingButton
          key="close"
          onClick={onClose}
          Component={TitleBar.Close}
        />,
      ]}
      dragOptions={{
        legacyTranslate: false,
        defaultPosition: {
          x: 200,
          y: 100,
        },
      }}
      // menu={[
      //   {
      //     name: "File",
      //     list: (
      //       <List width="200px">
      //         <List.Item onClick={onClose}>Exit</List.Item>
      //       </List>
      //     ),
      //   },
      // ]}
    >
      <StyledModalFrame lineHeight="1.5rem" boxShadow="$in" bgColor="white">
        <h1>Hello!</h1>
        <p>
          I&apos;m Egor, java developer who likes to do a web development once
          in a while.
        </p>
        <p>
          This website was built with{" "}
          <a
            href="https://github.com/React95/nextjs-template"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            React95 NEXT.js template
          </a>
          , React95 is a component library inspired on the Windows 95 UI design.
        </p>
        <p>
          Shoutout to{" "}
          <a
            href="https://janneilkka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            Janne Koivisto&apos;s portfolio website
          </a>{" "}
          I accidentally stumbled upon that inspired me to build this website.
        </p>
        <p>
          <a
            href="https://windowswallpaper.miraheze.org/wiki/File:Clouds_(Windows_95).png"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            Background
          </a>{" "}
          by WindowsAesthetics /{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            CC BY-SA 4.0
          </a>
        </p>
      </StyledModalFrame>
    </StyledModal>
  );
};

ReadmeModal.displayName = "ReadmeModal";

export default ReadmeModal;
