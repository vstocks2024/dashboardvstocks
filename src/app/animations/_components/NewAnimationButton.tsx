"use client";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function NewAnimationButton() {
    const router = useRouter();
  return (
    <div className='flex flex-row items-center justify-end my-2'>
      <Button onClick={()=>router.push(`${process.env.NEXT_ANIMATION_ADMIN_EDITOR_URL}/editor`)} className='text-white bg-sky-600 hover:bg-sky-500' variant={'default'}>+ New Animation</Button>
    </div>
  )
}
