const apiInterface = {};

apiInterface.getUserInfo = function() {
    var p = {
        url: 'api/getUserInfo',
        method: 'get'
    };
    return p;
};
apiInterface.getUserInfoPost = function() {
    var p = {
        url: 'api/userInfoPost',
        method: 'post'
    };
    return p;
};
apiInterface.tablelists = function() {
    var p = {
        url: 'api/tablelists',
        method: 'post'
    };
    return p;
};
apiInterface.pageInfo = function() {
    var p = {
        url: 'api/pageInfo',
        method: 'post'
    };
    return p;
};

//const Apisetting = {...apiInterface };

export default apiInterface;