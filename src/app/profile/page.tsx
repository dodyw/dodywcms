import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Dody Rachmat Wicaksono</h1>
      <p className="text-xl mb-6">Software Engineer & Tech Enthusiast</p>
      
      <div className="mb-8">
        <p className="mb-4">
          I'm passionate about creating efficient, scalable software solutions and exploring new technologies. 
          With years of experience in various programming languages and frameworks, I enjoy tackling complex 
          problems and turning ideas into reality.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Company</h2>
      <p className="mb-4">
        I'm the founder of <Link href="https://www.nicecoder.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PT Nicecoder Solusi Digital</Link>, 
        a software development company registered in Indonesia.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Connect with me:</h2>
      <ul className="space-y-2">
        <li>
          <Link href="https://github.com/dodyw" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/dodywicaksono/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://www.upwork.com/freelancers/~018f6e3fb1e900e943" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Upwork
          </Link>
        </li>
      </ul>
    </div>
  );
}
