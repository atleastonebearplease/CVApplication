import { Fragment } from "react";

export function joinWithPipes(items) {
    return items.filter(Boolean).map((item, index) => (
            <Fragment key={index}>
                {index > 0 && " | "}
                {item}
            </Fragment>
    ));
}