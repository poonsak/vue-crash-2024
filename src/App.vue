<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/jobListings.vue'
</script>

<template>
  <Navbar />
  <!-- <Hero title="Test title" subTitle="Test SubTitle" /> -->
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>