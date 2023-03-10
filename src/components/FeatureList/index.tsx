import React from "react";
import FeatureItem from "../FeatureItem";
import styles from "./styles.module.css";

export type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "손 쉬운 사용",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const FeatureList = () => {
  return (
    <section className={styles.featureListContainer}>
      <div className="container">
        <div className="row">
          {FEATURE_ITEMS.map((props, idx) => (
            <FeatureItem data={props} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
