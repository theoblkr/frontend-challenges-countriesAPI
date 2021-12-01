module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
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