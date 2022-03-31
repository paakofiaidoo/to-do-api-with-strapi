module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c4043e7542976f042f418813f09b663'),
  },
});
