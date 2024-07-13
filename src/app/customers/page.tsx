import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import {
  Customers,
  columns,
} from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { toast } from "@/components/ui/use-toast";


async function getData(): Promise<Customers[]> {
  try{
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/customers/listall`,{
      method:"GET",
      cache:"no-store"    
  });
  if(!res.ok) {
    toast({
      title:"Failed to fetch customer details",
       description:res.statusText
    })
  }
  return res.json();
}
  catch(error){
    console.log(error);
  }
  return [];
}

export default async function CustomersPage() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px]">
          <Breadcrumb pageName="Customers" />
          <div className="container mx-auto py-2">
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
