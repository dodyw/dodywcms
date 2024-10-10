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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{params.slug.replace(/-/g, ' ')}</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/tutorial/${params.slug}/${article.slug}`} className="text-blue-500 hover:underline">
              {article.title || article.slug.replace(/_/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Tutorials
        </Link>
      </div>
    </div>
  );
}
