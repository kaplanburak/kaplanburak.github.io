import React from "react";
import p5 from "p5";

import "./style.css";

export const SketchLayout = ({ s }) => {
    const { useRef, useEffect } = React;
    const sketchRef = useRef(null);

    useEffect(() => {
        if (sketchRef && s) {
            new p5(s, sketchRef.current);
        }
    }, [sketchRef, s]);

    return <div className="sketch-layout" ref={sketchRef} />;
};
