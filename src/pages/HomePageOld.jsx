// import React, { useState, useEffect } from 'react';
// import './HomePage.css';

// function HomePage() {
//   const [title, setTitle] = useState('');
//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const titles = ['launch to space', 'open my eyes', 'see the world', 'blow my mind'];
//     const interval = setInterval(() => {
//       setSlideIndex((slideIndex) => (slideIndex + 1) % 2);
//       setTitle(titles[Math.floor(Math.random() * titles.length)]);
//     }, 1500);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const handleLearnMore = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       left: 0,
//       behavior: 'smooth'
//     });
//   };


//   return (
//     <div className="HomePage">
//       <div style={{ 
//         height: '100vh',
//         display: 'flex',
//         backgroundColor: 'black',
//         color: 'white',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         width: '100%',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         overflow: 'hidden',
//       }}>
//         <h1 className="HomePage-title">Ready to</h1>
//         <h1 className="HomePage-title">{title}</h1>
//         <div className="HomePage-learn-more" onClick={handleLearnMore}>
//           <i className="fa fa-chevron-down"></i>
//         </div>
//       </div>

      
      
//     </div>
//   );
// }

// export default HomePage;
