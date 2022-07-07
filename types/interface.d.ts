export interface AccordionContent {
  title: string;
  content: string;
}

export interface AccordionContents {
  item: AccordionContent;
}

export interface Accordion {
  id: number;
  title: string;
  contents: AccordionContents;
}

export interface Todo {
  id: number
  title: string
  description: string
  done: boolean
}
