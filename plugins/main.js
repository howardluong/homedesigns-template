import Vue from 'vue';
import Slick from 'vue-slick';
import '~/node_modules/slick-carousel/slick/slick.css';
import '~/node_modules/slick-carousel/slick/slick-theme.css';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    scale: 1,
    distance: '50px',
    mobile: true,
    delay: 500,
});

Vue.component('slick', Slick);
Vue.use(Slick);
export default Slick;