import { BaseApiService } from "./BaseService";
 

export class ReadOnlyApiService extends BaseApiService {

	constructor(resource: string) {
	  super(resource);
	}

	public async fetch(config = {}) {
	  try {
		const response = await fetch(this.getUrl(), config);
		return await response.json();
	  } catch (err) {
		this.handleErrors(err);
	  }
	}

	public async get(id: string) {
	  try {
		if (!id) throw Error("Id is not provided");
		const response = await fetch(this.getUrl(id));
		return await response.json();
	  } catch (err) {
		this.handleErrors(err);
	  }
	}

}