# Converts all .css files under src/ to .scss

find ./src/ -name *.css | xargs rename -v 's/\.css$/.scss/' '{}' \;
