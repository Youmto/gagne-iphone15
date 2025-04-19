
import { useState } from 'react';

export default function Participer() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci pour votre participation, ${nom}!`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Inscription pour gagner un iPhone 15</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input 
            type="text" 
            value={nom} 
            onChange={(e) => setNom(e.target.value)} 
            required 
            style={{ padding: '8px', margin: '10px 0', fontSize: '16px' }} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ padding: '8px', margin: '10px 0', fontSize: '16px' }} 
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Participer</button>
      </form>
    </div>
  );
}
