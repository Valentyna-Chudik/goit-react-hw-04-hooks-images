import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import GalleryView from './components/GalleryView/GalleryView';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <Searchbar onSubmit={setQuery} />
      <GalleryView query={query} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
