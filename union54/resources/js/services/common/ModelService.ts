import { ReadOnlyApiService } from "./ReadOnlyService";


export class ModelApiService extends ReadOnlyApiService {
	constructor(resource: string) {
	  super(resource);
	}

	public async post(data = {}) {
	  try {
		const response: Response = await fetch(this.getUrl(), {
		  method: "POST",
		  body: JSON.stringify(data)
		});

		return response.json();

	  } catch (err) {
		this.handleErrors(err);
	  }
	} 


	public async put(id: string, data = {}) {
	  if (!id) throw Error("Id is not provided");
	  
	  try {
		const response = await fetch(this.getUrl(id), {
		  method: "PUT",
		  body: JSON.stringify(data)
		});
	
		return response.json()

	  } catch (err) {
		this.handleErrors(err);
	  }
	}

	public async delete(id: string | undefined) {

	  if (!id) throw Error("Id is not provided");
	  try {
		await fetch(this.getUrl(id), {
		  method: "DELETE"
		});
		return true;
	  } catch (err) {
		this.handleErrors(err);
	  }

	}
  }