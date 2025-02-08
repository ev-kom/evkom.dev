"use client";

import { ClippyProvider } from "@react95/clippy";
import styled from "styled-components";
import Clippy from "./components/Clippy";
import Desktop from "./components/Desktop";

import React from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 2rem 2rem 5rem;
  gap: 4rem;
  font-family: var(--font-geist-sans);

  @media (min-width: 640px) {
    padding: 5rem;
  }

  h1 {
    font-family: var(--font-geist-sans);
    font-weight: 500;
    font-size: 40px;
    margin: 8px 0 8px 0;
  }

  h2 {
    font-family: var(--font-geist-sans);
    font-weight: 400;
    font-size: 30px;
    margin: 8px 0 8px 0;
  }

  h3 {
    font-family: var(--font-geist-sans);
    font-weight: 200;
    font-size: 18px;
    margin: 4px 0 4px 0;
  }

  h4 {
    font-family: var(--font-geist-sans);
    font-weight: 600;
    font-size: 16px;
    margin: 8px 0 8px 0;
  }

  p,
  a,
  li {
    font-family: var(--font-geist-sans);
    font-size: 14px;
    margin: 8px 0 8px 0;
  }

  a {
    color: #183672;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
  }

  a:hover {
    color: #183672;
    text-decoration: none;
    box-shadow: inset 100vh 0 0 0 #d3e2e7;
  }

  br {
    content: "";
    margin: 1em;
    display: block;
  }

  span {
    font-family: var(--font-geist-sans);
    font-weight: 800;
    font-size: 14px;
    margin: 8px 0 8px 0;
  }

  hr {
    margin: 16px 0 16px 0;
  }

  .listLink {
    font-family: var(--font-geist-sans);
    font-size: 12px;
    gap: 8px;
  }

  .listLink:hover {
    font-family: var(--font-geist-sans);
    font-size: 12px;
    gap: 8px;
    text-decoration: none;
    box-shadow: none;
  }

  .role {
    font-family: var(--font-geist-sans);
    font-size: 14px;
    font-style: italic;
  }

  .fullWidthImage {
    height: 250px;
    width: 250px;
    top: 0;
    left: 0;
  }
`;

const Home = () => {
  return (
    <GridContainer>
      <ClippyProvider>
        <Clippy />

        <Desktop />
      </ClippyProvider>
    </GridContainer>
  );
};

export default Home;
