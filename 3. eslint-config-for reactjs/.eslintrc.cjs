module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error', // rule of react-hooks
    'react-hooks/exhaustive-deps': 'warn', // dependencies in useEffect
    'react/prop-types': 0, //no error propsType in class Component
    'react/display-name': 0, //

    'no-console': 1, // remove console
    'no-lonely-if': 1, // không để if trong else mà sử dụng ele if
    'no-unused-vars': 1, // khai biến mà không sử dụng
    'no-trailing-spaces': 1, // thừa dấu cách trong code
    'no-multi-spaces': 1, // dư thừa space
    'no-multiple-empty-lines': 1, // để dư quá nhiều dòng rỗng
    'space-before-blocks': ['error', 'always'], //phải có khoảng trắng trước _{}
    'object-curly-spacing': [1, 'always'], //Khai báo json object phải có khoảng trống
    'indent': ['warn', 2], //tab 2
    'semi': [1, 'never'], //bỏ dấu ;
    'quotes': ['error', 'single'], // sử dụng '' thay vì ""
    'array-bracket-spacing': 1, //thừa khoảng trắng trong khai báo array
    'linebreak-style': 0, //
    'no-unexpected-multiline': 'warn', //không để thừa các dòng không dùng đến
    'keyword-spacing': 1, //có khoảng trống khi đóng mở {}
    'comma-dangle': 1, //dư thừa dấu , ;
    'comma-spacing': 1, // dư thừa space
    'arrow-spacing': 1 // dư thừa space khi sử dụng () => {}
  }
}