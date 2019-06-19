const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        styles: './styles.scss',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};
