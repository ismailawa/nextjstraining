import React from 'react';
import Image from 'next/image';

function ImageScreen({ src }: any) {
  return (
    <div className=' lg:flex  w-1/2 hidden bg-gray-300 relative'>
      <Image src={src} alt='login' fill />
    </div>
  );
}

export default ImageScreen;
