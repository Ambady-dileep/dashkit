export default function Loader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      zIndex: 9999
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, transparent 0%, #49eb03 100%)',
        WebkitMask: 'radial-gradient(circle, transparent 60%, black 61%)',
        mask: 'radial-gradient(circle, transparent 60%, black 61%)',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}