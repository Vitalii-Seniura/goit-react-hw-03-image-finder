import React from 'react';
import PropTypes from 'prop-types';
// import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { image } = this.props;
    return (
      <li className={css.galleryItem}>
        <img
          src={image.webformatURL}
          alt=""
          className={css.galleryItemImage}
          onClick={this.toggleModal}
        />
        {/* {this.state.showModal && (
          <Modal image={image} onClose={this.toggleModal} />
        )} */}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  isModalOpen: PropTypes.bool,
};
