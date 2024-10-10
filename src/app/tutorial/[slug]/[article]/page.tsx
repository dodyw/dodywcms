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

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{articleData.title || params.article.replace(/_/g, ' ')}</h1>
      <div className="prose prose-lg">
        <ReactMarkdown>{articleData.content}</ReactMarkdown>
      </div>
      <div className="mt-8 flex justify-between">
        {prevArticle && (
          <Link href={`/tutorial/${params.slug}/${prevArticle.slug}`} className="text-blue-500 hover:underline">
            ← Previous: {prevArticle.title || prevArticle.slug.replace(/_/g, ' ')}
          </Link>
        )}
        {nextArticle && (
          <Link href={`/tutorial/${params.slug}/${nextArticle.slug}`} className="text-blue-500 hover:underline">
            Next: {nextArticle.title || nextArticle.slug.replace(/_/g, ' ')} →
          </Link>
        )}
      </div>
      <div className="mt-8">
        <Link href={`/tutorial/${params.slug}`} className="text-blue-500 hover:underline">
          Back to Tutorial
        </Link>
      </div>
    </div>
  );
}
