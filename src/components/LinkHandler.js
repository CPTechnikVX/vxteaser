/**
 * Default link handler
 */
export default class LinkHandler {
	static handle(clickEvent) {
		if (clickEvent.options.link) {
			window.location.href = clickEvent.options.link;
		}
	}
}
