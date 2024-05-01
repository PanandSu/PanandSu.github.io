const Liquid = require('liquid');
const engine = new Liquid.Engine();

// Render a template with some variables
const template = `Hello, {{ name }}!`;
const result = engine.render(template, {name: 'John Doe'});
console.log(result); // Output: Hello, John Doe!

// const Liquid = require('liquid')
// const engine = new Liquid.Engine()
// engine.parse('hi {{name}}').then(template => template.render({name: 'tobi'})).then(result => console.log(result))
// or engine   .parseAndRender('hi {{name}}', { name: 'tobi' })   .then(result => console. log(result))
