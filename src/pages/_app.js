import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
        background: 'linear-gradient(135deg,#111,#222)', color: '#fff'
      }}>
        <div style={{textAlign:'center'}}>
          <div className="css-spinner" />
          <p style={{marginTop:12}}>Loading...</p>
        </div>
        <style>{`
          .css-spinner {
            width:72px;
            height:72px;
            border-radius:50%;
            border:8px solid rgba(255,255,255,0.12);
            border-top-color: #ff6a00;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
