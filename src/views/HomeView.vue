<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
const targetEl = ref()

useMotion(targetEl, {
    initial: { opacity: 0, scale: 0.5 },
    visibleOnce: { opacity: 1, scale: 1, transition: { delay: 350, damping: 25 } },
})
</script>

<template>
    <div v-motion-fade-visible-once id="bg-cover-home" class="flex flex-row justify-center items-center">
        <div class="hero min-h-screen">
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome to GBC</h1>
                    <p class="mb-5">
                        Christ centered counsiling, fellowship, worship, and more.
                    </p>
                    <button @click="scrollToSection" class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1721013309">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25" class="shape-fill"></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5" class="shape-fill"></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"></path>
            </svg>
        </div>
    </div>

    <div id="scrollSection" class="flex flex-col justify-center">
        <div class="mt-10 relative">
            <div class="container mx-auto my-10 place-items-center relative">
                <div ref="targetEl" class="p-5 relative">
                    <span
                        class="before:absolute before:-inset-5 before:right-0 before:bottom-5 before:bg-primary before:opacity-35 before:blur-2xl relative inline-block">
                        <!-- <img src="../assets/images/Exterior/Entrancewalk.jpg" alt="Image"
                            class="rounded-lg shadow-xl outline outline-primary outline-4 relative"> -->
                        <video src="../videos/JoinUs.mp4" autoplay loop muted class="rounded-lg shadow-xl outline outline-primary outline-4 relative"></video>
                    </span>
                    <span class="before:absolute before:bg-black before:-inset-1 before:scale-75 before:rounded-full before:opacity-20 before:blur-3xl">
                        <h1 class="text-5xl text-neutral-content font-bold relative centered p-5 rounded">Join
                            us for Service</h1>
                    </span>
                </div>
                <div class="p-5 flex flex-col">
                    <h2 class="text-3xl font-bold mb-4">Service Hours</h2>
                    <div class="flex max-sm:overflow-x-scroll">
                        <span v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 200, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}"
                            class="before:absolute before:bg-primary md:before:-inset-0.5 before:scale-75 before:blur-2xl relative transition ease-in-out delay-150 hover:scale-110">
                            <div v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}" class="p-5 bg-base-100 outline outline-primary m-3 relative">
                                <h3 class="text-2xl font-bold">Sunday</h3>
                                <ul class="list-square pl-6">
                                    <li>Sunday School 9:45 am</li>
                                    <li>Morning Worship 11:00 am</li>
                                </ul>
                            </div>
                        </span>
                        <span v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}"
                            class="before:absolute before:bg-primary md:before:-inset-0.5 before:scale-75 before:blur-2xl relative transition ease-in-out delay-150 hover:scale-110">
                            <div v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}" class="p-5 bg-base-100 outline outline-primary m-3 relative">
                                <h3 class="text-2xl font-bold">Wednesday</h3>
                                <ul class="list-square pl-6">
                                    <li>Prayer Time 6:30-6:50pm</li>
                                    <li>Bible Study 7:00pm-7:45pm</li>
                                </ul>
                            </div>
                        </span>
                        <span v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}"
                            class="before:absolute before:bg-primary md:before:-inset-0.5 before:scale-75 before:blur-2xl relative transition ease-in-out delay-150 hover:scale-110">
                            <div v-motion :initial="{ opacity: 0, scale: 0.5}" :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 600, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}" class="p-5 bg-base-100 outline outline-primary m-3 relative">
                                <h3 class="text-2xl font-bold">Friday</h3>
                                <ul class="list-square pl-6">
                                    <li>Prayer Time 10:00-10:20am</li>
                                    <li>Bible Study 10:30-11:15am</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1721225416">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>

        <div class="flex flex-row justify-center items-center py-10 bg-base-300 relative">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div class="p-5 flex flex-col items-center">
                    <h2 class="text-3xl font-bold mb-4">Our Services</h2>
                    <ul class="list-square pl-6">
                        <li>Counseling</li>
                        <li>Men & Womens Bible Study</li>
                        <li>Sunday Worship & Baptismal</li>
                        <li>Childrens Ministry</li>
                        <li>Music Ministry</li>
                        <li>And much more</li>
                    </ul>
                    <RouterLink @click="scrollToTop" to="/services" class="btn btn-primary mt-5">Learn More</RouterLink>
                </div>
                <div class="p-5">
                    <img src="..\assets\images\Group\199A1535.jpg" alt="Image"
                        class="rounded-lg shadow-xl outline outline-primary outline-4">
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1721228000">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center my-10">
            <div class="p-5">
                <img src="..\assets\images\Pastor\pastor.jpg" alt="Image"
                    class="rounded-lg shadow-xl outline outline-primary outline-4">
            </div>
            <div class="p-5">
                <h2 class="text-3xl font-bold mb-4">Meet our Pastor</h2>
                <p class="text-lg mb-4 flex">Rev. <p class="italic">Gordon Wesley Young .Jr</p></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, neque omnis nam commodi natus dicta
                    accusantium ullam eaque quia ipsum ducimus perspiciatis nisi delectus repudiandae, quasi atque totam
                    deserunt esse?</p>
                <RouterLink @click="scrollToTop" to="/members" class="btn btn-primary mt-5">Learn More</RouterLink>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.handleParallax);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleParallax);
    },
    methods: {
        handleParallax() {
            const parallaxElement = document.getElementById('bg-cover-home');
            const scrolledHeight = window.pageYOffset;
            const limit = parallaxElement.offsetTop + parallaxElement.offsetHeight;
            if (scrolledHeight > parallaxElement.offsetTop && scrolledHeight <= limit) {
                parallaxElement.style.backgroundPositionY = (scrolledHeight - parallaxElement.offsetTop) / 1.5 + 'px';
            } else {
                parallaxElement.style.backgroundPositionY = '0';
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
            });
        },
        scrollToSection() {
            const servicesSection = document.getElementById('scrollSection');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>