// DB Connection
import DB from "mysql2-async";

const MySQLConnection = new DB({
    host: "srv678.hstgr.io", // localhost
    port: 3306,
    user: "u225066021_todoapp",
    database: "u225066021_todoapp",
    password: "Todo@PSIT00",
    skiptzfix: true,
});

export default MySQLConnection;