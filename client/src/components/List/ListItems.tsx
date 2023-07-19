import { ReactNode } from "react";

interface RenderItemsProps<T> {
  items: T[] | undefined;
  listItemsClassName?: string;
  renderItems: (item: T) => ReactNode;
}

const RenderItems =<T,> ({ items, renderItems, listItemsClassName }: RenderItemsProps<T>) => {
  return (
    <ul className={listItemsClassName}>
      {items?.map(item => renderItems(item))}
    </ul>
  );
};

export default RenderItems;
