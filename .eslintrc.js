module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "jsx-a11y/href-no-hash": ["off"],
        "react/jsx-filename-extension": [
            "warn",
            { "extensions": [".js", ".jsx"] }
        ],
        "max-len": [
            "warn",
            {
                "code": 80,
                "tabWidth": 4,
                "comments": 80,
                "ignoreComments": false,
                "ignoreTrailingComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ]
    }
}
