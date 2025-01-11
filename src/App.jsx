import { useState } from 'react';
    import './index.css';

    function App() {
      const [email, setEmail] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted email: ${email}`);
      };

      return (
        <div className="container">
          <h1>Email Form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    export default App;
