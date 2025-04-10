import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Get started by creating an account or signing in to access your dashboard.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/signup">
              Get started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}