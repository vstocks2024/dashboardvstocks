import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Category, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import axios from "axios";
import NewCategoryButton from "./_components/NewCategoryButton";
async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  const resp= await fetch(`${process.env.NEXT_PUBLIC_URL}/categories/list_categories`,{
    cache:'no-store',
  });
  if (!resp.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return resp.json();
  
}

export default async function CategoryPage() {
  const data = await getData();
  console.log("Data:",data);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories" />
      <div className="container mx-auto py-10">
        <NewCategoryButton/>
        <DataTable columns={columns} data={data} />
      </div>
    </DefaultLayout>
  );
}
