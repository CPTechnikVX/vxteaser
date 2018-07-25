### 1. Play a video in modalbox

#### Syntax: `vx-action://video?id=UMA_ID`

```html
<link link="vx-action://video?id=123456">
	<icon modifier="vxteaser-playbutton--big icon -icon-play-rounded-line" />
</link>
```

#### Syntax: `vx-action://video?url=VIDEO_URL`

```html
<link link="vx-action://video?url=https://www.youtube.com/this-is-my-video.mp4">
	<icon modifier="vxteaser-playbutton--big icon -icon-play-rounded-line" />
</link>
```

### 2. Start payment flow with custom texts and background image

#### Syntax: `vx-action://payment?signupText=TEXT&amp;signupBackground=IMAGE_URL`

```html
<link link="vx-action://payment?signupText=Hey, let's signup!&amp;signupBackground=https://www.google.com/logos/doodles/2018/world-cup-2018-day-12-6225439109414912-5703128158568448-ssw.png">
	<icon modifier="icon -icon-login" />
</link>
```

```html
<banner theme="dark" link="vx-action://payment?signupText=Hey, let's signup!&amp;signupBackground=https://www.google.com/logos/doodles/2018/world-cup-2018-day-12-6225439109414912-5703128158568448-ssw.png">
...
</banner>
```
