import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import { Animation, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import NewAnimationButton from "./_components/NewAnimationButton";

async function getData(): Promise<Animation[]> {
  // Fetch data from your API here.

  const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}/animations/listall`, {
    method: "GET",
    cache: "no-store",
  });
  if (!resp.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return resp.json();
}

export default async function AnimationPage() {
  const data = await getData();
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full ">
          <Breadcrumb pageName="Animations" />
          <div className="container mx-auto py-2">
            <NewAnimationButton/>
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
