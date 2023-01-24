// Solution 1
export const getHomePageFeatureFlags1 = <
  TConfig extends {
    rawConfig: {
      featureFlags: {
        homePage: any;
      };
    };
  }
>(
  config: TConfig,
  override: (
    flags: TConfig['rawConfig']['featureFlags']['homePage']
  ) => TConfig['rawConfig']['featureFlags']['homePage']
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

// Solution 2
export const getHomePageFeatureFlags2 = <HomePageFlags>(
  config: {
    rawConfig: {
      featureFlags: {
        homePage: HomePageFlags;
      };
    };
  },
  override: (flags: HomePageFlags) => HomePageFlags
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

const EXAMPLE_CONFIG = {
  apiEndpoint: 'https://api.example.com',
  apiVersion: 'v1',
  apiKey: '1234567890',
  rawConfig: {
    featureFlags: {
      homePage: {
        showBanner: true,
        showLogOut: false,
      },
      loginPage: {
        showCaptcha: true,
        showConfirmPassword: false,
      },
    },
  },
};
const flags = getHomePageFeatureFlags2(
  EXAMPLE_CONFIG,
  (defaultFlags) => defaultFlags
);

// const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
//   ...defaultFlags,
//   showBanner: false,
// }));
