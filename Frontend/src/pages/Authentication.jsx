import { useState } from "react";

function App() {
  return (
    <div className="container">
      <h1>Authentication</h1>
      <AuthForms />
      <ContactForm />
    </div>
  );
}

function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Sign Up" : "Go to Login"}
      </button>
    </div>
  );
}

function SignupForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message || "Login Successful!");
    if (data.token) localStorage.setItem("token", data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email or Username" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", title: "", message: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="text" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input type="text" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
