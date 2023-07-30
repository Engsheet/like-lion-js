// .eslintrc.js

module.exports = {
  root: true,
  // 이 설정 파일이 최상위이며, 다른 설정 파일을 덮어쓰지 않도록 합니다.
  env: {
    browser: true,
    // 코드가 브라우저에서 실행됩니다.
    es2021: true,
    // ECMAScript 2021 문법을 사용하는 것으로 가정합니다.
    node: true,
  },
  extends: [
    // 기본 규칙 외에 다른 규칙을 추가로 사용하도록 설정합니다.
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 여기서는 eslint: recommended와 plugin: prettier / recommended을 사용합니다.
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    // 마지막 ECMASclima의 버전 문법을 사용합니다.
    sourceType: 'module',
    // 모듈 형식으로 코드를 작성한다는 것을 명시합니다.
  },
  plugins: ['prettier'],
  // Prettier를 사용할 수 있도록 추가 설정합니다.
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  rules: {
    // 설정된 규칙들입니다.
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    // 들여쓰기를 설정합니다. 2칸을 들여쓰기합니다.
    // switch case 문에서는 추가로 1칸을 더 들여쓰기합니다.

    quotes: [
      'warn',
      'single',
      {
        // 따옴표 사용을 설정합니다. 작은따옴표를 사용합니다.
        allowTemplateLiterals: true,
        // 템플릿 리터럴에서는 작은따옴표를 사용할 수 있도록 허용합니다.
        avoidEscape: true,
        // 이스케이프 문자를 사용하지 않아도 되도록 허용합니다.
      },
    ],
    'comma-dangle': ['warn', 'only-multiline'],
    // 객체나 배열의 마지막 요소 뒤에 쉼표를 추가하며, 한 줄로 작성한 경우에는 쉼표를 붙이지 않습니다.
    'no-unused-vars': 'warn',
    // 사용되지 않는 변수가 있을 경우, 경고를 출력합니다.
    'no-multi-spaces': [
      // 공백문자의 사용을 제한하여 가독성을 높입니다.
      'warn',
      {
        exceptions: { Property: true },
        // 그러나 속성 선언에서는 예외적으로 공백문자를 허용하여 가독성을 높입니다.
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    // 객체 리터럴에서 중괄호 안쪽에 공백을 추가하도록 설정합니다.
  },
};
