// maybe™ 2020 Connor Intergalactic

const maybe = () => Math.random() >= 0.5;

// this = window (browser) || global (node)
this.__defineGetter__('maybe', maybe());

export default maybe;
