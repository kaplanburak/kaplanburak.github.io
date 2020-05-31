import React from "react";
import { Link } from "gatsby";

export default () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/p5animations/exp0/">Exp. #0</Link>
                </li>
                <li>
                    <Link to="/p5animations/exp1/">Exp. #1</Link>
                </li>
            </ul>
        </div>
    );
};
