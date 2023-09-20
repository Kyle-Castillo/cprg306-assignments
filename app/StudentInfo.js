import Link from "next/link";

export default function StudentInfo() {
return (
    <main id ='studentInfo'> 
        <p>
            Name: Kyle Castillo
        </p>
        <p>
            Course Section: CPRG 306 E
        </p>
        <p>
            <Link href="https://github.com/Kyle-Castillo?tab=repositories"> Github Repository </Link>
        </p>
    </main>
);
}
