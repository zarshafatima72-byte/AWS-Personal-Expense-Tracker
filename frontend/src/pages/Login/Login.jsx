import { useState } from "react";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <Card>
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Sign in to your Expense Tracker
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            text="Login"
          />

        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </Card>
    </div>
  );
}

export default Login;