// eslint-disable-next-line no-unused-vars
import React from "react";
import { faqs } from "../data";
import FaqItem from "./FaqItem";
// import img1 from "../assets/img1.jpg";
import tharuni from '../assets/tharuni.jpeg';

function FaqList() {
  return (
    <div>
        <div className="text-gray-900 text-center -space-y-1">
            <h1 className="text-fluid-title font-bold uppercase">Most Frequent Asked questions</h1>
            <p className="text-sm italic text-gray-800">by travelers</p>
        </div>
      <div className="md:flex items-start justify-between gap-8 mt-7">
        <div className="w-full">
          <img className="w-full h-auto" src={tharuni} alt="Portrait_img" />
        </div>
        <ul className="w-full mt-3 sm:mt-0">
          {faqs.map((faq) => {
            const { id, question, answer } = faq;
            return <FaqItem key={id} question={question} answer={answer} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default FaqList;
