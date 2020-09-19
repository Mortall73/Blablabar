const $http = {
    async get(url: string) {
        try {
            const response = await fetch(url , {});
            return response;
        } catch (error) {
            throw new Error(`$http error in get request:${error}`);
        }
    }
};

export default $http;