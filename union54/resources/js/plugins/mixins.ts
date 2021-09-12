import { $api } from "../services/api";


export const ApiMixin = {
	computed: {
		$api: () => $api
	 }
}