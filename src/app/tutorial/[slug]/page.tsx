import { getArticlesForTutorial, getAllTutorials } from '../../../utils/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((tutorial) => ({
    slug: tutorial,
  }));
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const articles = getArticlesForTutorial(params.slug);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">
        {params.slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
      </h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Link href={`/tutorial/${params.slug}/${article.slug}`} className="block p-6 hover:bg-gray-700 transition duration-150 ease-in-out">
              <h2 className="text-xl font-semibold text-white">{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">
          ← Back to Tutorials
        </Link>
      </div>
    </div>
  );
}
