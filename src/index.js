export default {
	subscribers: {},

	on(event, cb) {
		(this.subscribers[event] = this.subscribers[event] || []).push(cb);
		return cb;
	},

	off(id) {
		for (let event in this.subscribers) {
			let event_subscribers = this.subscribers[event];
			for (let i = 0; i < event_subscribers.length; i++) {
				if (event_subscribers[i] === id) {
					event_subscribers.splice(i, 1);
				}
			}
		}
	},

	all(callback) {
		return this.on("*", callback);
	},

	send(event, data, source) {
		const event_subscribers =
		(this.subscribers[event] || []).concat(this.subscribers["*"] || []);
		for (let i = 0; i < event_subscribers.length; i++) {
			event_subscribers[i](event, data, source, event_subscribers);
		}
	}
};

