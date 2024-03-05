import React from "react";
import Com from "./Com";

const comment = [
    {
        name :"현용찬",
        comment :"안녕하세요",
    },
    {
        name :"최은진",
        comment :"안녕하세요",
    }
]
function ComList(props){
    return(
        <div>
          {comment.map((comment)=>{
            return(
                <Com name={comment.name} comment={comment.comment}/>
            );
          })}
        </div>
    );
}

export default ComList;