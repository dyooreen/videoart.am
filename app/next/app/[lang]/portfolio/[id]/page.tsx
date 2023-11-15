"use client"
import { useEffect, useState } from "react";
import flow from "@/lib/flow";

import Video from "@/app/_components/Video";

export default function Pro({ params: { id } }: any){
	const [data,setData] = useState()
	useEffect(()=>{
		flow("/projects/"+id).then((d) => setData(d));
	},[])
console.log(data)
	return( <div>
<div>
<Video Link={data?.Youtube} />
</div>
<div className="w-8/12 m-auto mt-12 mb-12">
<div>
	{data?.Name}
</div>
<div>
	{data?.Description}
</div>
<div className="mt-12">
	{data?.members?.map(m=><div className="">
		{m?.Name}
	</div>)}
</div>
</div>
	</div>)
}
