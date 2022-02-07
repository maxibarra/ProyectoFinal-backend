export default {
//     fileSystem: {
//         path: './DB'
//     },
    mongodb: {
        cnxStr: 'mongodb://localhost/proyectofinal',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
//     sqlite3: {
//         client: 'sqlite3',
//         connection: {
//             filename: `./DB/ecommerce.sqlite`
//         },
//         useNullAsDefault: true
//     },
//     mariaDb: {
//         client: 'mysql',
//         connection: {
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'coderhouse'
//         }
//     }
}