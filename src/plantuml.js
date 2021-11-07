/*!
 * reveal.js PlantUML plugin
 */
const encoder = require('plantuml-encoder');

const Plugin = {

	id: 'plantUML',

	init: ( reveal ) => {
        let revealOptions = reveal.getConfig().plantuml || {};
        let server = revealOptions.serverPath || '//www.plantuml.com/plantuml/svg/';

        Array.from( reveal.getRevealElement().querySelectorAll('.reveal pre code.plantuml') ),forEach( (block) => {
            let img = document.createElement("img");
            img.setAttribute("src", server + encoder.encode(block.innerText));

            let pre = block.parentElement;
            pre.parentNode.replaceChild(img, pre);
        })
	}
};

export default Plugin;