import { ToastContainer } from 'react-toastify';

import Container from './components/Container/Container';
import GalleryView from './components/GalleryView/GalleryView';

export default function App() {
  return (
    <Container>
      <GalleryView />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
