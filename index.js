// maybe™ 2020 Connor Intergalactic

this.__defineGetter__('maybe', () => Math.random() >= 0.5);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = () => Math.random() >= 0.5;
}
