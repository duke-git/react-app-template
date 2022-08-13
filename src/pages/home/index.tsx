import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import reactLogo from '@assets/react.svg';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-content-center h-screen text-center text-lg">
      <div className="flex mx-auto items-center gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="w-28" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-32 animate-spin [animation-duration:10s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-20 font-semibold text-6xl">Vite + React</h1>
      <h3 className="font-semibold">count is {count}</h3>
      <div>
        <Button
          className="inline-flex items-center rounded-md"
          size="large"
          icon={<AlertOutlined />}
          onClick={() => setCount((count) => count + 1)}
        >
          增加count值
        </Button>
      </div>
    </div>
  );
};

export default Home;
