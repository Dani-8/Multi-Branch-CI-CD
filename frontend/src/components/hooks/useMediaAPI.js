import { useState, useEffect } from 'react';
import { LOCAL_MEDIA_DB } from '../data/mockData';

export default function useMediaAPI() {
  const [mediaList, setMediaList] = useState(LOCAL_MEDIA_DB);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(false);
  const [environment, setEnvironment] = useState('development (offline/local)');
  const [apiStatus, setApiStatus] = useState('Local Mode');

  const API_BASE_URL = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000'
      : typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    const pingBackend = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/media`);
        if (!response.ok) throw new Error('API unstable');
        const data = await response.json();
        setMediaList(data.results || LOCAL_MEDIA_DB);
        setEnvironment(data.environment || 'development');
        setApiStatus(`Connected: ${API_BASE_URL}`);
      } catch (err) {
        setMediaList(LOCAL_MEDIA_DB);
        setEnvironment('development (offline/local fallback)');
        setApiStatus('Local Fallback Mode');
      } finally {
        setLoading(false);
      }
    };
    pingBackend();
  }, [API_BASE_URL]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/media?search=${encodeURIComponent(search)}&type=${selectedType}`);
      if (!response.ok) throw new Error('API failed');
      const data = await response.json();
      setMediaList(data.results);
      setEnvironment(data.environment);
    } catch (err) {
      let results = LOCAL_MEDIA_DB;
      if (selectedType) results = results.filter(item => item.type === selectedType);
      if (search) results = results.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
      setMediaList(results);
    } finally {
      setLoading(false);
    }
  };

  return {
    mediaList,
    search,
    setSearch,
    selectedType,
    setSelectedType,
    loading,
    environment,
    apiStatus,
    handleSearch
  };
}