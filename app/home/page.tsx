'use server'
// import { Button } from '@chakra-ui/react'
import { Session, getServerSession } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'

async function HomePage() {
  const session: Session | null = await getServerSession();

  if( !session || !session.user)
    redirect("/login")
  
  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage