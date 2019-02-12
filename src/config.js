const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-drm19he5rdct"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://serverless-dev.coderedlabs.io/api"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7arNyC59",
    APP_CLIENT_ID: "5jtvriognlnbjmf7969el7kthp",
    IDENTITY_POOL_ID: "us-east-1:24bd7d3e-6a05-4b75-a7d6-ee680580642d"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1o2xc2weox8ks"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://serverless-prod.coderedlabs.io/api"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_I5R89SjlK",
    APP_CLIENT_ID: "14sabno7ljn3pg80a46p1b9qce",
    IDENTITY_POOL_ID: "us-east-1:92189ed9-9839-469a-8482-c56ac47524ed"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
