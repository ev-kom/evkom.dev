"use client";

import React from "react";

import { List, TaskBar } from "@react95/core";
import { FileText, User } from "@react95/icons";
import LinkedInLogo from "./LinkedInLogo";
import GithubLogo from "./GithubLogo";

interface CustomTaskBarProps {
  openPhoto: () => void;
  openReadme: () => void;
}

const CustomTaskBar = ({ openPhoto, openReadme }: CustomTaskBarProps) => {
  return (
    <TaskBar
      key="taskbar"
      list={
        <List>
          <List.Item key="README.txt" icon={<FileText />} onClick={openReadme}>
            README.txt
          </List.Item>
          <List.Item
            key="Egor"
            icon={<User variant="32x32_4" />}
            onClick={openPhoto}
          >
            Egor
          </List.Item>
          <List.Item
            key="LinkedIn"
            icon={<LinkedInLogo />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/egor-komarov-5b6012a5",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            LinkedIn
          </List.Item>
          <List.Item
            key="Github"
            icon={<GithubLogo />}
            onClick={() =>
              window.open(
                "https://github.com/ev-kom/evkom.dev",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Github
          </List.Item>
        </List>
      }
    />
  );
};

CustomTaskBar.displayName = "CustomTaskBar";

export default CustomTaskBar;
