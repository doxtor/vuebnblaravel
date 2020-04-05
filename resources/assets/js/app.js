import "core-js/features/object/assign";
import Vue from 'vue';
import ImageCarousel from "../components/ImageCarousel";
import ModalWindow from "../components/ModalWindow";
import HeaderImage from "../components/HeaderImage";
import FeatureList from "../components/FeatureList";
import {populateAmenitiesAndPrices} from "./helpers";
// import sample from './data';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

Vue.component('image-carousel', ImageCarousel);
Vue.component('modal-window', ModalWindow);
Vue.component('header-image', HeaderImage);
Vue.component('feature-list', FeatureList);

var app = new Vue({
	el: '#app',
	data: Object.assign(model,{
		title: model.title,
		address: model.address,
		about: model.about,

		amenities: model.amenities,
		prices: model.prices,
		terkontrak: 'true',
	}),

	methods: {
		openModal(){
			this.$refs.imagemodal.modalOpen = true;
		}
	},

	component:{
		ImageCarousel,
		ModalWindow,
		HeaderImage,
		FeatureList
	},

});
