import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const TutorialList = () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const tutorials = fs.readdirSync(dataDirectory);

  return (
    <div>
      <h1>Coding Tutorials</h1>
      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial}>
            <Link href={`/tutorial/${tutorial}`}>
              {tutorial.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
