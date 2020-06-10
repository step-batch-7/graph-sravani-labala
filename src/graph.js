//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const objectOfArray = function (context, element) {
  const [key, value] = element;
  if (!context[key]) {
    context[key] = [];
  }
  context[key].push(value);
  return context;
};

const bfs = function (pairs, source, target) {
  const adjacency_list = pairs.reduce(objectOfArray, {});
  let visited = [];
  let queue = [source];
  while (queue.length != 0) {
    let visiting_node = queue.shift();
    visited.push(visiting_node);
    let unvisited = adjacency_list[visiting_node].filter(
      (node) => !visited.includes(node) && !queue.includes(node)
    );
    queue.push(...unvisited);
    if (visiting_node === target) {
      return true;
    }
  }
  return false;
};

module.exports = { bfs };
