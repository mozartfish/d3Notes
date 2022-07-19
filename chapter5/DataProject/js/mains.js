// // d3 chain syntax
// d3.select('body').append('p').text('New Paragraph!');

// // d3 chainless syntax
// const body = d3.select('body');
// const p = body.append('p');
// p.text('New Paragraph 2!');

// Data
const dataset = [5, 10, 15, 20, 25];
d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  .text((d) => {
    return 'I can count to ' + d;
  })
  .style('color', (d) => {
    return d > 15 ? 'red' : 'black';
  });
//   .style('color', 'red');
// .text('New Paragraph!')
