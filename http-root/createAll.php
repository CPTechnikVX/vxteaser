<?php
ini_set('display_errors', 1);

require_once __DIR__ . '/VXTeaserXMLContent.php';

function getTeasers() {
	$result = [];

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner theme="light" link="https://www.visit-x.net/de/magazin/aktuelle-ausgabe/">
   <content>
      <skewpanelgroup skewWidth="55%">
         <panel width="45%">
            <row>
               <col><headline type="sub">Januar 2018 - Ausgabe</headline></col>
            </row>
            <row>
                <col>
               <headline type="main">
                  <text>VISIT-X  Magazin</text>
               </headline>
               </col>
            </row>
            <row>
                <col>
                <headline>
                  <text>Alles NEU macht 2018 - so auch das VISIT-X-Magazin! Wir haben coole Reviews
    der Essen Motor Show und der legendären Night of the Nights für Dich uvm.</text>
    </headline>
               </col>
            </row>
            <row>
                <col>
               <button color="primary">Jetzt online lesen</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
		'color1'          => '#000000',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
		'color2'          => '#000000',
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner theme="special">
   <content>
      <skewpanelgroup skewWidth="55%">
         <panel width="45%">
            <row>
               <col><headline type="sub" modifier="-mb-10"><text>Überrasche Deine Favoritin!</text></headline></col>
            </row>
            <row>
                <col>
               <headline type="main">
                  <text>HAPPY VALENTINES DAY!</text>
               </headline>
               </col>
            </row>
            <row>
                <col>
	               <headline><text>Verschenke am 14. Februar eine Rose per Nachricht oder im Chat und mit etwas Glück schickt VISIT-X Deiner Favoritin einen echten Strauß Rosen direkt
	               nach Hause! Jede verschenkte Rose erhöht Deine Gewinnchancen!</text></headline>
               </col>
            </row>
            <row>
                <col>
               <button color="white">Rose verschenken!</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/teaser_valentinesday2018.jpg',
		'color1'          => '#000000',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/teaser_valentinesday2018.jpg',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
		'color2'          => '#000000',
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner>
   <content color="#FFFFFF">
      <skewpanelgroup skewWidth="50%">
         <panel width="45%">
            <row>
            <col>
              <headline type="main" modifier="-mb-5 -text-align-left">
                 <text>Willkommen zurück,</text>
              </headline>
              </col>
            </row>
            <row>
            <col>
              <headline type="sub" modifier="-text-align-left">
                 <text>PETR001</text>
              </headline>
              </col>
            </row>
            <row>
               <col>
	               <row>
		               <col width="12%"><icon modifier="icon -icon-chat-flat h-vertical-align-top h-disp-block h-left -size-md teaser__text-icon" /></col>
		               <col width="88%" modifier="-align-center">
		                 <link>
		                    <headline modifier="-mb-0 -text-align-left"><text>Du hast</text></headline>
		                    <headline modifier="-text-align-left"><text color="description" modifier="-font-light">51 neue Nachrichten</text></headline>
		                 </link>
		               </col>
	               </row>
               </col>
               <col>
               <row>
		               <col width="12%"><icon modifier="icon -icon-euro-line h-vertical-align-top h-disp-block h-left -size-md teaser__text-icon" /></col>
		               <col width="88%">
		                 <link>
			                 <headline modifier="-mb-0 -text-align-left"><text>Dein Guthaben 47,03€</text></headline>
			                 <headline modifier="-text-align-left"><text color="description" modifier="-font-light">Jetzt aufladen</text></headline>
			              </link>
		               </col>
               </row>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'          => $arr,
		'template'         => 'fixedHeight',
		'height1'          => 260,
		'backgroundUrl1'   => 'https://www.visit-x.net/assets/img/teaser/teaser-all-welcome-bg.jpg',
		'backgroundColor1' => '#262728',
		'breakpoint1'      => 1200,
		'backgroundUrl2'   => 'https://www.visit-x.net/assets/img/teaser/teaser-all-welcome-bg.jpg',
		'height2'          => 500,
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner theme="transparent">
   <content color="#FFFFFF">
      <skewpanelgroup skewWidth="54%">
         <panel width="45%">
            <row>
               <col>
                  <headline type="main">
                     <text>18 Jahre BiggiBardot</text>
                  </headline>
               </col>
            </row>
            <row>
            <col>
               <headline type="sub">
                  <text>Die Kultfigur im Erotikbusiness feiert ihr 18. Jubiläum!</text>
               </headline>
               </col>
            </row>
            <row>
            <col>
               <headline>
                  <text>Wer die heiße Blondine live sehen will, kann sich jetzt zu ihr in den Livechat klicken. Denn BiggiBardot ist heute DEN GANZEN TAG online!</text>
               </headline>
               </col>
            </row>
            <row>
            <col>
               <button color="primary">Zur Party</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/teaser-biggibardot-18-years.jpg',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/teaser-biggibardot-18-years.jpg',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner>
	<content color="#FFFFFF">
		<skewpanelgroup skewWidth="54%">
			<panel width="45%" valign="bottom">
				<row>
					<col>
					<headline type="sub">
						<text>Jetzt kennenlernen: Unsere</text>
					</headline>
					</col>
				</row>
				<row>
					<col>
					<headline type="main">
						<text>KATEGORIE</text><br/><text>ÜBERSICHT</text>
					</headline>
					</col>
				</row>
			</panel>
			<panelskewbutton link="https://www.visit-x.net/de/kategorien/31-hotties/">Hotties</panelskewbutton>
			<panelskewbutton link="https://www.visit-x.net/de/kategorien/74-tattoos/">Tattos</panelskewbutton>
			<panelskewbutton link="https://www.visit-x.net/de/kategorien/18-reife-frauen/">Reife Frauen</panelskewbutton>

			<panelskew src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-01.jpg" link="https://www.visit-x.net/de/kategorien/31-hotties/"></panelskew>
			<panelskew src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-02.jpg" link="https://www.visit-x.net/de/kategorien/74-tattoos/"></panelskew>
			<panelskew src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-03.jpg" link="https://www.visit-x.net/de/kategorien/18-reife-frauen/"></panelskew>
		</skewpanelgroup>
	</content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => '',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => '',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner>
   <content color="#FFFFFF">
      <skewpanelgroup skewWidth="54%">
         <panel width="45%" valign="bottom">
            <row>
               <col>
                  <headline type="sub">
                     <text>Jetzt kennenlernen: Unsere</text>
                  </headline>
               </col>
            </row>
            <row>
                <col>
	               <headline type="main">
	                  <text>KATEGORIEÜBERSICHT</text>
	               </headline>
               </col>
            </row>
         </panel>
        <panelskewbutton link="https://www.visit-x.net/de/kategorien/31-hotties/">Hotties</panelskewbutton>
        <panelskewbutton link="https://www.visit-x.net/de/kategorien/74-tattoos/">Tattos</panelskewbutton>
        
         <panelskew src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-01.jpg" link="https://www.visit-x.net/de/kategorien/31-hotties/"></panelskew>
         <panelskew src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-02.jpg" link="https://www.visit-x.net/de/kategorien/74-tattoos/"></panelskew>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => '',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => '',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner theme="light">
   <content>
      <skewpanelgroup skewWidth="55%">
         <panel width="45%">
            <row>
               <col><headline>Täglich spielen und gewinnen!</headline></col>
            </row>
            <row>
                <col>
               <headline>
                  <text>VISIT-X Slotmachine</text>
               </headline>
               </col>
            </row>
            <row>
                <col>
	               <headline><text>Knacke den heißesten Jackpot ever und gewinne einen</text></headline>
	               <headline><text color="highlight">Bonus von bis zu 50% oder einen heißen 18+ Clip!</text></headline>                  
               </col>
            </row>
            <row>
                <col>
               <button color="primary">Jetzt spielen!</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/slotmachine/teaser_slotmachine_2018.jpg',
		'color1'          => '#000000',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/slotmachine/teaser_slotmachine_2018.jpg',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
		'color2'          => '#000000',
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner theme="light">
   <content>
      <skewpanelgroup skewWidth="55%">
         <panel width="45%">
            <row>
                <col>
	               <headline type="sub"><text>Jetzt VIP Gratismonat starten und zusätzlich 20€ Startguthaben</text></headline>
               </col>
            </row>
            <row>
                <col>
               <button color="green">Jetzt einlösen</button>
               </col>
                <col>
               <countdown timer="120">Nur noch: 11:45:59</countdown>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'content'         => $arr,
		'template'        => 'fixedHeight',
		'height1'         => 260,
		'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/teaser-trial-abo-bg.jpg',
		'color1'          => '#000000',
		'breakpoint1'     => 1200,
		'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/teaser-trial-abo-bg.jpg',
		'backgroundSize2' => 'auto',
		'height2'         => 500,
		'color2'          => '#000000',
	];
	/************ TEASER END *********/

	return $result;
}

$response = getTeasers();
$json     = json_encode($response);

header('Content-type: text/json');
echo $json;
