import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



const ComingSoon = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");
  return (
<>
<div className="sweet-loading ">
     <ClipLoader color={color} loading={loading} size={150} />
    </div>
    
    
</>
    
    
  )
}

export default ComingSoon