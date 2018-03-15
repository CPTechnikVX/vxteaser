export default class ClickEvent {

	/**
	 * Represents click event for further processing
	 * @param event
	 * @param origin
	 * @param options
	 */
	constructor(event, origin, options) {
		this.event   = event;
		this.origin  = origin;
		this.options = options;
	}
}