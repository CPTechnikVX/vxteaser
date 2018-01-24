<?php
ini_set('display_errors', 1);

require_once __DIR__ . '/../VXTeaserXMLContent.php';

function getTeasers() {
	$result = [];

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner url="link:SexyVany" theme="white">
   <content>
      <skewpanelgroup skewWidth="55%" skewColor="#000000">
         <panel width="45%">
            <row>
               <col><headline type="sub">Januar 2018 - Ausgabe</headline></col>
            </row>
            <row>
                <col>
               <headline type="main">
                  <text>VISIT-X Community Magazin</text>
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
               <button color="primary" url="link:OnlineMag">Jetzt kostenlos online lesen</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
			'content'         => $arr,
			'template'        => 'fixedHeight',
			'height1'         => 260,
			'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
			'color1'          => '#000000',
			'breakpoint1'     => 1200,
			'backgroundUrl2'  => 'https://ph.vxnextgen.x/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
			'backgroundSize2' => 'auto',
			'height2'         => 500,
			'color2'          => '#000000',
		],
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner url="link:SexyVany" theme="white">
   <content>
      <skewpanelgroup skewWidth="55%" skewColor="#000000">
         <panel width="45%">
            <row>
               <col><headline><text color="highlight">Überrasche Deine Favoritin!</text></headline></col>
            </row>
            <row>
                <col>
               <headline>
                  <text>HAPPY VALENTINES DAY!</text>
               </headline>
               </col>
            </row>
            <row>
                <col>
	               <headline size="1.6rem"><text>Verschenke am 14. Februar eine Rose per Nachricht oder im Chat und mit</text></headline>
	               <headline size="1.6rem"><text>etwas Glück schickt VISIT-X Deiner Favoritin einen echten Strauß Rosen direkt</text></headline>
	               <headline size="1.6rem"><text>nach Hause! Jede verschenkte Rose erhöht Deine Gewinnchancen!</text></headline>
               </col>
            </row>
            <row>
                <col>
               <button color="primary" url="link:OnlineMag">Jetzt Rose verschenken!</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
			'content'         => $arr,
			'template'        => 'fixedHeight',
			'height1'         => 260,
			'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/teaser_valentinesday2018.jpg',
			'color1'          => '#000000',
			'breakpoint1'     => 1200,
			'backgroundUrl2'  => 'https://ph.vxnextgen.x/assets/img/teaser/teaser_valentinesday2018.jpg',
			'backgroundSize2' => 'auto',
			'height2'         => 500,
			'color2'          => '#000000',
		],
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
              <headline>
                 <text>Willkommen zurück,</text>
              </headline>
              </col>
            </row>
            <row>
            <col>
              <headline>
                 <text>PETR001</text>
              </headline>
              </col>
            </row>
            <row>
               <col>
                 <link url="News">
                    <headline size="1.4rem"><text>Du hast</text></headline>
                    <headline size="1.4rem"><text>51 neue Nachrichten</text></headline>
                 </link>
               </col>
               <col>
                 <link url="Balance">
	                 <headline size="1.4rem"><text>Dein Guthaben 47,03€</text></headline>
	                 <headline size="1.4rem"><text>Jetzt aufladen</text></headline>
	              </link>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
			'content'          => $arr,
			'template'         => 'fixedHeight',
			'height1'          => 260,
			'backgroundUrl1'   => 'https://ph.vxnextgen.x/assets/img/teaser/teaser-all-welcome-bg.jpg',
			'backgroundColor1' => '#262728',
			'breakpoint1'      => 1200,
			'backgroundUrl2'   => 'https://ph.vxnextgen.x/assets/img/teaser/teaser-all-welcome-bg.jpg',
			'height2'          => 500,
		],
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner>
   <content color="#FFFFFF">
      <skewpanelgroup skewWidth="54%">
         <panel width="45%">
            <row>
               <col>
                  <headline>
                     <text>18 Jahre BiggiBardot</text>
                  </headline>
               </col>
            </row>
            <row>
            <col>
               <headline size="2rem">
                  <text color="highlight">Die Kultfigur im Erotikbusiness feiert ihr 18. Jubiläum!</text>
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
               <button color="primary" url="link:PartyBiggi">Zur Party mit BiggiBardot</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
			'content'         => $arr,
			'template'        => 'fixedHeight',
			'height1'         => 260,
			'backgroundUrl1'  => 'https://www.visit-x.net/assets/img/teaser/teaser-biggibardot-18-years.jpg',
			'breakpoint1'     => 1200,
			'backgroundUrl2'  => 'https://www.visit-x.net/assets/img/teaser/teaser-biggibardot-18-years.jpg',
			'backgroundSize2' => 'auto',
			'height2'         => 500,
		],
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
                  <headline size="2.4rem">
                     <text>Jetzt kennenlernen: Unsere</text>
                  </headline>
               </col>
            </row>
            <row>
                <col>
	               <headline>
	                  <text>KATEGORIEÜBERSICHT</text>
	               </headline>
               </col>
            </row>
         </panel>
         <container valign="top">
            <panelskewbutton>AAA</panelskewbutton>
            <panelskewbutton>BBB</panelskewbutton>
            <panelskewbutton>CCC</panelskewbutton>
            
	         <panelskew width="15%" src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-01.jpg">    
	         </panelskew>
	         <panelskew width="15%" src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-02.jpg">    
	         </panelskew>
	         <panelskew width="15%" src="https://www.visit-x.net/assets/img/teaser/teaser-existing-categories-03.jpg">    
	         </panelskew>
         </container>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
			'content'         => $arr,
			'template'        => 'fixedHeight',
			'height1'         => 260,
			'backgroundUrl1'  => '',
			'breakpoint1'     => 1200,
			'backgroundUrl2'  => '',
			'backgroundSize2' => 'auto',
			'height2'         => 500,
		],
	];
	/************ TEASER END *********/

	/************ TEASER START *********/
	$inputXML = /** @lang xml */
		<<<EOT
<banner url="link:SexyVany" theme="white">
   <content>
      <skewpanelgroup skewWidth="55%" skewColor="#000000">
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
               <button color="primary" url="link:OnlineMag">Jetzt spielen und gewinnen!</button>
               </col>
            </row>
         </panel>
      </skewpanelgroup>
   </content>
</banner>
EOT;

	$arr = VXTeaserXMLContent::createArray($inputXML);

	$result[] = [
		'typeConfig' => [
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
		],
	];
	/************ TEASER END *********/

	return $result;
}

$response = getTeasers();
$json     = json_encode($response);

header('Content-type: text/json');
echo $json;
