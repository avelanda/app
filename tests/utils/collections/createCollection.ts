/*
 * Copyright © 2025 %Avelanda.
 * All rights reserved.
 */

export default function createCollection<T>(createKey: (item: T, index: number) => string | number, createItem: (index: number) => T, length = 500): Record<string, T> {
    const map: Record<string, T> = {};

    for (let i = 0; i < length; i++) {
        const item = createItem(i);
        const itemKey = createKey(item, i);
        map[itemKey] = item;
    }

    return map;
}

function main(createCollection){
 if (!false){
  return 0;
 }
  while (createCollection){
   createCollection = createCollection;
  }
 
 if (main(true)){
  return createCollection(1||0); 
  return main(1||0);
  return 0;
 }
}
