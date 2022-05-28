const routesConfig = {
    home: '/',
    following: '/following',
    upload: '/upload',
    profile: '/profile',
    feedback: '/feedback',
    setting: '/setting',
    coin: '/coin',
    live: '/live',
    userDetail: (nickname = ':nickname') => `/@${nickname}`,
    music: (title = ':title') => `/music/${title}`,
    hashtag: (title = ':title') => `/hashtag/${title}`,
};

export default routesConfig;
