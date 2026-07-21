import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

export default function Section() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.inner_images}>
            <div className={styles.image_container}>
              <img
                src="/images/about/1.jpg"
                className={styles.image}
                alt="Lapse-1"
              />
            </div>

            <div className={styles.image_container}>
              <img
                src="/images/about/2.jpg"
                className={styles.image}
                alt="Lapse-1"
              />
            </div>
          </div>

          <div className={styles.image_container}>
            <img
              src="/images/about/3.jpg"
              className={styles.image}
              alt="Lapse-1"
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.title_container}>
            <span className={cn("hairline-2", styles.text)}>WHAT WE DO</span>
            <h4 className={cn("h4", styles.title)}>Conversion-Driven Products, Buitt to convert.</h4>
          </div>

          <div>
            <div className={cn("caption", styles.subtitle)}>
              We design and build UI/UX, websites, and SaaS products for founders growing their brand, and work white-label behind the scenes for agencies who need a senior design bench on demand. Every project is clean, considered, and delivered on time no jargon, no back-and-forth chasing revisions, just work that ships.
            </div>

            {/* <a className={cn("button")} href="#background">
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
