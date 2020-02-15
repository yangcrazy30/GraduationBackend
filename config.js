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
        cookies: true
      }
    },
    upload: {
      baseDir: "/data/homeworks",
      options: {
        createParentPath: true
      }
    },
    cors: {
      options: {
        origin: "http://blog.leobob.cn",
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
        cookies: true
      }
    },
    upload: {
      baseDir: "/Users/leob_o/Desktop/homeworks",
      options: {
        createParentPath: true
      }
    },
    cors: {
      options: {
        origin: "http://localhost:8080",
        credentials: true
      }
    }
  }
};

module.exports =
  process.env.NODE_ENV == "production"
    ? credentials.production
    : credentials.development;
