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
      <div>
        <Link href="/week3">Week 3</Link>
      </div>
      <div>
        <Link href="/week4">Week 4</Link>
      </div>
      <div>
        <Link href="/week5">Week 5</Link>
      </div>
      <div>
        <Link href="/week6">Week 6</Link>
      </div>
      <div>
        <Link href="/week7">Week 7</Link>
      </div>
    </main>
  )  
}

