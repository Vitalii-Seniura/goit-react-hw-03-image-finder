import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { fetchImage } from 'components/imageApi';

export class ImageGallery extends React.Component {
  state = {
    images: [],
    error: null,
    status: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending', page: 1, image: [] });
      fetchImage(nextName, this.state.page)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ status: 'rejected' }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      fetchImage(nextName, this.state.page)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }))
        )
        .catch(error => this.setState({ status: 'rejected' }));
    }
    if (this.state.images === []) {
      this.setState({ status: 'rejected' });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loader, error, images, status } = this.state;
    if (status === 'pending') {
      return <Loader loader={loader} />;
    }
    if (status === 'rejected') {
      <h2>{error.messange}</h2>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className={css.gallery}>
            {images.map(image => (
              <ImageGalleryItem image={image} key={image.id} />
            ))}
          </ul>
          <Button onClick={this.loadMore}>Load more</Button>
          {/* <Button onClick={this.loadMore} /> */}
        </div>
      );
    }
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  status: PropTypes.string,
  page: PropTypes.number,
};
