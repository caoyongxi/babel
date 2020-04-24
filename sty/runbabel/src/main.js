/*import '@babel/polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from './react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const store = configureStore()
debugger
store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)*/
import * as parser from "@babel/parser/src/index.js";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
// 源代码
const code = `function square(n) {
  return n * n;
}`;
const ast = parser.parse(code);
traverse(ast, {
  enter(path) {
  // 节点转换
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});
// 新代码 function square(x) {\n  return x * x;\n}
console.log(generate(ast))
