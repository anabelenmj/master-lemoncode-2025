import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"; //para que genere en la build archivo css
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "./src"),
    resolve: {
     extensions: ['.js', '.jsx', '.tsx'],
   },
    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: '[name].[chunkhash].js', //para añadirle el hash en el nombre del archivo, no en el src del html
        clean: true, //cada vez que genera una build, limpia la carpeta de dist para que no acumule archivos que no nos sirve
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, //le indicamos a webpack que con los archivos .js tiene que utilizar el loader de babel
                exclude: /node_modules/, //Con esta linea excluimos node_modules
                loader: "babel-loader", //Para incorporar babel
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/, //Para que salga referenciada la imagen en el html
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: "index.html", //Name of template in ./src
            scriptLoading: 'blocking', // modo de carga de los scripts, en este caso queremos asegurarnos la compatibilidad con navegadores antiguos y elegimos la opción "blocking"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
    },
}