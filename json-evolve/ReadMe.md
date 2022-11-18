# jsonEvolve
a package to query json directly without having to parse it into a model

It should be able to parse any JSON without special key characters within their keys or values
the following characters: "{},[] are special key characters


**HOW TO USE:**

1) run `npm i json-evolve` in terminal


2) add import statement:<br />
`import je from 'json-evolve/types/jsonEvolve.js';`

3) create an assertion or Get a value or Key:<br />

**.assert**<br />

- Assert that a key contains data within your json <br />
`je.assert.KeyContainsData(json, key)`

- Assert that a key with an ancestor contains data within your json <br />
`je.assert.KeyWithAncestorContainsData(json, key, ancestor)`

- Assert that json contains an exact value at a   key<br />
`je.assert.SubsetEquals(json, key, value)`

- Assert that json contains value at a   key<br />
`je.assert.SubsetContains(json, key, value)`

- Assert that json contains an exact value at a   key with a   key parent<br />
`je.assert.SubsetWithParentEquals(json, key, parentKey, value)`

- Assert that json contains value at a   key with a   parent<br />
`je.assert.SubsetWithParentContains(json, key, parentKey, value)`

- Assert that json contains an exact value at a   key with a   ancestor (parent to (parent of parent of parent...))<br />
`je.assert.SubsetWithAncestorEquals(json, key, ancestorKey, value)`

- Assert that json contains value at a   key with a   ancestor (parent to (parent of parent of parent...))<br />
`je.assert.SubsetWithAncestorContains(json, key, ancestorKey, value)`

- Assert that json contains an exact value at a    index within an Array with a   key<br />
`je.assert.SubsetOfArrayAtIndexEquals(json, key, index, value)`

- Assert that json contains value at a    index within an Array with a   key<br />
`je.assert.SubsetOfArrayAtIndexContains(json, key, index, value)`

- Assert that json contains an exact value at a    index within an Array with a   key with a   parent key<br />
`je.assert.SubsetOfArrayAtIndexWithParentEquals(json, key, index, parentKey, value)`

- Assert that json contains value at a    index within an Array with a   key with a   parent key<br />
`je.assert.SubsetOfArrayAtIndexWithParentContains(json, key, index, parentKey, value)`

- Assert that json contains an exact value at a    index within an Array with a   key with a   Ancestor key<br />
`je.assert.SubsetOfArrayAtIndexWithAncestorEquals(json, key, index, ancestorKey, value)`

- Assert that json contains value at a    index within an Array with a   key with a   Ancestor key<br />
`je.assert.SubsetOfArrayAtIndexWithAncestorContains(json, key, index, ancestorKey, value)`


**.get**

**VALUE**

- Get value with Key from Json<br />
`je.get.value(json, key)`

- Get value with key with parent from Json<br />
`je.get.valueWithParent(json, key, parentKey)`

- Get value with key with ancestor from Json<br />
`je.get.valueWithAncestor(json, key, ancestorKey)`

- Get values for an array from Json<br />
`je.get.values(json, key)`

- Get value at index of an array from Json<br />
`je.get.valueAtIndex(json, key, index)`

- Get value of index within multidimensional array from Json (ordered in same way you would call an array arr[parentIndex][index]<br />
`je.get.valueAtIndexWithParentIndex: (json, key, parentIndex, index)`

**KEYS**

- Get amount of keys in json <br />
`je.get.keysAmount(json)`

- Get Key at index from json <br />
`je.get.keyAtIndex(json, index)`
