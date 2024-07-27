import{c as l,w as d,a as e,F as u,b as m,_ as s,d as r,o as n,r as f}from"./index-lNBSCpkc.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p={mounted(){window.addEventListener("scroll",this.handleParallax)},beforeDestroy(){window.removeEventListener("scroll",this.handleParallax)},methods:{handleParallax(){const o=document.getElementById("bg-cover-members"),t=window.pageYOffset,a=o.offsetTop+o.offsetHeight;t>o.offsetTop&&t<=a?o.style.backgroundPositionY=(t-o.offsetTop)/1.5+"px":o.style.backgroundPositionY="0"},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},scrollToSection(){document.getElementById("scrollSection").scrollIntoView({behavior:"smooth"})}}},v={id:"bg-cover-members",class:"flex flex-row justify-center items-center"},g={class:"hero min-h-screen"},y=e("div",{class:"hero-overlay bg-opacity-50"},null,-1),x={class:"hero-content text-neutral-content text-center"},_={class:"max-w-md"},w=e("h1",{class:"mb-5 text-5xl font-bold"},"Our Members",-1),k=e("p",{class:"mb-5"}," We are a community of believers who are passionate about the gospel of Jesus Christ. ",-1),J=m('<div class="custom-shape-divider-bottom-1721013309"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div>',1),S=e("div",{class:"my-10 bg-gradient-to-b from-base-100 to-primary"},[e("div",{id:"scrollSection",class:"container mx-auto"},[e("div",{class:"grid grid-cols-1 md:grid-cols-3 gap-5 p-10"},[e("div",{class:"card"},[e("div",{class:"card-body glass"},[e("span",{onclick:"YoungModal.showModal()",class:"relative before:absolute before:bg-black hover:before:bg-primary before:-inset-0 before:blur-xl before:opacity-25 hover:before:-inset-3 hover:before:blur-3xl hover:before:opacity-40 before:transition before:ease-in-out before:duration-300"},[e("img",{src:s,alt:"John Doe",class:"relative rounded-full outline outline-bg-base-300 hover:outline-primary mx-auto hover:scale-105 transition ease-in-out"})]),e("h2",{class:"card-title"},"Rev. Gordon Wesley Young Jr."),e("p",{class:"text-primary-content"},"Pastor / Spiritual Leader / Counseler")])]),e("div",{class:"card"},[e("div",{class:"card-body glass"},[e("span",{class:"relative before:absolute before:bg-black hover:before:bg-primary before:-inset-0 before:blur-xl before:opacity-25 hover:before:-inset-3 hover:before:blur-3xl hover:before:opacity-40 before:transition before:ease-in-out before:duration-300"},[e("img",{src:s,alt:"John Doe",class:"relative rounded-full outline outline-bg-base-300 hover:outline-primary mx-auto hover:scale-105 transition ease-in-out"})]),e("h2",{class:"card-title"},"John Doe"),e("p",{class:"text-primary-content"},"John is a faithful member of our church.")])]),e("div",{class:"card"},[e("div",{class:"card-body glass"},[e("span",{class:"relative before:absolute before:bg-black hover:before:bg-primary before:-inset-0 before:blur-xl before:opacity-25 hover:before:-inset-3 hover:before:blur-3xl hover:before:opacity-40 before:transition before:ease-in-out before:duration-300"},[e("img",{src:s,alt:"John Doe",class:"relative rounded-full outline outline-bg-base-300 hover:outline-primary mx-auto hover:scale-105 transition ease-in-out"})]),e("h2",{class:"card-title"},"John Doe"),e("p",{class:"text-primary-content"},"John is a faithful member of our church.")])]),e("div",{class:"card"},[e("div",{class:"card-body glass"},[e("span",{class:"relative before:absolute before:bg-black hover:before:bg-primary before:-inset-0 before:blur-xl before:opacity-25 hover:before:-inset-3 hover:before:blur-3xl hover:before:opacity-40 before:transition before:ease-in-out before:duration-300"},[e("img",{src:s,alt:"John Doe",class:"relative rounded-full outline outline-bg-base-300 hover:outline-primary mx-auto hover:scale-105 transition ease-in-out"})]),e("h2",{class:"card-title"},"John Doe"),e("p",{class:"text-primary-content"},"John is a faithful member of our church.")])])]),e("dialog",{id:"YoungModal",class:"modal"},[e("div",{class:"modal-box"},[e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕")]),e("h3",{class:"text-lg font-bold"},"Rev. Gordon Young"),e("img",{src:s,alt:""}),e("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam provident explicabo placeat laboriosam earum, rem molestias consequatur maxime quasi vero inventore voluptatum omnis unde nostrum consequuntur. Excepturi et id blanditiis."),e("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus veritatis ipsam repellendus, iure ab perspiciatis, quisquam eum rerum, accusamus quia sit aspernatur nulla soluta expedita saepe eius delectus incidunt."),e("p",{class:"py-4"},[r("Press "),e("b",null,"ESC"),r(" key or click on "),e("b",null,"✕"),r(" button to close")])])])])],-1);function T(o,t,a,V,D,i){const c=f("motion-fade-visible-once");return n(),l(u,null,[d((n(),l("div",v,[e("div",g,[y,e("div",x,[e("div",_,[w,k,e("button",{onClick:t[0]||(t[0]=(...b)=>i.scrollToSection&&i.scrollToSection(...b)),class:"btn btn-primary"},"Get Started")])])]),J])),[[c]]),S],64)}const M=h(p,[["render",T]]);export{M as default};
