module.exports = {
    "parserOptions": {
      "parser": "babel-eslint"
    },  
    "env": {
      "browser": true,
      "es6": true
    },
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        "vue/max-attributes-per-line": ["error", {
          "singleline": {
            "max": 3
          },      
          "multiline": {
            "max": 3
          }
        }]
      },
      "overrides": [
        {
          "files": ["*.vue"],
          "rules": {
            "indent": "off"
          }
        }
      ]
  }