module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f6aeff75a88ac5b9a9046ac5cc9856ea'),
    },
  },
});
