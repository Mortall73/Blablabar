const $http = {
    async get(url: string) {
        try {
            const response = await fetch(url , {});
            return response;
        } catch (error) {
            throw new Error(`$http error in get request:${error}`);
        }
    },

    async post(url: string, options: any) {
        try {
            return await fetch(url, {
                method: 'POST',
                ...options,
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export default $http;