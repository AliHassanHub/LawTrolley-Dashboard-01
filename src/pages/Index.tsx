import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SearchBanner } from "@/components/products/SearchBanner";
import { ProductTabs } from "@/components/products/ProductTabs";
import { ProductControls } from "@/components/products/ProductControls";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-[1417px] mx-auto">
            <SearchBanner />
            <div className="mt-8">
              <div className="flex gap-6">
                <aside className="w-[280px] shrink-0">
                  <ProductFilters />
                </aside>
                <section className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <ProductTabs />
                    <ProductControls />
                  </div>
                  <ProductGrid />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
