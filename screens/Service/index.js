import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Stack from "./Stack";

// import LatestPosts from "./LatestPosts";
import Process from "screens/Projects/Process";
import Testimonials from "screens/Projects/Testimonials";
import Companies from "screens/Projects/Companies";
import ContactForm from "screens/Contact/ContactForm";

import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <Layout>
      {/* <Hero /> */}
      <Services />
      {/* <Process /> */}
      {/* <Stack /> */}
      {/* <Introduction /> */}
      
      {/* <LatestPosts /> */}
      {/* <Testimonials /> */}
      {/* <Companies /> */}
      {/* <ContactForm /> */}

      <CTA />
    </Layout>
  );
}
