"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function DeleteVideoButton({ video_id }: { video_id: string }) {
    
  const router = useRouter();
  const handleDeleteVideo = async (id: string) => {
    try{
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/image/delete/${id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    router.refresh();
}
   catch(error) {
  console.log(error)
   }
  }
  
  return (
    <>
      <Button
        className="w-full"
        variant={"destructive"}
        onClick={() => handleDeleteVideo(video_id)}
      >
        Delete
      </Button>
    </>
  );
}
