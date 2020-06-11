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
    let visitingNode = queue.shift();
    let visitingList = adjacency_list[visitingNode] || [];
    if (visitingList.includes(target)) {
      return true;
    }
    visited.push(visitingNode);
    let unvisited = visitingList.filter(
      (node) => !visited.includes(node) && !queue.includes(node)
    );
    queue.push(...unvisited);
  }
  return false;
};

module.exports = { bfs };
