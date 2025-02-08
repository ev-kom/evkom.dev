"use client";

import React, { useCallback, useEffect } from "react";
import CustomTaskBar from "./CustomTaskBar";
import PhotoModal from "./PhotoModal";
import ReadmeModal from "./ReadmeModal";

const Desktop = () => {
  const [state, setState] = React.useState({ readme: false, photo: false });

  const toggleReadme = useCallback(
    (value: boolean) => setState((prev) => ({ ...prev, readme: value })),
    [],
  );
  const togglePhoto = useCallback(
    (value: boolean) => setState((prev) => ({ ...prev, photo: value })),
    [],
  );

  useEffect(() => {
    setState((prev) => ({ ...prev, readme: true }));
  }, []);

  return (
    <>
      <CustomTaskBar
        openReadme={() => toggleReadme(true)}
        openPhoto={() => togglePhoto(true)}
      />

      {state.readme && <ReadmeModal onClose={() => toggleReadme(false)} />}
      {state.photo && <PhotoModal onClose={() => togglePhoto(false)} />}
    </>
  );
};

CustomTaskBar.displayName = "Desktop";

export default Desktop;
