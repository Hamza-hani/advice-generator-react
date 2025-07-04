import './AdviceCard.css';

function AdviceCard({ advice, loading, onNewAdvice }) {
  return (
    <div className="card">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="icon">💡</div>
          <p className="advice fade-in">"{advice}"</p>
        </>
      )}
      <button onClick={onNewAdvice} disabled={loading}>
        Get New Advice
      </button>
    </div>
  );
}

export default AdviceCard;
