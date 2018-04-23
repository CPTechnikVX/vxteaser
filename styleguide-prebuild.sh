#!/usr/bin/env bash

MODIFIER_FILE=src/components/Content/Modifier.md

echo "\`\`\`html" > $MODIFIER_FILE
cat src/less/modifier.less >> $MODIFIER_FILE
echo "\`\`\`" >> $MODIFIER_FILE
