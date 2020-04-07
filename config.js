const credentials = {
  production: {
    mongodb: {
      url: "mongodb://localhost/ujsonline",
      options: {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    },
    jwt: {
      secret: "123456",
      options: {
        cookie: "ujs",
        cookies: false
      }
    },
    cors: {
      options: {
        origin: "http://zeogzfg.cn",
        credentials: true
      }
    }
  },
  development: {
    mongodb: {
      url: "mongodb://localhost/ujsonlie",
      options: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    },
    jwt: {
      secret: "123456",
      options: {
        cookie: "ujs",
        cookies: false
      }
    },
    cors: {
      options: {
        origin: "http://zeogzfg.cn",
        credentials: true
      }
    }
  }
};

module.exports =
  process.env.NODE_ENV == "production"
    ? credentials.production
    : credentials.development;
