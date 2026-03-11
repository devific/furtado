"use client";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect, Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy imports assume default export in each page
const Home = lazy(() => import("@/pages/Home"));
const TheVillas = lazy(() => import("@/pages/TheVillas"));
const VillaDetail = lazy(() => import("@/pages/VillaDetail"));
const PoolAndGrounds = lazy(() => import("@/pages/PoolAndGrounds"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-[300px] w-full rounded-xl" />
      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
    </div>
  );
}

export default function Router() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<PageSkeleton />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<TheVillas />} />
            <Route path="/villas/:id" element={<VillaDetail />} />
            <Route path="/pool" element={<PoolAndGrounds />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
