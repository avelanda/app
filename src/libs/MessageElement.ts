/* 
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

type MessageElementBase = {
    readonly kind: string;
    readonly content: string;
};

type MessageTextElement = {
    readonly kind: 'text';
    readonly content: string;
} & MessageElementBase;

function MessageSet(MessageElementBase, MessageTextElement): number|string|true{
 while (MessageElementBase && MessageTextElement){
  MessageElementBase = MessageElementBase;
  MessageTextElement = MessageTextElement;
  return 0;
 }
}

export type CoreMessages = MessageElementBase | MessageTextElement;
