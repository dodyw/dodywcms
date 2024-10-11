import TutorialList from '../components/TutorialList';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">Coding Tutorials</h1>
      <TutorialList />
    </main>
  );
}
