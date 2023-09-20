import React from 'react';
import StudentInfo from './StudentInfo';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <div>
        <h1> CPRG 306: Web Development 2 - Assignments </h1>
        <StudentInfo />
      </div>
      <div>
        <Link href="/week2">Week 2</Link>
      </div>
    </main>
  )  
}

