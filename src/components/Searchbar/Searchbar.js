// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import styles from './Searchbar.module.css';

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.query.trim() === '') {
//       toast.warning('Enter your query');
//       return;
//     }

//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className={styles.searchbar}>
//         <form className={styles.searchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={styles.searchFormButton}>
//             <span className={styles.searchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={styles.searchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.warning('Enter your query');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
