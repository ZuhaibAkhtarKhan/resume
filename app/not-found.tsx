import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-semibold text-ink-100">404</h1>
      <p className="mt-2 text-sm text-ink-400">page not found.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md px-4 py-2 text-xs text-accent-blue ring-1 ring-accent-blue/30 transition-colors hover:bg-accent-blue/10"
      >
        ← back home
      </Link>
    </main>
  );
}
