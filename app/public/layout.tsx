
import React from 'react'
import './layout.css'
import { Session, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function PublicLayout({ children }: { children: React.ReactNode}) {

  const session: Session | null = await getServerSession();
  if( session && session.user)
    redirect("/home")

  return (
    <div className='public-view--container'>
        <div className='public-view--header'>
            
        </div>
        { children }
    </div>
  )
}

export default PublicLayout