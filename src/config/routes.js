const routesConfig = {
    home: '/',
    following: '/following',
    upload: '/upload',
    profile: '/profile',
    feedback: '/feedback',
    setting: '/setting',
    coin: '/coin',
    userDetail: (nickname = ':nickname') => `@${nickname}`,
};

export default routesConfig;
