import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import {
  Customers,
  columns,
} from "../../components/customers_components/columns";
import { DataTable } from "../../components/customers_components/data-table";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getData(): Promise<Customers[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/customers/listall`);
  return res.json();
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
