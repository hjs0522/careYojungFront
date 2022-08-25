// import { useEffect, useState } from "react";


// function PhotoEx(){
//     const [arr,setArr]=useState([]);
//     const [loading,setLoding] = useState(false);
//     useEffect(()=>{
//         fetch('http://apis.data.go.kr/B550928/searchLtcInsttService01/getLtcInsttSeachList01?siDoCd=11&siGunGuCd=500&numOfRows=500&serviceKey=F3JoDk85OaH9qknmbW1aZOXGmgI%2BQWuhhgtV1Aj7OFZRfaZYzQtLazO9h2QeSSwPnvLX4%2Bi9e1JhUEDoA9sRSQ%3D%3D')
//         .then((response)=>{
//             return response.text()
//         })
//         .then((data)=>{
//             if(loading===true){
//                 return;
//             }
//             const tmp=[];
//             //console.log(data)
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(data,"application/xml");
//             //console.log(xml);
            
//             const b = xml.getElementsByTagName('adminNm');
//             console.log(b.length)
//             for(let i =0;i<b.length;i++){
//                 tmp.push(b[i].innerHTML);
//             }
//             console.log(tmp);
//             setArr(tmp);
//             setLoding(true);
//         },[]);
//     })
//     useEffect(()=>{
//         fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",{mode:'no-cors'})
//         .then(res=>console.log(res))
//     })
    
//     return(<div>
//         {arr.map((i)=><li>
//             {i}
//             </li>)}
//     </div>)
// }

// export default PhotoEx;