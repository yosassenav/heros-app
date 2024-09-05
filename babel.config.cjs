module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
        }
        
    ],
};