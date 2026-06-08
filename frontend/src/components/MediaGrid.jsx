import MediaCard from './MediaCard'

export default function MediaGrid({ mediaList, watchlist, onToggleWatchlist, onSelectDetails }) {
    if (mediaList.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-slate-500 text-lg">No media found matching those parameters.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaList.map(item => (
                <MediaCard
                    key={item.id}
                    item={item}
                    isSaved={watchlist.some(w => w.id === item.id)}
                    onToggleWatchlist={onToggleWatchlist}
                    onSelectDetails={onSelectDetails}
                />
            ))}
        </div>
    )
}