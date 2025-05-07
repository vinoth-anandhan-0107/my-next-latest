'use client';

import { Button } from 'antd';

export default function Home() {
  const helloClicked = () => {
    console.log("hello clicked");

  }
  return (
    <>
      <Button type="primary" onClick={helloClicked}>
        Hello
      </Button>
      <Button type="primary">word</Button>
    </>
  );
}
