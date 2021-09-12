export class BaseApiService {
	private readonly baseUrl = "https://jsonplaceholder.typicode.com";
    resource;
  
	constructor(resource: string) {
	  if (!resource) throw new Error("Resource is not provided");
	  this.resource = resource;
	}
  
	public getUrl(id = "") {
	  return `${this.baseUrl}/${this.resource}/${id}`;
	}
  
	public handleErrors(err: unknown) {
	  // Note: here you may want to add your errors handling
	  console.log({ message: "Errors is handled here", err });
	}
}