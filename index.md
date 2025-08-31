---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MHCalendar"
  text: "A Powerful and Fully Customizable Calendar Component"
  tagline: Built with StencilJS for any framework, or no framework at all.
  image:
    src: /icon.png
    alt: MHCalendar component showing a week view with events
  actions:
    - theme: brand
      text: Get Started
      link: /installation 
    - theme: alt
      text: View on GitHub
      link: https://github.com/MH-Calendar

features:
  - icon: 🗓️
    title: Multiple Views
    details: Seamlessly switch between Day, Week, and Month layouts to give users the perfect perspective for their schedule.
  - icon: ⚡️
    title: Intuitive Drag & Drop
    details: Empower users to create, move, and resize events directly on the calendar for a fast and fluid experience.
  - icon: 🎨
    title: Highly Customizable
    details: Style every aspect of the calendar with standard CSS or dynamically using CSS-in-JS to perfectly match your brand.
  - icon: 🧩
    title: Framework Agnostic
    details: Use it as a native Web Component in any project, with or without a framework. Wrappers for React and others available.
---


<style>
.custom-layout {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 4rem 0; 
  padding: 0 24px;
}

.custom-layout .image-column,
.custom-layout .text-column {
  flex: 1; 
  min-width: 0;
}

.custom-layout .image-column img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.custom-layout .text-column h2 {
  font-size: 2.2em;
  font-weight: 700;
  border-bottom: none; 
  margin-top: 0;
}

.custom-layout .text-column p {
  font-size: 1.1em;
  line-height: 1.7;
  color: var(--vp-c-text-2); 
}

@media (max-width: 768px) {
  .custom-layout {
    flex-direction: column; 
    text-align: center;
  }
}
</style>

<div class="vp-doc">
  <div class="custom-layout">
    <div class="image-column">
      <img src="/example.png" alt="A detailed view of an event in MHCalendar">
    </div>
    <div class="text-column">
      <h2>Ready for a Modern Scheduling Experience?</h2>
      <p>
        Stop wrestling with complex calendar logic. MHCalendar provides a robust, out-of-the-box solution that saves you development time while offering a premium user experience. It's built to be flexible, performant, and a pleasure to integrate.
      </p>
      <a href="/mh-calendar-docs/installation.html" class="VPButton brand">Start Building Now</a>
    </div>
  </div>
</div>