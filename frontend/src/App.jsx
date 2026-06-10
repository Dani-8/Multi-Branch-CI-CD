import React, { useState } from 'react';
import useMediaAPI from './components/hooks/useMediaAPI';
import EnvBanner from './components/ui/EnvBanner';
import Header from './components/ui/Header';
import Banner  from './components/ui/Banner';
import SearchControls from './components/SearchControls';
import WatchlistQuickAccess from './components/WatchlistQuickAccess';
import LoadingSpinner from './components/ui/LoadingSpinner';
import MediaGrid from './components/MediaGrid';
import MediaModal from './components/MediaModal';

export default function App() {
  // Consume our clean custom hook
  const {
    mediaList,
    search,
    setSearch,
    selectedType,
    setSelectedType,
    loading,
    environment,
    apiStatus,
    handleSearch
  } = useMediaAPI();


  // Keep local UI states inside App
  const [selectedItem, setSelectedItem] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (item) => {
    if (watchlist.some(w => w.id === item.id)) {
      setWatchlist(watchlist.filter(w => w.id !== item.id));
    } else {
      setWatchlist([...watchlist, item]);
    }
  }


  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-rose-500 selection:text-white">
      <EnvBanner environment={environment} />
      <Header apiStatus={apiStatus} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Banner />
        <SearchControls
          search={search}
          setSearch={setSearch}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          onSearch={handleSearch}
        />
        <WatchlistQuickAccess watchlist={watchlist} onToggle={toggleWatchlist} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <MediaGrid
            mediaList={mediaList}
            watchlist={watchlist}
            onToggleWatchlist={toggleWatchlist}
            onSelectDetails={setSelectedItem}
          />
        )}
      </main>

      <MediaModal
        item={selectedItem}
        isSaved={selectedItem && watchlist.some(w => w.id === selectedItem.id)}
        onClose={() => setSelectedItem(null)}
        onToggleWatchlist={toggleWatchlist}
      />
    </div>
  );
}