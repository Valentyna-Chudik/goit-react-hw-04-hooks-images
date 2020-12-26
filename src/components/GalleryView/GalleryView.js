import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import imagesApi from '../../services/images-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import LoaderSpinner from '../Loader/Loader';
import Section from '../Section/Section';
import Searchbar from '../Searchbar/Searchbar';
import Modal from '../Modal/Modal';

export default function GalleryView() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    const searchImages = () => {
      const options = { query, currentPage };

      setIsLoading(true);
      imagesApi
        .fetchImages(options)
        .then(hits => {
          setImages(prevImages => [...prevImages, ...hits]);

          if (hits.length === 0) {
            toast.error('Nothing was found');
            return;
          }
        })
        .catch(error => error)
        .finally(() => setIsLoading(false));
    };
    searchImages();
  }, [currentPage, query]);

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
    scrollPage();
  };

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: 'smooth',
      });
    }, 500);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    setAlt(e.target.alt);
    toggleModal();
  };

  const handleFormSubmit = newQuery => {
    if (newQuery !== query) {
      setImages([]);
      setQuery(newQuery);
      setCurrentPage(1);
    }
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onClick={onOpenModal} />
      {showModal && (
        <Modal largeImgURL={largeImageURL} alt={alt} onClose={toggleModal} />
      )}
      {isLoading && <LoaderSpinner />}
      <Section>
        {shouldRenderLoadMoreBtn && <Button onLoadMore={onLoadMore} />}
      </Section>
    </div>
  );
}
