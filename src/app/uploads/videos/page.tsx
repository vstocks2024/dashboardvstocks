import { toast } from "@/components/ui/use-toast";
import { Video, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NewVideoButton from "./_components/NewVideoButton";

async function getData(): Promise<Video[]> {
  // Fetch data from your API here.
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}/videos/listall`, {
      method: "GET",
      cache: "no-store",
    });
    if (!resp.ok) {
      toast({
        title: "Failed",
        description: "Failed to fetch the videos"
          .concat(" ")
          .concat(resp.statusText),
      });
    }
    return resp.json();
  } catch (error) {
    console.log(error);
  }
  return [];
}

export default async function VideoPage() {
  const data = await getData();
  console.log("Data",data);

  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full">
          <Breadcrumb pageName="Videos" />
          <div className="container mx-auto py-2">
            <NewVideoButton/>
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
