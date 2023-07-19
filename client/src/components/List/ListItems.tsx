import { ReactNode, MouseEvent } from "react";

interface RenderItemsProps<T> {
  items: T[] | undefined;
  listItemsClassName?: string;
  renderItems: (item: T) => ReactNode;
  onClick?: (e: MouseEvent) => void;
}

const RenderItems =<T,> ({ items, renderItems, listItemsClassName, onClick }: RenderItemsProps<T>) => {
  const handleOnClick = (e: MouseEvent) => {
    if(onClick){
      onClick(e);
    }
  };

  return (
    <ul className={listItemsClassName} onClick={handleOnClick}>
      {items?.map(item => renderItems(item))}
    </ul>
  );
};

export default RenderItems;
