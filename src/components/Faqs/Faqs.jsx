import React, { useEffect, useState } from "react";
import { faqsData, getUId } from "../../api/api";
import styles from "./Faqs.module.css";
import ExploreAccordion from "../ExploreAccordion/ExploreAccordion";

const Faqs = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await faqsData();
        console.log(response);
        setFaqData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.faqs}>
      <h2 className={styles.faqs_heading}>FAQs</h2>
      <div className={styles.faqs_explore}>
        {faqData.map((qItem) => {
          const id = getUId();
          return <ExploreAccordion key={id} data={qItem} />;
        })}
      </div>
    </div>
  );
};

export default Faqs;
