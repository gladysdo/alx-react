import { Map } from 'immutable';

// Create the initial Immutable Map
const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Create the modified Immutable Map based on the first map
const map2 = map.withMutations((mutableMap) => {
    // Modify the value for the index 2 to 'Benjamin'
    mutableMap.set(2, 'Benjamin');
    // Modify the value for the index 4 to 'Oliver' (no change)
    mutableMap.set(4, 'Oliver');
});

// Export the constants
export { map, map2 };
