<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
const targetEl = ref()

useMotion(targetEl, {
  rotate: [0, 360],
  scale: [1, 1.5],
  x: [0, 100],
  y: [0, 100],
  duration: 1000,
  repeat: Infinity,
  repeatType: 'reverse',
})
</script>

<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/services">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/members">Members</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink to="/" class="btn btn-ghost text-xl">Glasgow Baptist Church</RouterLink>
    </div>
    <div class="navbar-end">
      <label class="flex cursor-pointer min-w-6 gap-2 absolute top-20 right-5 text-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input type="checkbox" value="night" class="toggle theme-controller" />
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  </div>

  <RouterView />

  <footer class="footer bg-base-300 text-base-content p-10">
    <nav>
      <h6 class="footer-title">Our Church</h6>
      <a class="link link-hover">Counseling</a>
      <a class="link link-hover">Services</a>
      <a class="link link-hover">Members</a>
    </nav>
    <nav>
      <h6 class="footer-title">Contact</h6>
      <a class="link link-hover" href="https://maps.app.goo.gl/dwAVc1VnnLegif9a9">805 10th St, Glasgow, VA 24555</a>
      <a class="link link-hover" href="tel:4343731342">Pastor: 434-373-1342</a>
      <a class="link link-hover" href="tel:4343731466">General Info: 434-373-1466</a>
    </nav>
    <nav>
      <h6 class="footer-title">Follow Us</h6>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.youtube.com/@glasgowbaptistchurch9917/featured" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
            </path>
          </svg>
        </a>
        <a href="https://www.facebook.com/GlasgowBaptistChurch/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
            </path>
          </svg>
        </a>
      </div>
    </nav>
    <form class="container">
      <h6 class="footer-title">Newsletter</h6>
      <label class="label">
        <p class="label-text text-wrap">Subscribe for latest news and announcements</p>
      </label>
      <div class="join">
        <a class="btn btn-primary join-item" href="http://eepurl.com/iaUbTb" target="_blank">Subscribe</a>
      </div>
    </form>
  </footer>
</template>

<script>

</script>