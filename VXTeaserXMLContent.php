<?php

class VXTeaserXMLContent {

	const FIELD_VALUE      = '@value';
	const FIELD_ATTRIBUTES = '@attributes';

	/**
	 * @var string
	 */
	private static $encoding = 'UTF-8';

	/**
	 * @var DOMDocument
	 */
	private static $xml = null;

	/**
	 * Convert an XML to Array.
	 *
	 * @param string|DOMDocument $input_xml
	 *
	 * @return array
	 *
	 * @throws Exception
	 */
	public static function createArray($input_xml) {
		$xml = self::getXMLRoot();
		if (is_string($input_xml)) {
			try {
				$xml->loadXML($input_xml);
				if (!is_object($xml) || empty($xml->documentElement)) {
					throw new Exception();
				}
			} catch (Exception $ex) {
				throw new Exception('[XML2Array] Error parsing the XML string.' . PHP_EOL . $ex->getMessage());
			}
		} elseif (is_object($input_xml)) {
			if (get_class($input_xml) != 'DOMDocument') {
				throw new Exception('[XML2Array] The input XML object should be of type: DOMDocument.');
			}
			$xml = self::$xml = $input_xml;
		} else {
			throw new Exception('[XML2Array] Invalid input');
		}
		$array[$xml->documentElement->tagName] = self::convert($xml->documentElement);
		self::$xml                             = null;    // clear the xml node in the class for 2nd time use.
		return $array;
	}

	/**
	 * Initialize the root XML node [optional].
	 *
	 * @param string $version
	 * @param string $encoding
	 * @param bool   $standalone
	 * @param bool   $format_output
	 */
	public static function init($version = '1.0', $encoding = 'utf-8', $standalone = false, $format_output = true) {
		self::$xml                = new DomDocument($version, $encoding);
		self::$xml->xmlStandalone = $standalone;
		self::$xml->formatOutput  = $format_output;
		self::$encoding           = $encoding;
	}

	/**
	 * Convert an Array to XML.
	 *
	 * @param DOMNode $node - XML as a string or as an object of DOMDocument
	 *
	 * @return array
	 */
	private static function convert(DOMNode $node) {
		$output = [];

		switch ($node->nodeType) {
			case XML_CDATA_SECTION_NODE:
				$output['@cdata'] = trim($node->textContent);
				break;

			case XML_TEXT_NODE:
				$o      = trim($node->textContent);
				$output = ($o !== '' ? trim($node->textContent, "\t\n\r\0\x0B") : '');
				break;

			case XML_ELEMENT_NODE:

// for each child node, call the covert function recursively
				for ($i = 0, $m = $node->childNodes->length; $i < $m; ++$i) {
					$child = $node->childNodes->item($i);
					$v     = self::convert($child);
					if (isset($child->tagName)) {
						$t            = $child->tagName;
						$output[][$t] = $v;
					} else {
//check if it is not an empty node
						if (!empty($v)) {
							$output = $v;
						}
					}
				}

				if (is_array($output)) {
// if only one node of its kind, assign it directly instead if array($value);
					if (is_array($output) && count($output) == 1) {
						$output = $output[0];
					}
					if (empty($output)) {
//for empty nodes
						$output = '';
					}
				}

// loop through the attributes and collect them
				if ($node->attributes->length) {
					$a = [];
					foreach ($node->attributes as $attrName => $attrNode) {
						$a[$attrName] = $attrNode->value;
					}
// if its an leaf node, store the value in FIELD_VALUE instead of directly storing it.
					if (!is_array($output)) {
						$output = [self::FIELD_VALUE => $output];
					}
					$output[self::FIELD_ATTRIBUTES] = $a;
				}
				break;
		}

		return $output;
	}

	/**
	 * Get the root XML node, if there isn't one, create it.
	 *
	 * @return DOMDocument
	 */
	private static function getXMLRoot() {
		if (empty(self::$xml)) {
			self::init();
		}

		return self::$xml;
	}

}
