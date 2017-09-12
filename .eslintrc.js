module.exports = {
    "plugins": [
        "fp"
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "expect": false,
        "assert": false,
    },
    "extends": [
        "airbnb-base",
        "plugin:fp/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": ["error", 120, 2, {
            "ignoreUrls": true,
            "ignoreComments": false,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true
        }], // 120 is the Jetbrains default
        "comma-dangle": "off" // prevent this causes a lot of useless work and git diffs
    }
};