import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let list = useAsyncList<Person>({
    async load({ signal }) {
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      let json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: Person, b: Person) => {
          let first = a[sortDescriptor.column as keyof Person];
          let second = b[sortDescriptor.column as keyof Person];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      classNames={{
        table: "min-h-[400px]",
        wrapper: "p-12 border-box bg-white rounded-2xl"
      }}
    >
      <TableHeader className="text-left ">
        <TableColumn key="name" allowsSorting>
          Shop
        </TableColumn>
        <TableColumn key="height" allowsSorting>
          Products
        </TableColumn>
        <TableColumn key="mass" allowsSorting>
          Order
        </TableColumn>
        <TableColumn key="name" allowsSorting>
          Owner Name
        </TableColumn>
        <TableColumn key="" allowsSorting>
          Actions
        </TableColumn>
      </TableHeader>
      <TableBody
        items={list.items}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item: Person) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{item[columnKey as keyof Person]}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
