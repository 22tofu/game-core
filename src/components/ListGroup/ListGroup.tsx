import { useState } from "react";
import style from "./ListGroup.module.css";
import styled from "styled-components";

interface Items {
  id: number;
  name: string;
}
interface ListProps {
  items: Items[];
  header: string;
  onSelectItem: (name: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? "lightblue" : "white")};
`;

function ListGroup({ items, header, onSelectItem }: ListProps) {
  let [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item) => {
          return (
            <ListItem
              active={selectedItem === item.id}
              className={
                selectedItem === item.id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item.id}
              onClick={() => {
                setSelectedItem(item.id);
                onSelectItem(item.name);
              }}
            >
              {item.name}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default ListGroup;
