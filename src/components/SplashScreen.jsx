import { useState } from "react";
import './SplashScreen.css'
export default function SplashScreen(){
	
	const [flag, setFlag] = useState(true);
	
	setTimeout(()=>{
	 setFlag(false);  
   },3000);
	
	if(flag){
		return (
			<>
				<div id="splashscreen" className="d-flex align-items-center gap-1">		
					<img src="./icons/logo_with_name.png" width='200'></img>
				</div>
			</>
		)
	} else {
		 return false;
	}
	
   
}
