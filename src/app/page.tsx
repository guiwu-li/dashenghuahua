'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyBar from '@/components/layout/StickyBar';
import Modal from '@/components/ui/Modal';

import Hero from '@/components/sections/Hero';
import WhyUs from '@/components/sections/WhyUs';
import CourseSystem from '@/components/sections/CourseSystem';
import TeachingMethod from '@/components/sections/TeachingMethod';
import Gallery from '@/components/sections/Gallery';
import Teachers from '@/components/sections/Teachers';
import Pricing from '@/components/sections/Pricing';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() { setModalOpen(true); }
  function closeModal() { setModalOpen(false); }

  return (
    <>
      <Navbar onCtaClick={openModal} />

      <main>
        <Hero onCtaClick={openModal} />
        <WhyUs />
        <CourseSystem />
        <TeachingMethod />
        <Gallery />
        <Teachers />
        <Pricing onCtaClick={openModal} />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
      <StickyBar onCtaClick={openModal} />

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
