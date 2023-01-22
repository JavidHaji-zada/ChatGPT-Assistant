export default class Config {
	static get apiURL() {
		return process.env.REACT_APP_APIKEY
	}
}