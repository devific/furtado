import { useState } from "react";
import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "./Hero";
import { WhoAreWe } from "./WhoAreWe";
import { CuratedExperiences } from "./CuratedExperiences";
import ShortBanner from "./ShortBanner";
import { TheVillas } from "./Villas";
import { Parallax } from "./Parallax";
import { Stats } from "./Stats";
import { TheExperience } from "./TheExperience";
import Location from "./Location";
import CTA from "./CTA";
import ImageCarousel from "./ImageCarousel";
import Dayouts from "./Dayouts";
import Reviews from "./Reviews";
import VideoCarouselSection from "./VideoCarousel";

export function Home() {
  return (
    <PageTransition>
      <Seo />
      <Hero />
      <VideoCarouselSection />
      <WhoAreWe />
      <ImageCarousel />
      <CuratedExperiences />
      <ShortBanner />
      <TheVillas />
      <Parallax />
      <Stats />
      <TheExperience />
      <Dayouts />
      <Location />
      <Reviews />
      <CTA />
    </PageTransition>
  );
}
