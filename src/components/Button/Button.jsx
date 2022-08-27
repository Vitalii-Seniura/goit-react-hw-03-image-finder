// // При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень
//  і рендеритися разом із попередніми.Кнопка повинна рендеритися лише тоді,
//     коли є якісь завантажені зображення.Якщо масив зображень порожній, кнопка не рендериться.
// import React from 'react';
// import css from './Button.module.css';
// import PropTypes from 'prop-types';

// export class Button extends React.Component {
//   render() {
//     return (
//       <div className={css.btn_container}>
//         <button type="button" className={css.button} onClick={onClick}>
//           Load more
//         </button>
//       </div>
//     );
//   }
// }
// Button.propTypes = {
//   onClick: PropTypes.func,
// };

import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <div className={css.btn_container}>
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  </div>
);
Button.propTypes = {
  onClick: PropTypes.func,
};
