#!/usr/bin/env bash

MODIFIER_FILE=docs/css-modifiers.md

echo "\`\`\`html" > $MODIFIER_FILE
cat src/less/modifier.less >> $MODIFIER_FILE
echo "\`\`\`" >> $MODIFIER_FILE
