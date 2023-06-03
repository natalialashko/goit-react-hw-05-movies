// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MoviesPages from './pages/MoviesPages';
import Layout from './Layout/Layout';
import MoviesDetails from './API/MoviesDetails/MoviesDetails';
import Cast from './API/MoviesDetails/Cast';
import Reviews from './API/MoviesDetails/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="movies" element={<MoviesPages />} />
        <Route path="movies/:moviesId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
