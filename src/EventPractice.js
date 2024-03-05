import { useState } from "react";

const EventPractice = () => {
  const [color, setColor] = useState("");
  

  const handleColorChange = (e) => setColor(e.target.value);
 
  
  return (
    <div>
      <h1>입력창</h1>
      <input
        type="text"
        placeholder="색을 입력하세요"
        value={color}
        onChange={handleColorChange}
      
      />
      <div
        style={{
           
            width:'300px',
            height: '300px',
            border: '2px solid black',
          backgroundColor: color,
          marginTop: '10px',
        }}
      />
  
    </div>
  );
};
export default EventPractice;
