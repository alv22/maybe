// maybe™ 2020 Connor Intergalactic

// this = window (browser) || global (node)
this.__defineGetter__('maybe', () => Math.random() >= 0.5);
