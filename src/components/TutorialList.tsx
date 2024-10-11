import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const TutorialList = () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const tutorials = fs.readdirSync(dataDirectory);

  return (
    <div className="w-full max-w-2xl">
      <ul className="space-y-4">
        {tutorials.map((tutorial) => (
          <li key={tutorial} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Link href={`/tutorial/${tutorial}`} className="block p-6 hover:bg-gray-700 transition duration-150 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">
                {tutorial.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              </h2>
              <p className="text-gray-400">
                Click to view articles
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
