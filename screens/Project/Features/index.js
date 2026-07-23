import React from "react";
import styles from "./features.module.css";
import cn from "classnames";
import Item from "./Item";

export default function Features({ project }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.items}>
          <Item
            project={project}
            image={project.images[4]}
            title="Benefits"
            content={project.benefits}
          />
          {/* <Item
            project={project}
            image={project.images[1]}
            title="How it works"
            content={project.introductions}
          /> */}
        </div>
      </div>
    </section>
  );
}
