# event

A lightweight and flexible event emitter library for JavaScript applications.

## Installation

```bash
npm install @muvon/event
```

## Usage

```javascript
import EventEmitter from '@muvon/event';

// Subscribe to a specific event
const unsubscribe = EventEmitter.on('userLoggedIn', (event, data, source) => {
  console.log(`User ${data.username} logged in`);
});

// Emit an event
EventEmitter.send('userLoggedIn', { username: 'john_doe' });

// Unsubscribe from the event
unsubscribe();

// Subscribe to all events
EventEmitter.all((event, data, source) => {
  console.log(`Event ${event} was triggered`);
});
```

## API

### `on(event, callback)`

Subscribe to a specific event.

- `event`: String - The name of the event to subscribe to.
- `callback`: Function - The function to be called when the event is emitted.
- Returns: Function - A function that can be called to unsubscribe from the event.

### `off(callback)`

Unsubscribe from all events for a specific callback.

- `callback`: Function - The callback function to unsubscribe.

### `all(callback)`

Subscribe to all events.

- `callback`: Function - The function to be called for all events.
- Returns: Function - A function that can be called to unsubscribe from all events.

### `send(event, data, source)`

Emit an event.

- `event`: String - The name of the event to emit.
- `data`: Any - The data to pass to the event subscribers.
- `source`: Any - The source of the event (optional).

## Features

- Lightweight and dependency-free
- Support for event namespacing
- Easy subscription and unsubscription
- Ability to listen to all events

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
