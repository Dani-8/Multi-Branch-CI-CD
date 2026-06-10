export default function MediaModal({ item, isSaved, onClose, onToggleWatchlist }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold">&times;</button>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{item.image}</span>
          <div>
            <span className="text-xs bg-rose-500/10 text-rose-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{item.type}</span>
            <h3 className="text-2xl font-black text-white mt-1">{item.title}</h3>
          </div>
        </div>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {item.desc || "No comprehensive description available. This movie/anime is highly rated by the community."}
        </p>

        <div className="grid grid-cols-2 gap-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-6 text-xs">
          <div>
            <span className="text-slate-500 block mb-0.5">Genre</span>
            <span className="text-slate-300 font-semibold">{item.genre || "Drama, Action"}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Community Score</span>
            <span className="text-amber-400 font-bold">★ {item.rating.toFixed(1)} / 10</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button 
            onClick={() => { onToggleWatchlist(item); onClose(); }}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold transition"
          >
            {isSaved ? 'Remove From Watchlist' : 'Add to Watchlist'}
          </button>
          <button onClick={onClose} className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}