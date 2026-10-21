import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an authentication API
    setError(null);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        // Successful login
        window.location.href = '/';
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <section id="login" className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-xs space-y-6 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-main-text">
            Sign in to ATS
          </h2>
          <p className="text-secondary-text">
            Access your athlete performance dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Email
            </label>
            <div className="flex items-center space-x-2 bg-card-background/50 border border-border rounded-xl px-3 py-2">
              <Mail className="h-4 w-4 text-secondary-text" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-main-text placeholder:text-secondary-text focus:outline-none"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Password
            </label>
            <div className="flex items-center space-x-2 bg-card-background/50 border border-border rounded-xl px-3 py-2">
              <Lock className="h-4 w-4 text-secondary-text" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex-1 bg-transparent text-main-text placeholder:text-secondary-text focus:outline-none"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-attention-indicator">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center space-y-3">
          <p className="text-secondary-text">
            Don't have an account?{' '}
            <a href="/register" className="text-primary-blue hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-xs text-secondary-text">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;