import { useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";



const ComingSoon = () => {
    let [loading] = useState(true);
    let [color] = useState("red");
  return (
<>
<div className="sweet-loading ">
     <ClipLoader color={color} loading={loading} size={150} />
    </div>
    
    
</>
    
    
  )
}

export default ComingSoon