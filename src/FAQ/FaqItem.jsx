import { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className="text-black mb-3">
      <div
        onClick={toggleFAQ}
        className="bg-gray-700 text-white font-semibold py-3 px-4 flex items-center justify-between cursor-pointer"
      >
        <h1>{question}</h1>
        <button onClick={toggleFAQ}>
          <FaAngleDown
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-all duration-300 ease-out`}
          />
        </button>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-max-height duration-300 ease-out bg-neutral-50 shadow-lg"
      >
        <p className="py-3 px-4">{answer}</p>
      </div>
    </li>
  );
};
export default FaqItem;
