'use client';
import AOS from 'aos';

import Hero from '@/app/components/Hero';
import { useEffect } from 'react';
import Features from './components/Features';
import Gallery from './components/Gallery';

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
    </>
  );
};

export default Page;
