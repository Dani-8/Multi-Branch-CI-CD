export default function MediaCard({ item, isSaved, onToggleWatchlist, onSelectDetails }) {
    return (
        <div className="group bg-slate-900/40 border border-slate-900/80 hover:border-rose-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl">{item.image || '🎬'}</span>
                    <span className="bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {item.type}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {item.title}
                </h3>

                <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                    {item.desc || 'Explore details, user ratings, and recommendations on CineWave.'}
                </p>
            </div>


            <div className="pt-4 border-t border-slate-900/85 flex justify-between items-center">
                <span className="text-amber-400 font-bold text-sm flex items-center gap-1">
                    ★ {item.rating ? item.rating.toFixed(1) : 'N/A'}
                </span>

                <div className="flex gap-2">
                    <button
                        onClick={() => onToggleWatchlist(item)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${isSaved
                            ? 'bg-rose-600/20 border-rose-500/40 text-rose-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        {isSaved ? 'Saved' : '+ Watchlist'}
                    </button>

                    <button
                        onClick={() => onSelectDetails(item)}
                        className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg transition"
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}