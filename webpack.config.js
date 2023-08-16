const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/index',
    output: {
        //输出文件名
        filename: '[name].[chunkhash].js',
        //输出路径
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        globalObject: 'this',
        assetModuleFilename: "assets/[name]_[hash][ext]",
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          name: (module) => {
            // 生成拆分块名称：模块名称 + 哈希值的一部分
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const hash = require('crypto').createHash('md5').update(moduleFileName).digest('hex').substring(0, 8);
            return `${moduleFileName}_${hash}`;
          },
        },
    },
    module: {
        strictExportPresence: true,
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, 
                        cacheCompression: false,
                    }
                }],

            }, {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader',
                        ],
                        sideEffects: true,
                    },
                    {
                        test: /\.(jpg|png|gif|jpeg|svg)$/,
                        type: 'asset/resource',
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024,
                            }
                        },
                        generator: {
                            filename: 'images/[name]_[hash:8][ext]'
                        }
                    },
                    {
                        test: /\.(otf|eot|woff2?|ttf|svg)$/i,
                        type: "asset",
                        generator: {
                            filename: "fonts/[name]_[hash:8][ext]",
                        },
                    },
                    {
                        test: /\.tsx?$/,
                        include: /node_modules/,
                        use: 'ts-loader',
                    },
                    {
                        test: /\.txt|xlsx$/,
                        type: 'asset/source',
                        generator: {
                            filename: 'files/[base]'
                        }
                    },
                    {
                        //打包其他资源
                        type: 'asset/source',
                        exclude: [/\.(js|mjs|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/],
                        generator: {
                            filename: 'static/resource/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                        use: [{
                          loader: 'url-loader',
                          options: {
                            limit: 10000
                          }
                        }]
                    }
                ]
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: "public",
                to: "public"
            }, ],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Caching'
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', 'js', '...'],
        alias: {
            '@': resolved('src'),
            '~': resolved('src'),
            'modules': resolved('src/modules')
        },
        modules: [resolved('src'), 'node_modules'],
        mainFields: ['module', 'main']
    },
    cache: {
        type: 'filesystem',
    },

}

function resolved(dir) {
    return path.join(__dirname, dir);
}