/**
 *  babel demo 源码调试
 */
var parser = require('./packages/babel-parser')
var traverse = require('./packages/babel-traverse').default
var generate = require('./packages/babel-generator').default
// 源代码
var code = `function square(n) {
  return n * n;
}`;
var ast = parser.parse(code);
traverse(ast, {
  enter(path) {
    // 节点转换
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});
var str = generate(ast)

// 新代码 function square(x) {\n  return x * x;\n}
console.log(str.code)
