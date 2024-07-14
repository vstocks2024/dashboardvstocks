import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Tag, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import axios from "axios";
import NewTagButton from "./_components/NewTagButton";
import { toast } from "@/components/ui/use-toast";


async function getData(): Promise<Tag[]> {
  // Fetch data from your API here.
 try{
  const resp=await fetch(`${process.env.NEXT_PUBLIC_URL}/tags/list_tags`,{
    method:"GET",
    cache:"no-store",
  });
  if(!resp.ok){
    toast({
       title: resp.status+" "+ "Failed to fetch the tags",
       description:resp.statusText
    })
  }
  return resp.json();
}
catch(error){
  console.log(error);
}
return [];
  
}

export default async function TagsPage(){
  const data = await getData()
    return <><DefaultLayout>
            <main className="mx-auto w-full">
          <Breadcrumb pageName="Tags" />
          <div className="container mx-auto py-2">
        <NewTagButton />
      <DataTable columns={columns} data={data} />
    </div>
        </main>
        </DefaultLayout></>
}


 

 
