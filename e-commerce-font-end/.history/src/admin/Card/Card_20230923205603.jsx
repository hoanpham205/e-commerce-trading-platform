import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpaned] = useState(false);

  return (
    <div>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard param={props} setExpaned={() => setExpaned(false)} />
        ) : (
          <CompactCard param={props} setExpaned={() => setExpaned(true)} />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

function CompactCard({ param, setExpaned }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpaned}
    >
      <div className="radialBar">
        <CircularProgressbar
          varlue={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard(params) {
export default Card;
