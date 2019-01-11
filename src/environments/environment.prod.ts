export const environment = {
  production: true,
  apiUrl: 'https://guavamoney-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('guavamoney-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
