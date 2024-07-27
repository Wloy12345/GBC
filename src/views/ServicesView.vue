<template>
    <div v-motion-fade-visible-once id="bg-cover-services" class="flex flex-row justify-center items-center">
        <div class="hero min-h-screen">
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Our Services</h1>
                    <p class="mb-5">
                        Serving the community with love and care. We offer a variety of services to help you grow in
                        your faith.
                    </p>
                    <button @click="scrollToSection" class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1721529956">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
    <div id="scrollSection" class="flex flex-col justify-center">
        <div class="mt-10">
            <div class="flex justify-center mb-5">
                <h1 class="font-bold text-3xl">Services We Offer</h1>
            </div>
            <div class="flex p-4 max-lg:overflow-x-scroll lg:justify-center my-5">
                <span v-motion :initial="{ opacity: 0, scale: 0.5 }"
                    :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }"
                    class="relative before:absolute before:-inset-1 lg:before:bg-primary before:blur-2xl before:scale-75">
                    <div
                        class="my-10 rounded relative flex flex-col justify-evenly items-center mx-5 outline outline-primary p-3 bg-base-100 hover:scale-125 hover:z-10 hover:transition hover:duration-300 hover:ease-in-out">
                        <h1 class="font-bold">Counseling</h1>
                        <a href="" class="btn bg-primary text-nowrap text-primary-content">Learn More</a>
                    </div>
                </span>
                <span v-motion :initial="{ opacity: 0, scale: 0.5 }"
                    :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }"
                    class="relative before:absolute before:-inset-1 lg:before:bg-primary before:blur-2xl before:scale-75">
                    <div
                        class="my-10 rounded relative flex flex-col justify-evenly items-center mx-5 outline outline-primary p-3 bg-base-100 hover:scale-125 hover:z-10 hover:transition hover:duration-300 hover:ease-in-out">
                        <h1 class="font-bold text-nowrap">Mens & Womens bible Study</h1>
                        <a href="" class="btn bg-primary text-nowrap text-primary-content">Learn More</a>
                    </div>
                </span>
                <span v-motion :initial="{ opacity: 0, scale: 0.5 }"
                    :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 600, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }"
                    class="relative before:absolute before:-inset-1 lg:before:bg-primary before:blur-2xl before:scale-75">
                    <div
                        class="my-10 rounded relative flex flex-col justify-evenly items-center mx-5 outline outline-primary p-3 bg-base-100 hover:scale-125 hover:z-10 hover:transition hover:duration-300 hover:ease-in-out">
                        <h1 class="font-bold text-nowrap">Sunday Worship</h1>
                        <a href="" class="btn bg-primary text-nowrap text-primary-content">Learn More</a>
                    </div>
                </span>
                <span v-motion :initial="{ opacity: 0, scale: 0.5 }"
                    :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 700, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }"
                    class="relative before:absolute before:-inset-1 lg:before:bg-primary before:blur-2xl before:scale-75">
                    <div
                        class="my-10 rounded relative flex flex-col justify-evenly items-center mx-5 outline outline-primary p-3 bg-base-100 hover:scale-125 hover:z-10 hover:transition hover:duration-300 hover:ease-in-out">
                        <h1 class="font-bold text-nowrap">Childrens Ministry</h1>
                        <a href="" class="btn bg-primary text-nowrap text-primary-content">Learn More</a>
                    </div>
                </span>
                <span v-motion :initial="{ opacity: 0, scale: 0.5 }"
                    :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 800, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }"
                    class="relative before:absolute before:-inset-1 lg:before:bg-primary before:blur-2xl before:scale-75">
                    <div
                        class="my-10 rounded relative flex flex-col justify-evenly items-center mx-5 outline outline-primary p-3 bg-base-100 hover:scale-125 hover:z-10 hover:transition hover:duration-300 hover:ease-in-out">
                        <h1 class="font-bold text-nowrap">Music Ministery</h1>
                        <a href="" class="btn bg-primary text-nowrap text-primary-content">Learn More</a>
                    </div>
                </span>
            </div>
        </div>
        <!-- counseling section -->
        <div class="my-10 py-52 px-5 bg-base-300 relative">
            <div class="slant">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div v-motion :initial="{ opacity: 0, x: 50 }" :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <div class="flex justify-center">
                    <img src="../assets/images/Pastor/199A9247.jpg"
                        class="rounded-lg shadow-xl outline outline-primary outline-4" alt="">
                </div>
                <div class="grid gap-5">
                    <h1 class="font-bold text-2xl flex flex-col items-center justify-center">Echange Life: Counseling
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolore officia. Omnis
                        explicabo, minus unde suscipit laudantium illo ea modi animi aut exercitationem eveniet
                        inventore sunt doloremque rem fugiat voluptas!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, officiis corporis odit
                        recusandae accusantium tenetur accusamus iste, explicabo numquam similique. Quas nulla illum rem
                        adipisci quae amet, tempore consequuntur?</p>
                </div>
            </div>
            <div class="slant-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <!-- Mens & Womens bible Study -->
        <div class="my-10 py-52 px-5 bg-base-300 relative">
            <div class="slant-top-flip">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div v-motion :initial="{ opacity: 0, x: -50 }" :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <div class="grid gap-5">
                    <h1 class="font-bold text-2xl flex flex-col items-center justify-center">Mens & Womens bible Study
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolore officia. Omnis
                        explicabo, minus unde suscipit laudantium illo ea modi animi aut exercitationem eveniet
                        inventore sunt doloremque rem fugiat voluptas!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, officiis corporis odit
                        recusandae accusantium tenetur accusamus iste, explicabo numquam similique. Quas nulla illum rem
                        adipisci quae amet, tempore consequuntur?</p>
                </div>
                <div class="flex justify-center">
                    <img src="../assets/images/Interior/199A1945.jpg"
                        class="rounded-lg shadow-xl outline outline-primary outline-4" alt="">
                </div>
            </div>
            <div class="slant-bottom-flip">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <!-- Sunday Worship -->
        <div class="my-10 py-52 px-5 bg-base-300 relative">
            <div class="slant">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div v-motion :initial="{ opacity: 0, x: 50 }" :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <div class="flex justify-center">
                    <img src="../assets/images/Group/worship.jpg"
                        class="rounded-lg shadow-xl outline outline-primary outline-4" alt="">
                </div>
                <div class="grid gap-5">
                    <h1 class="font-bold text-2xl flex flex-col items-center justify-center">Sunday Worship
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolore officia. Omnis
                        explicabo, minus unde suscipit laudantium illo ea modi animi aut exercitationem eveniet
                        inventore sunt doloremque rem fugiat voluptas!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, officiis corporis odit
                        recusandae accusantium tenetur accusamus iste, explicabo numquam similique. Quas nulla illum rem
                        adipisci quae amet, tempore consequuntur?</p>
                </div>
            </div>
            <div class="slant-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <!-- Childrens Ministry -->
        <div class="my-10 py-52 px-5 bg-base-300 relative">
            <div class="slant-top-flip">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div v-motion :initial="{ opacity: 0, x: -50 }" :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <div class="grid gap-5">
                    <h1 class="font-bold text-2xl flex flex-col items-center justify-center">Childrens Ministry
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolore officia. Omnis
                        explicabo, minus unde suscipit laudantium illo ea modi animi aut exercitationem eveniet
                        inventore sunt doloremque rem fugiat voluptas!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, officiis corporis odit
                        recusandae accusantium tenetur accusamus iste, explicabo numquam similique. Quas nulla illum rem
                        adipisci quae amet, tempore consequuntur?</p>
                </div>
                <div class="flex justify-center">
                    <img src="../assets/images/Pastor/199A9247.jpg"
                        class="rounded-lg shadow-xl outline outline-primary outline-4" alt="">
                </div>
            </div>
            <div class="slant-bottom-flip">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <!-- Music Ministery -->
        <div  class="my-10 py-52 px-5 bg-base-300 relative">
            <div class="slant">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div v-motion :initial="{ opacity: 0, x: 50 }" :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, type: 'spring', stiffness: 250, damping: 25, mass: 0.5 } }" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <div class="flex justify-center">
                    <img src="../assets/images/Pastor/199A9247.jpg"
                        class="rounded-lg shadow-xl outline outline-primary outline-4" alt="">
                </div>
                <div class="grid gap-5">
                    <h1 class="font-bold text-2xl flex flex-col items-center justify-center">Music Ministery
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolore officia. Omnis
                        explicabo, minus unde suscipit laudantium illo ea modi animi aut exercitationem eveniet
                        inventore sunt doloremque rem fugiat voluptas!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, officiis corporis odit
                        recusandae accusantium tenetur accusamus iste, explicabo numquam similique. Quas nulla illum rem
                        adipisci quae amet, tempore consequuntur?</p>
                </div>
            </div>
            <div class="slant-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
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
            const parallaxElement = document.getElementById('bg-cover-services');
            const scrolledHeight = window.pageYOffset;
            const limit = parallaxElement.offsetTop + parallaxElement.offsetHeight;
            if (scrolledHeight > parallaxElement.offsetTop && scrolledHeight <= limit) {
                parallaxElement.style.backgroundPositionY = (scrolledHeight - parallaxElement.offsetTop) / 1.5 + 'px';
            } else {
                parallaxElement.style.backgroundPositionY = '0';
            }
        },
        scrollToSection() {
            const servicesSection = document.getElementById('scrollSection');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>