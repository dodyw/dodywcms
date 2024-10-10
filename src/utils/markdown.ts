import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getArticleData(tutorialSlug: string, fileName: string) {
  const fullPath = path.join(process.cwd(), 'data', tutorialSlug, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Extract the number and capitalize the first letter of each word
  const title = fileName
    .replace(/^article(\d+)_/, '$1. ')
    .replace(/\.md$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    slug: fileName.replace(/\.md$/, ''),
    title,
    content,
    ...data,
  };
}

export function getArticlesForTutorial(tutorialSlug: string) {
  const tutorialPath = path.join(process.cwd(), 'data', tutorialSlug);
  const fileNames = fs.readdirSync(tutorialPath);

  return fileNames
    .map((fileName) => getArticleData(tutorialSlug, fileName))
    .sort((a, b) => {
      const aNum = parseInt(a.slug.match(/^article(\d+)/)?.[1] || '0');
      const bNum = parseInt(b.slug.match(/^article(\d+)/)?.[1] || '0');
      return aNum - bNum;
    });
}

export function getAllTutorials() {
  const dataDirectory = path.join(process.cwd(), 'data');
  return fs.readdirSync(dataDirectory);
}
