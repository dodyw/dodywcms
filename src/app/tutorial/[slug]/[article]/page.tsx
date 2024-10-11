import { getArticleData, getAllTutorials, getArticlesForTutorial } from '../../../../utils/markdown';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  const paths = [];

  for (const tutorial of tutorials) {
    const articles = getArticlesForTutorial(tutorial);
    for (const article of articles) {
      paths.push({
        slug: tutorial,
        article: article.slug,
      });
    }
  }

  return paths;
}

export default function ArticlePage({ params }: { params: { slug: string; article: string } }) {
  const articleData = getArticleData(params.slug, `${params.article}.md`);
  const articles = getArticlesForTutorial(params.slug);
  const currentIndex = articles.findIndex((a) => a.slug === params.article);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const tutorialTitle = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="max-w-3xl mx-auto">
      <nav className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          <li><Link href="/" className="text-blue-400 hover:text-blue-300">Home</Link></li>
          <li className="text-gray-400">/</li>
          <li><Link href={`/tutorial/${params.slug}`} className="text-blue-400 hover:text-blue-300">{tutorialTitle}</Link></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-300">{articleData.title}</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">{articleData.title}</h1>
      <div className="prose prose-invert prose-lg">
        <ReactMarkdown>{articleData.content}</ReactMarkdown>
      </div>
      <div className="mt-12 flex justify-between">
        {prevArticle && (
          <Link href={`/tutorial/${params.slug}/${prevArticle.slug}`} className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">
            ← {prevArticle.title}
          </Link>
        )}
        {nextArticle && (
          <Link href={`/tutorial/${params.slug}/${nextArticle.slug}`} className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">
            {nextArticle.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
