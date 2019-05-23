# ES6转换
安装依赖

~~~
npm i @babel/core @babel/plugin-transform-modules-umd karma-babel-preprocessor -D
~~~


修改 karma.config.js 配置
~~~
preprocessors: {
  'tests/**/*.js': ['coverage']
  'tests/**/*.js': ['babel','coverage']
},
~~~

添加 babel 配置文件 .babelrc
auxiliaryCommentBefore是用在babel编译时添加istanbul忽略，代码覆盖率能够清晰展示
~~~
{
  "plugins": ["@babel/plugin-transform-modules-umd"],
  "auxiliaryCommentBefore": "istanbul ignore next"
}
~~~



参考自 https://wenjs.me/p/es6-testing-workflow-with-karma