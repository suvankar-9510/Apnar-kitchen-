/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import DishOfTheDay from './components/DishOfTheDay';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import AIChat from './components/AIChat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <DishOfTheDay />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      
      <Footer />
      <MobileNav />
      <AIChat />
    </div>
  );
}

