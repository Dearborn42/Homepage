import React, {useState} from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question" onClick={()=>setShowInfo(!showInfo)}>
        <header>
            <h4><a href={info.link}>{info.title}</a></h4>
            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p>{info.desc}</p>}
    </article>
  )
}

export default Question