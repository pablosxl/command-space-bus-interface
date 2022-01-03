import HttpClientBuilder from "../mixins/HttpClientBuilder"

export default class MissionHistoryService {

    constructor() {
        let client = HttpClientBuilder.buildClient({
            baseURL: process.env.VUE_APP_API
        });

        this.client = client;
    }

    async getHistoryByMissionId(missionId) {
        
        const response = await this.client.get(`/mission/history/${missionId}`);
        return response
    }

}