import ThreeDCard from './components/ThreeDCard';

function App() {
  const headingStyle = { color: 'white', textAlign: 'center' };
  return (
    <div>
      <h1 style={headingStyle}>My 3D ID Card</h1>
      <ThreeDCard />
    </div>
  );
}

export default ThreeDCard;
