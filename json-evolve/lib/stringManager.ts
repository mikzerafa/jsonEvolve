export class StringManager {
    GetNextBetween(text: String, first: string, last: string) {
        const start = text.indexOf(first);
        return text.substring(start + 1, text.indexOf(last, start + 1))
    }

    /*
       Returns the text inbetween first and last variables but  fwhen irst variables occurs prior to finding last variable it skips how many its found
       @param text - the json or part of the json to search
       @param first - starting characters of text to return but not included
       @param last - ending characters of text to return but not included

       @returns text between first and last useful for "{ }"


    */

    CleanValue(value: string) {
        let output = value;
        if (this.FirstCharIgnoringSpacesIs(value, ',')) {
            output = output.substring(output.indexOf(',') + 1, output.length);
        }

        return output;
    }

    RemoveSpaces(value: string): string {
        let strValue = new String(value);
        strValue = strValue.trim();

        return strValue + "";
    }

    FirstCharIgnoringSpacesIs(text: string, toFind: string) {
        let index = 0;
        while (index < text.length && (text[index] == " " || text[index] == "\n" || text[index].charCodeAt(0) == 9)) {
            index = index + 1;
        }
        //console.log('text: ' + text);
        //console.log('First char= ' + text[index] + ' expected: ' + toFind + ' returning: ' + (text[index] == toFind));
        return text[index] == toFind;
    }

    LastCharIgnoringSpacesIs(text: string, toFind: string) {
        let index = text.length - 1;
        while (index > 0 && (text[index] == " " || text[index] == "\n" || text[index].charCodeAt(0) == 9)) {
            index--;
        }
        //console.log("found ascii char: " + text[index].charCodeAt(0) + ' looking for' + toFind);
        return text[index] == toFind;
    }

    DynamicSplit(text: string, splitAt: string): Map<number, string> {
        let output: Map<number, string> = new Map<number, string>();
        let foundElement: string = "";
        let ignore: number = 0;
        let elementsFound: number = 0;

        for (let index = 0; index < text.length; index++) {
            foundElement = "";
            if (text[index] == '{') {
                //ignore commas until closing }
                let index2 = index + 1;
                while (text[index2] != '}' || ignore > 0) {
                    if (text[index2] == '{') {
                        ignore = ignore + 1;
                    }
                    if (text[index2] == '}') {
                        ignore = ignore - 1;
                    }
                    index2++;
                }

                foundElement = text.substring(index, index2 + 1)
                text = text.substring(index2 + 1);
                index = 0;
            }
            else if (text[index] == '[') {
                //ignore commas until closing }
                let index2 = index + 1;
                while (text[index2] != ']' || ignore > 0) {
                    if (text[index2] == '[') {
                        ignore = ignore + 1;
                    }
                    if (text[index2] == ']') {
                        ignore = ignore - 1;
                    }
                    index2++;
                }

                foundElement = text.substring(index, index2 + 1)
                text = text.substring(index2 + 1, text.length)
                index = 0;
            }
            else if (text[index] == splitAt) {
                foundElement = text.substring(0, index)
                text = text.substring(index + 1, text.length);
                index = 0;
            }
            else if (index == text.length - 1 && new String(text).trim().length > 0) {

                foundElement = text;
                text = "";
            }
            if (foundElement != "") {
                output.set(elementsFound, foundElement)
                elementsFound = elementsFound + 1;
            }
        }


        return output;

    }

    LastIndexOf(text: string, toFind: string) {
        const txt = new String(text);
        return txt.lastIndexOf(toFind);
    }

    IsString(text: string) {
        let output: boolean = text.length > 1;
        if (output) {
            output = text[0] == "\"" && text[text.length - 1] == "\"";
        }
        return output;
    }

    CleanString(text: string): string {
        return this.GetNextBetween(text, "\"", "\"");
    }

    CleanStringsInArray(arr: Map<number, string>): Map<number, string> {
        // console.log('array size: ' + arr.size);
        for (var index = 0; index < arr.size; index++) {
            //  console.log('index: ' + index);
            if (this.IsString(arr.get(index))) {
                arr.set(index, this.CleanString(arr.get(index)));
            }
        }
        return arr;
    }

    GetNextBetweenDynamic(text: string, first: string, last: string) {
        const start = text.indexOf(first);
        let openFound = 1;
        let closedFound = 0
        let finish = 0;

        for (let index = text.indexOf(first) + 1; index < text.length; index++) {
            if (text[index] == first) {
                openFound = openFound + 1;
            }
            else if (text[index] == last) {
                closedFound = closedFound + 1;
            }

            if (openFound == closedFound) {
                finish = index;
                index = text.length;
            }
        }
        return text.substring(start + 1, finish);
    }

    hasKey(text: string) {
        let opened = false;
        let output = false;
        // ignore ':' between strings
        if (text.includes(':')) {
            let temp = text.substring(0, text.indexOf(":"));
            temp = temp.substring(temp.indexOf("\""));
            if (this.IsString(temp)) {
                output = true;
            }
        }

        return output;
    }

    GetNextBetweenOptions(text: string, first: string[], last: string[]) {
        let start = Infinity;
        let foundIndex = Infinity;
        let startIndex = 0;
        let output = "";
        for (let index = 0; index < first.length; index++) {
            foundIndex = text.indexOf(first[index]);
            if (start > foundIndex && foundIndex != -1) {
                start = foundIndex;
                startIndex = index;
            }
        }
        if (first[startIndex] == "{") {
            output = this.GetNextBetweenDynamic(text, first[startIndex], last[startIndex])
        }
        else if (first[startIndex] == "\"") {
            let closingIndex = 0;
            let toIgnore = 0
            for (let index = 0; index < text.length; index++) {
                if (text[index] == "\"") {
                    if (index > 0) {
                        if (text[index - 1] != "\\") {
                            if (toIgnore == 0) {
                                closingIndex = index;
                                index = text.length;
                            }
                            toIgnore = toIgnore - 1;
                        }
                    }
                }
            }

            if (closingIndex == text.indexOf("\"")) {

                closingIndex = text.indexOf("\"", text.indexOf("\"") + 1) - 1;
            }

            output = text.substring(text.indexOf("\"") + 1, closingIndex + 1);
            // console.log('returning output: ' + output);

        }
        else {
            output = this.GetNextBetween(text, first[startIndex], last[startIndex]);
        }

        return output
    }

    GetNextBetweenOptionsAfter(text: string, first: string[], last: string[], after: string) {
        text = text.substring(text.indexOf(after) + after.length);

        return this.GetNextBetweenOptions(text, first, last)
    }

    RemoveUntilIncluding(text: string, toRemoveUntilIncluding: string) {
        let output = text;
        if (text != null && toRemoveUntilIncluding != null) {
            output = text.substring(text.indexOf(toRemoveUntilIncluding) + toRemoveUntilIncluding.length);
        }
        return output;
    }

    RemoveUntil(text: string, toRemoveUntil: string) {
        return text.substring(text.indexOf(toRemoveUntil) + 1)
    }

    ContainsAnyOf(text: string, options: string[]) {
        let output = false;
        options.forEach(op => {
            if (text.includes(op)) {
                output = true;
            }
        })
        return output;
    }
}