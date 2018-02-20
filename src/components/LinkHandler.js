/**
 * Default link handler
 */
export default class LinkHandler {
	static handle(link) {
		if (link) {
			window.open(link);
		}
	}
}
