// El primer valor es el de PRODUCCIÓN. El valor alternativo es el de DESARROLLO

module.exports = {
  ip         : process.env.HOST   || '0.0.0.0',
  port       : process.env.PORT   || 3000,
  db_uri     : process.env.MONGODB_URI,
  db_name    : process.env.DB_NAME || 'tienda', 
  db_user    : process.env.MONGODB_USER,
  db_pass    : process.env.MONGODB_PASSWORD

};
