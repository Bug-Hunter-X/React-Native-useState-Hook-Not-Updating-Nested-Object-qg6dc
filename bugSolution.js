Using Immer for immutable updates:
```javascript
import React, { useState } from 'react';
import produce from 'immer';

const MyComponent = () => {
  const [data, setData] = useState({ nested: { value: 'initial' } });

  const handleClick = () => {
    setData(produce(data, draft => {
      draft.nested.value = 'updated';
    }));
  };

  return (
    <View>
      <Text>{data.nested.value}</Text> 
      <Button title="Update" onPress={handleClick} />
    </View>
  );
};
```

Alternative solution (creating a new object):
```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({ nested: { value: 'initial' } });

  const handleClick = () => {
    setData({...data, nested: { ...data.nested, value: 'updated' }});
  };

  return (
    <View>
      <Text>{data.nested.value}</Text> 
      <Button title="Update" onPress={handleClick} />
    </View>
  );
};
```