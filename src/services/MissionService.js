import HttpClientBuilder from "../mixins/HttpClientBuilder"

export default class MissionService {

    constructor() {
        let client = HttpClientBuilder.buildClient({
            baseURL: process.env.VUE_APP_API
        });

        this.client = client;
    }

    async create(body) {
        const response = await this.client.post(`/mission/start`, body);
        return response
    }
    async uncoupleSpaceBus(missionId, body) {
        const response = await this.client.put(`/mission/bus/uncouple/${missionId}`, body);
        return response
    }
    async init(missionId, body) {
        const response = await this.client.put(`/mission/init/${missionId}`, body);
        return response
    }
    async activateThrusters(missionId, body) {
        const response = await this.client.put(`/mission/thrusters/activate/${missionId}`, body);
        return response
    }
    async startEngines(missionId, body) {
        const response = await this.client.put(`/mission/engines/start/${missionId}`, body);
        return response
    }
    async openLandingGear(missionId, body) {
        const response = await this.client.put(`/mission/landinggear/open/${missionId}`, body);
        return response
    }
    async initLandingProcedure(missionId, body) {
        const response = await this.client.put(`/mission/landingprocedure/init/${missionId}`, body);
        return response
    }
    async finish(missionId, body) {
        const response = await this.client.put(`/mission/finish/${missionId}`, body);
        return response
    }
    async getMissions() {
        const response = await this.client.get(`/mission/list`);
        return response
    }
    async disableMission(missionId) {
        const response = await this.client.put(`/mission/disable/${missionId}`);
        return response
    }
    async deleteMission(missionId) {
        const response = await this.client.delete(`/mission/${missionId}`);
        return response
    }

}