import Link from "next/link";

export default function StudentInfo() {
    const name = 'Kyle Castillo';
    const section = 'CPRG 306 E';
    const githubRepository =  <Link href="https://github.com/Kyle-Castillo?tab=repositories">Github Repository</Link>;

return (

    <main id ='studentInfo'> 
        <p>
            Name: {name}
        </p>
        <p>
            Course Section: {section}
        </p>
        <p>
            {githubRepository}
        </p>
    </main>
);
}
