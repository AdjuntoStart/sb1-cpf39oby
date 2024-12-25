import { Headphones } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 text-center space-y-6">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Headphones className="w-12 h-12 text-primary" />
          <h1 className="text-5xl font-bold tracking-tight text-primary">K Vox</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Welcome to K Vox
        </p>
      </div>
    </main>
  );
}