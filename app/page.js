import React from 'react';
import StudentInfo from './StudentInfo';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <div>
        <h1> CPRG 306: Web Development 2 - Assignments </h1>
        <StudentInfo />
        <ul>
          {weekAssignments.map((week) =>
           week <= doneAssignments ? (
          <li key={week}>
              <Link href={`/week${week}`}>Week {week} Assignment</Link>
          </li>
           ) : (
            <li key={week}>
             T_T Week {week} Assignment
            </li>
           )
          )}
        </ul>
      </div>
    </main>
  )  
}

