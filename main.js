import template from "./flicker-t.html";
import "./flicker-t.less";

import { screen, utils, controls } from "wombat";
import languages from "./lang.json";

import Mousetrap from "mousetrap";


export default async function (config, callback) {
	Mousetrap.reset();
	const lang = Object.assign({}, utils.buildLanguage(languages, config), config.language_options);
	const DOM = document.createElement(`div`);
	DOM.innerHTML = template;


}