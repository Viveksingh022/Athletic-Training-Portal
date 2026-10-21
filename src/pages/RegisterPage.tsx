import { useState } from 'react';
import { Mail, Lock, UserPlus } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError(null);
    setSuccess(null);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would call a registration API
      setSuccess('Account created successfully! You can now sign in.');
      setIsLoading(false);
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, 1500);
  };

  return (
    <section id="register" className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-xs space-y-6 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-main-text">
            Create your ATS account
          </h2>
          <p className="text-secondary-text">
            Join teams using biomechanical insights to improve performance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Full Name
            </label>
            <div className="flex items-center space-x-2 bg-card-background/50 border border-border rounded-xl px-3 py-2">
              <UserPlus className="h-4 w-4 text-secondary-text" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="flex-1 bg-transparent text-main-text placeholder:text-secondary-text focus:outline-none"
                disabled={isLoading}
              />
            </div>
          </div>

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
                placeholder="Create a password"
                className="flex-1 bg-transparent text-main-text placeholder:text-secondary-text focus:outline-none"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Confirm Password
            </label>
            <div className="flex items-center space-x-2 bg-card-background/50 border border-border rounded-xl px-3 py-2">
              <Lock className="h-4 w-4 text-secondary-text" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
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

          {success && (
            <p className="text-sm text-primary-blue">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center space-y-3">
          <p className="text-secondary-text">
            Already have an account?{' '}
            <a href="/login" className="text-primary-blue hover:underline">
              Sign in
            </a>
          </p>
          <p className="text-xs text-secondary-text">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;