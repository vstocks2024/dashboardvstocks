"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function DeleteImageButton({ image_id }: { image_id: string }) {
    
  const router = useRouter();
  const handleDeleteImage = async (id: string) => {
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
        onClick={() => handleDeleteImage(image_id)}
      >
        Delete
      </Button>
    </>
  );
}
