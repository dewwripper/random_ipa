import type { NextPage } from 'next'
import Card from '../components/card'
import { useEffect, useState } from 'react'
import { Form } from '../components/form';

const Home: NextPage = () => {
  const [spawnedComponents, setSpawnedComponents] = useState<JSX.Element[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const spawnComponent = () => {
    let x = Math.floor(Math.random() * 1366 - 300)
    let y = Math.floor(Math.random() * 768 - 200)
    setSpawnedComponents([<Card posx={x > 0 ? x : 0}
      posy={y > 0 ? y : 0}
      key={Date.now()} color='red' symbol='e'></Card>]);
  };
  useEffect(() => {
    if (flag) {
      const interval = setInterval(spawnComponent, 1000);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };

      // Set initial width and height
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      // Add event listener to update width and height on window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }

  }, []);

  return (
    <div className='relative'>
      {flag ? spawnedComponents : (<Form></Form>)}
    </div>
  );
}

export default Home
