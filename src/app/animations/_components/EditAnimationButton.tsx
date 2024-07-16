import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function EditAnimationButton({animation_id}:{animation_id:string}){
    const router=useRouter();
return <><Button variant={"default"} onClick={()=>router.push(`http://admin.editor.vstock.in/editor`)} className="bg-sky-600 hover:bg-sky-500 text-white w-full">Edit</Button></>
}