import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetail = () => {
    const {id}= useParams();

console.log("ID=",id);

    const [data, setdata] = useState([])


    useEffect(() => {
        fetch("/FakeData.json")
        .then(res=>res.json())
        .then(data=>setdata(data))
      
    }, [])
    const tonus=parseInt(id)
    // const value=data.id;
    // console.log("VAlue",value);

    const result = data.find( ({ id })=>id===tonus);
console.log(result);
    return (
        <>
       <div>

           <div className="row " style={{marginTop:"200px"}}>
              
                   <div className="col-lg-3 col-12 mt-3">
                       <img className="img-fluid"   src={result?.img1} alt="" />

                   </div>
                   <div className="col-lg-3 col-12 mt-3">
                   <img className="img-fluid"  height="500px"  src={result?.img2} alt="" />


                   </div>
                   <div className="col-lg-3 col-12 mt-3">
                   <img className="img-fluid"  height="500px"  src={result?.img3} alt="" />


                   </div>

            

           </div>



           <div className="text-center ">
               <h1 className="fs-1"><span className="text-danger fs-1 fw-bold">Project Name:</span>{result?.name}</h1>
               <h3 className="fs-1"><span className="text-danger fs-1 fw-bold">Description:</span>{result?.description}</h3>
               <h3 className="fs-1"><span className="text-danger fs-1 fw-bold">Technology:</span>{result?.Technology}</h3>
           </div>




























       </div>












            
        </>
    );
};

export default ProjectDetail;